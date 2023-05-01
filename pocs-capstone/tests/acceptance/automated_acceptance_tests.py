from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from time import sleep
import random
import string
import sys
import os


def launch_test(driver):
    URL = "https://studybuddy.life"
    driver.implicitly_wait(10)
    # fixes a bug in landing page
    driver.set_window_size(900, 1080)
    # Navigate to the URL
    driver.get(URL)

    # Check if we were redirected to the landing page
    current_url = driver.current_url

    # Check if buttons with text "Login" and "Register" exist
    login_button = driver.find_element(By.ID, "login")
    register_button = driver.find_element(By.ID, "register")

    if login_button and register_button and current_url == "https://studybuddy.life/landing":
        return True
    else:
        return False

def register_test(driver):
    # Generate a random unique string of length 24
    letters = string.ascii_lowercase
    random_string = ''.join(random.choice(letters + string.digits) for _ in range(24))
    random_string = random.choice(letters) + random_string[1:]  # ensure the first character is a letter

    # Navigate to launch page
    launch_test(driver)

    # Click the register button
    register_button = driver.find_element(By.ID, "register")
    register_button.click()
    
    driver.maximize_window()

    # Register a mock user
    username = driver.find_element(By.ID, "username")
    username.send_keys(random_string)
    
    email = driver.find_element(By.ID, "email")
    email.send_keys(random_string + "@email.com")

    password = driver.find_element(By.ID, "password")
    password.send_keys("Asecurepassword123!")
    
    confirm_password = driver.find_element(By.ID, "confirm_password")
    confirm_password.send_keys("Asecurepassword123!")
    
    birthday = driver.find_element(By.ID, "validationCustom03")
    birthday.send_keys("02-14-2000")

    signup_button = driver.find_element(By.CSS_SELECTOR, ".button-login-register")
    driver.execute_script("arguments[0].click();", signup_button);

    # Wait for the success message 
    if EC.presence_of_element_located((By.XPATH, "//div[contains(text(),'Success!')]")):
        return True
    else:
        return False


def login_test_correct(driver):
    # Navigate to launch page
    launch_test(driver)

    # Click the login button
    login_button = driver.find_element(By.ID, "login")
    login_button.click()
    
    driver.maximize_window()

    # Login with mock user
    email = driver.find_element(By.ID, "email")
    email.send_keys("mock@user.one")

    password = driver.find_element(By.ID, "password")
    password.send_keys("Asecurepassword123!")

    login_button = driver.find_element(
        By.XPATH, "//*[@id='root']/div/section/form/button")
    login_button.click()
    # Wait for the URL to change to the main page (or times out after 10 seconds)
    wait = WebDriverWait(driver, 10)
    wait.until(EC.url_to_be("https://studybuddy.life/"))
    
    # Check if redirected to main page
    if driver.current_url == "https://studybuddy.life/":
        return True
    else:
        return False
    
def login_test_incorrect(driver):
    # Navigate to launch page
    launch_test(driver)

    # Click the login button
    login_button = driver.find_element(By.ID, "login")
    login_button.click()
    
    driver.maximize_window()

    # Login with mock user
    email = driver.find_element(By.ID, "email")
    email.send_keys("mock@user.one")

    password = driver.find_element(By.ID, "password")
    password.send_keys("WrongPassword")

    login_button = driver.find_element(
        By.XPATH, "//*[@id='root']/div/section/form/button")
    login_button.click()
    
    # Wait for error message to appear
    if EC.presence_of_element_located((By.XPATH, "//div[contains(text(),'Unauthorized')]")):
        return True
    else:
        return False
    
def pet_select_noname_test(driver):
    # Generate a random unique string of length 24
    letters = string.ascii_lowercase
    random_string = ''.join(random.choice(letters + string.digits) for _ in range(24))
    random_string = random.choice(letters) + random_string[1:]  # ensure the first character is a letter

    # Navigate to launch page
    launch_test(driver)

    # Click the register button
    register_button = driver.find_element(By.ID, "register")
    register_button.click()
    
    driver.maximize_window()

    # Register a mock user
    username = driver.find_element(By.ID, "username")
    username.send_keys(random_string)
    
    email = driver.find_element(By.ID, "email")
    email.send_keys(random_string + "@email.com")

    password = driver.find_element(By.ID, "password")
    password.send_keys("Asecurepassword123!")
    
    confirm_password = driver.find_element(By.ID, "confirm_password")
    confirm_password.send_keys("Asecurepassword123!")
    
    birthday = driver.find_element(By.ID, "validationCustom03")
    birthday.send_keys("02-14-2000")

    signup_button = driver.find_element(By.CSS_SELECTOR, ".button-login-register")
    driver.execute_script("arguments[0].click();", signup_button);
    
    # Login with just-created user
    driver.get("https://studybuddy.life/login")
    driver.find_element(By.ID, "email").send_keys(random_string + "@email.com")
    driver.find_element(By.ID, "password").send_keys("Asecurepassword123!")
    driver.find_element(By.XPATH, "//*[@id='root']/div/section/form/button").click()
    
    # Click button without entering name
    driver.find_element(By.CSS_SELECTOR, ".button").click()
    
    # Wait for error message to appear
    if EC.presence_of_element_located((By.XPATH, "//div[contains(text(),'You must enter a name!')]")):
        return True
    else:
        return False
    

def pet_select_test(driver):
    pet_select_noname_test(driver)
    
    # Now enter a name correctly
    driver.find_element(By.CSS_SELECTOR, ".input").send_keys("TestPet")
    driver.find_element(By.CSS_SELECTOR, ".button").click()
    
    # Wait for the URL to change to the tutorial (or times out after 10 seconds)
    wait = WebDriverWait(driver, 10)
    wait.until(EC.url_to_be("https://studybuddy.life/tut/"))
    
    # Check if redirected to main page
    if driver.current_url == "https://studybuddy.life/tut/":
        return True
    else:
        return False
    
def logout_test(driver):
    login_test_correct(driver)
    driver.find_element(By.CSS_SELECTOR, ".user-menu > img").click()
    driver.find_element(By.LINK_TEXT, "Logout").click()
    
    # Wait for the URL to change to landing (or times out after 10 seconds)
    wait = WebDriverWait(driver, 10)
    wait.until(EC.url_to_be("https://studybuddy.life/landing"))
    
    # Check if redirected to main page
    if driver.current_url == "https://studybuddy.life/landing":
        return True
    else:
        return False
    
def petprofile_empty_test(driver):
    login_test_correct(driver)
    
    orig_pet_bio = driver.find_element(By.CSS_SELECTOR, ".pd-bg").text
    orig_pet_name = driver.find_element(By.CSS_SELECTOR, ".pet-name").text

    # navigate to pet profile page
    driver.find_element(By.ID, "justify-tab-example-tab-profile").click()
    
    #click submit without making changes
    driver.find_element(By.CSS_SELECTOR, ".btn:nth-child(3)").click() #submit
    
    # They should't have changed in the page
    if orig_pet_bio == driver.find_element(By.CSS_SELECTOR, ".pd-bg").text and orig_pet_name == driver.find_element(By.CSS_SELECTOR, ".pet-name").text:
        return True
    else:
        return False
    
def petprofile_test(driver):
    petprofile_empty_test(driver)
    # on pet profile page, click submit with changes to pet name and pet bio
    driver.find_element(By.CSS_SELECTOR, ".col-sm-4 > .form-control").send_keys("Baby!")
    driver.find_element(By.CSS_SELECTOR, ".col-sm-8 > .form-control").send_keys("New bio")
    driver.find_element(By.CSS_SELECTOR, ".btn:nth-child(3)").click() #submit
    # They should have changed in the page
    if "New bio" == driver.find_element(By.CSS_SELECTOR, ".pd-bg").text and "Baby!" == driver.find_element(By.CSS_SELECTOR, ".pet-name").text:
        return True
    else:
        return False
    
def account_info_empty_test(driver):
    login_test_correct(driver)
    
    #navigate to account page
    driver.find_element(By.CSS_SELECTOR, ".user-menu > img").click()
    driver.find_element(By.LINK_TEXT, "Account").click()
    
    #enter empty input
    driver.find_element(By.ID, "validationCustom01").send_keys("")
    driver.find_element(By.ID, "validationCustom02").send_keys("")
    
    #click submit with blank inputs
    submit = driver.find_element(By.CSS_SELECTOR, ".btn")
    driver.execute_script("arguments[0].click();", submit);
    
    
    # Wait for error message to appear
    if EC.presence_of_element_located((By.XPATH, "//div[contains(text(),'Please provide your name.')]")):
        return True
    else:
        return False
    
def account_info_changed_test(driver):
    account_info_empty_test(driver)
    
    # change name and bio this time
    driver.find_element(By.ID, "validationCustom01").send_keys("NewFirstName")
    driver.find_element(By.ID, "validationCustom02").send_keys("NewUserBio")
    
    #click submit with blank inputs
    submit = driver.find_element(By.CSS_SELECTOR, ".btn")
    driver.execute_script("arguments[0].click();", submit);
    
    # check that no errors are thrown
    if EC.invisibility_of_element_located((By.XPATH, "//div[contains(text(),'Please provide your name.')]")) and EC.invisibility_of_element_located((By.XPATH, "//div[contains(text(),'Please provide a bio.')]")):
        return True
    else:
        return False

def create_task_test(driver):
    login_test_correct(driver)
    driver.find_element(By.CSS_SELECTOR, "div:nth-child(4) > .btn").click()
    driver.find_element(By.ID, "validationFormik01").click()
    driver.find_element(By.ID, "validationFormik01").send_keys("New Task")
    driver.find_element(By.ID, "validationFormik02").send_keys("New task description.")
    driver.find_element(By.ID, "validationFormik04").click()
    driver.find_element(By.ID, "validationFormik04").send_keys("02-02-2025")
    driver.find_element(By.XPATH, "//div[3]/div/div/div[2]/div/button").click()
    
    # See if task is now in list
    if EC.presence_of_element_located((By.XPATH, "//div[contains(text(),'New Task')]")):
        # Refresh the page
        driver.refresh()
        sleep(1)
        return True
    else:
        return False

def complete_task_test(driver):
    login_test_correct(driver)
    sleep(1)
    # check task off -> there should only be one that can be checked off since I only made one
    check_offable_task = driver.find_elements(By.ID, "default-checkbox")[0]
    driver.execute_script("arguments[0].click();", check_offable_task);
    
    sleep(1)
    
    # go to completed tab
    completed_tab = driver.find_element(By.ID, "controlled-tab-example-tab-completed")
    driver.execute_script("arguments[0].click();", completed_tab);

    
    # check if "New Task" is in completed tab
    if 'New Task' in driver.page_source:
        return True
    else:
        return False
    
def delete_task_test(driver):
    login_test_correct(driver)
    
    # go to completed tab
    driver.find_element(By.ID, "controlled-tab-example-tab-completed").click()
    
    # delete "New Task"
    task_to_delete = driver.find_element(By.CSS_SELECTOR, ".close-box-task:nth-child(3) > .btn-close")
    driver.execute_script("arguments[0].click();", task_to_delete);
    
    # check if "New Task" is GONE FROM completed tab
    if EC.invisibility_of_element_located((By.XPATH, "//div[contains(text(),'New Task')]")):
        return True
    else:
        return False
    
def feed_test(driver):
    login_test_correct(driver)
    
    driver.find_element(By.ID, "justify-tab-example-tab-inventory").click()
    candy = driver.find_element(By.CSS_SELECTOR, ".candy-wrapper:nth-child(2)")
    
    num_orig = driver.find_element(By.XPATH, "//div[@id='justify-tab-example-tabpane-inventory']/div/div/div[2]/div/div/div/div/div/div").text
    num_orig = int(num_orig)
    #print(num_orig)
    
    action_chains = ActionChains(driver)
    action_chains.click_and_hold(candy).perform()
    sleep(2)
    action_chains.release(candy).perform()
    num_after = driver.find_element(By.XPATH, "//div[@id='justify-tab-example-tabpane-inventory']/div/div/div[2]/div/div/div/div/div/div").text
    num_after = int(num_after)
    #print(num_after)
    compare = num_orig - 1
    # See if pet is happy and 1 less candy exists
    if (num_after == compare) and EC.presence_of_element_located((By.XPATH, "//div[contains(text(),'Candy is so yummy! I'm so happy!')]")):
        return True
    else:
        return False

if __name__ == "__main__":
    # Redirect output to a file
    sys.stdout = open("automated_acceptance_tests_output.txt", "w")
    print("AUTOMATED ACCEPTANCE TESTS USING SELENIUM")
    print("Note that this covers all manual acceptance tests except Canvas integration (which requires a real user's token), clicking on the pet (which requires observation of an animation), and notifications (which require user's permission and cannot be fully automated)")
    print("\n")
    DRIVER_PATH = "./chromedrivers/chromedriver_112_mac"

    # passing these options will keep the window open when the script completes
    options = webdriver.ChromeOptions()
    options.add_experimental_option("detach", False)

    # Our driver object is LITERALLY a browser we control programatically
    driver = webdriver.Chrome(executable_path=DRIVER_PATH, options=options)

    # Call each testing function and print the result
    acceptance_tests = [launch_test, register_test, login_test_correct, login_test_incorrect, pet_select_noname_test, pet_select_test, logout_test, petprofile_empty_test, petprofile_test, account_info_empty_test, account_info_changed_test, create_task_test, complete_task_test, delete_task_test, feed_test]
    #acceptance_tests = [feed_test]
    for i, test in enumerate(acceptance_tests):
        options = webdriver.ChromeOptions()
        options.add_experimental_option("detach", True)
        driver = webdriver.Chrome(executable_path=DRIVER_PATH, options=options)
        result = test(driver)
        if result:
            print(f"{test.__name__} | Acceptance test {i+1}: PASSED")
        elif result==False:
            print(f"{test.__name__} | Acceptance test {i+1}: FAILED")
            
        else: #if blocked/skipped
            print(f"{test.__name__} | Acceptance test {i+1}: SKIPPED")
            
        driver.quit()

        
