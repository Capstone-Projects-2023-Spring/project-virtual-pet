const axios = require('axios');

const apiKey = 'insert key here';
const apiUrl = 'https://templeu.instructure.com/api/v1';

// Retrieve a user's courses
async function getCourses() {
  const response = await axios.get(`${apiUrl}/courses`, {
    headers: { Authorization: `Bearer ${apiKey}` },
    params: {
        per_page: 100,
        enrollment_type: 'student',
        enrollment_state: 'active',}, //only get active courses
  });

  const courses = response.data.map(course => {
    const { id, name, course_code } = course;
    return { id, name, course_code };
  });

  return courses;
}

// Retrieve a user's assignments for a course
async function getAssignments(courseId) {
    const response = await axios.get(`${apiUrl}/courses/${courseId}/assignments`, {
      headers: { Authorization: `Bearer ${apiKey}` },
      params: {
        per_page: 100,
        include: 'submission' }, //includes data for user's current submission for each assignment
    });
    return response.data;
  }

// Log the retrieved courses
async function logCourses() {
  const courses = await getCourses();
  console.log('Active courses:', courses);
}

// Log the retrieved assignments
async function logAssignments(courseId) {
    const assignments = await getAssignments(courseId);
    const assignmentData = assignments.map(assignment => {
        const {
          id,
          description,
          due_at,
          points_possible,
          name,
          is_quiz_assignment,
          course_id,
        } = assignment;

        const submissionData = assignment.submission ? {
            score: assignment.submission.score,
            late: assignment.submission.late,
            workflow_state: assignment.submission.workflow_state,
        } : {};

        return {
            name,
            id,
            course_id,
            description,
            due_at,
            points_possible,
            is_quiz_assignment,
            submission: submissionData,
            //need course level --> get from course-code? (1000s, 3000s, etc)
            //need task level (exam, quiz, hw, etc)
        };
    });

    console.log(`Assignments for course ${courseId}:`, assignmentData);
  }

// Call the logCourses function to log the retrieved courses IDs
logCourses();

// Call the logAssignments function to log the retrieved assignments for a course
logAssignments(124235); //insert one of your own course numbers here, this is an example from mine
