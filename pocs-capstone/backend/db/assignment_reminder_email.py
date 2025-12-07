from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
import ssl
import smtplib
import os
from dotenv import load_dotenv, find_dotenv
from datetime import datetime, timedelta, timezone
import requests



def _load_env():
    """Load environment variables from .env."""
    load_dotenv(find_dotenv())


def _get_canvas_headers():
    """Return headers for Canvas API requests."""
    token = os.getenv("CANVAS_API_TOKEN")
    if not token:
        raise RuntimeError("CANVAS_API_TOKEN not set in .env")
    return {
        "Authorization": f"Bearer {token}"
    }


def get_upcoming_canvas_assignments(days_ahead: int = 7):
    """
    Fetch assignments due in the next `days_ahead` days from Canvas.

    Returns a list of dicts:
    [
      {
        "course_name": str,
        "course_id": int,
        "name": str,
        "due_at": datetime,
        "html_url": str or None,
        "points_possible": float or None,
      },
      ...
    ]
    """
    _load_env()
    base_url = os.getenv("CANVAS_BASE_URL")
    if not base_url:
        raise RuntimeError("CANVAS_BASE_URL not set in .env")

    base_url = base_url.rstrip("/")

    headers = _get_canvas_headers()

    now = datetime.now(timezone.utc)
    cutoff = now + timedelta(days=days_ahead)

    assignments = []

    try:
        # Get active courses for the user associated with the token
        courses_resp = requests.get(
            f"{base_url}/api/v1/courses",
            headers=headers,
            params={"enrollment_state": "active"}
        )
        courses_resp.raise_for_status()
        courses = courses_resp.json()
    except Exception as e:
        print(f"[Canvas] Failed to fetch courses: {e}")
        return []

    for course in courses:
        course_id = course.get("id")
        course_name = course.get("name", "Unknown Course")

        if not course_id:
            continue

        try:
            # 'upcoming' bucket focuses on future assignments
            assignments_resp = requests.get(
                f"{base_url}/api/v1/courses/{course_id}/assignments",
                headers=headers,
                params={"bucket": "upcoming"}
            )
            assignments_resp.raise_for_status()
            course_assignments = assignments_resp.json()
        except Exception as e:
            print(f"[Canvas] Failed to fetch assignments for course {course_id}: {e}")
            continue

        for a in course_assignments:
            due_at_str = a.get("due_at")
            if not due_at_str:
                # No due date, skip for reminders
                continue

            try:
                due_at = datetime.fromisoformat(due_at_str.replace("Z", "+00:00"))
            except ValueError:
                # If parsing fails, skip this assignment
                continue

            if now <= due_at <= cutoff:
                assignments.append({
                    "course_name": course_name,
                    "course_id": course_id,
                    "name": a.get("name", "Untitled Assignment"),
                    "due_at": due_at,
                    "html_url": a.get("html_url"),
                    "points_possible": a.get("points_possible"),
                })

    # Sort by due date
    assignments.sort(key=lambda x: x["due_at"])
    return assignments


def build_assignments_email_html(assignments, days_ahead: int):
    """
    Build an HTML email body listing upcoming assignments.
    """
    if not assignments:
        return f"""
        <html>
        <body style="font-family: Arial, sans-serif;">
            <h2>Upcoming Assignments (next {days_ahead} days)</h2>
            <p>You have no assignments due in the next {days_ahead} days 🎉</p>
        </body>
        </html>
        """

    # Build list items for assignments
    items_html = ""
    for a in assignments:
        due_local = a["due_at"].astimezone().strftime("%b %d, %Y %I:%M %p")
        name = a["name"]
        course_name = a["course_name"]
        points = a["points_possible"]
        url = a["html_url"]

        points_text = f"{points} pts" if points is not None else "Points: N/A"

        if url:
            name_html = f'<a href="{url}" target="_blank" style="color:#3c906f;text-decoration:none;">{name}</a>'
        else:
            name_html = name

        items_html += f"""
        <tr>
            <td style="padding: 8px; border-bottom: 1px solid #eee;">
                <strong>{name_html}</strong><br/>
                <span style="color:#555;">Course: {course_name}</span><br/>
                <span style="color:#555;">Due: {due_local}</span><br/>
                <span style="color:#555;">{points_text}</span>
            </td>
        </tr>
        """

    html = f"""
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8" />
        <title>Upcoming Assignments</title>
    </head>
    <body style="background-color:#ffffff; margin:0; padding:0; font-family: Arial, sans-serif;">
        <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#ffffff;">
            <tr>
                <td align="center" style="padding: 20px;">
                    <table width="600" cellpadding="0" cellspacing="0" style="border:1px solid #ddd; border-radius:8px; overflow:hidden;">
                        <tr>
                            <td style="background-color:#3c906f; color:#ffffff; padding:20px; text-align:center;">
                                <h1 style="margin:0; font-size:24px;">Study Buddy – Assignment Reminders</h1>
                            </td>
                        </tr>
                        <tr>
                            <td style="padding:20px;">
                                <p style="margin-top:0; font-size:16px;">
                                    Here are your assignments due in the next <strong>{days_ahead}</strong> days:
                                </p>
                                <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
                                    {items_html}
                                </table>
                                <p style="margin-top:20px; font-size:14px; color:#555;">
                                    Tip: Try to knock out the earliest due items first to stay ahead 😎
                                </p>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
    </body>
    </html>
    """
    return html


def send_assignment_reminder_email(email_receiver: str, days_ahead: int = 7):
    """
    Fetch upcoming assignments from Canvas and send an email reminder.

    :param email_receiver: Email address to send reminders to.
    :param days_ahead: Look-ahead window (in days) for upcoming assignments.
    """
    _load_env()

    email_sender = 'productivitypet101@gmail.com'
    email_password = os.getenv('GMAIL_PASSWORD')

    if not email_password:
        raise RuntimeError("GMAIL_PASSWORD not set in .env")

    try:
        assignments = get_upcoming_canvas_assignments(days_ahead=days_ahead)
    except Exception as e:
        print(f"[Assignments] Failed to fetch assignments: {e}")
        return

    subject = f"Study Buddy – Assignments Due in the Next {days_ahead} Days"
    html_body = build_assignments_email_html(assignments, days_ahead)

    # Construct MIME type email
    email_message = MIMEMultipart()
    email_message['From'] = email_sender
    email_message['To'] = email_receiver
    email_message['Subject'] = subject
    email_message.attach(MIMEText(html_body, "html"))

    email_string = email_message.as_string()

    context = ssl.create_default_context()

    try:
        with smtplib.SMTP_SSL('smtp.gmail.com', 465, context=context) as smtp:
            smtp.login(email_sender, email_password)
            smtp.sendmail(email_sender, email_receiver, email_string)
        print(f"[Email] Assignment reminder sent to {email_receiver}")
    except Exception as e:
        print(f"[Email] Failed to send assignment reminder: {e}")


##Tests
if __name__ == "__main__":
    test_email = "oswaynesmith34@gmail.com"
    send_assignment_reminder_email(test_email, days_ahead=7)

def test_email_with_fake_assignments():
    from datetime import datetime, timezone, timedelta

    fake_assignments = [
        {
            "course_name": "Intro to Cybersecurity",
            "course_id": 12345,
            "name": "Lab 5 – Wireshark Analysis",
            "due_at": datetime.now(timezone.utc) + timedelta(days=1),
            "html_url": "https://canvas.fake/courses/12345/assignments/1",
            "points_possible": 50,
        },
        {
            "course_name": "Data Structures",
            "course_id": 67890,
            "name": "Project 2 – Linked Lists",
            "due_at": datetime.now(timezone.utc) + timedelta(days=3),
            "html_url": "https://canvas.fake/courses/67890/assignments/2",
            "points_possible": 100,
        },
    ]

    html_body = build_assignments_email_html(fake_assignments, days_ahead=7)

    _load_env()
    email_sender = 'productivitypet101@gmail.com'
    email_password = os.getenv('GMAIL_PASSWORD')

    email_receiver = "oswaynesmith34@gmail.com"
    subject = "Study Buddy – Fake Assignments Test"

    email_message = MIMEMultipart()
    email_message['From'] = email_sender
    email_message['To'] = email_receiver
    email_message['Subject'] = subject
    email_message.attach(MIMEText(html_body, "html"))

    email_string = email_message.as_string()

    context = ssl.create_default_context()
    with smtplib.SMTP_SSL('smtp.gmail.com', 465, context=context) as smtp:
        smtp.login(email_sender, email_password)
        smtp.sendmail(email_sender, email_receiver, email_string)

    print("[Email] Fake assignments email sent!")