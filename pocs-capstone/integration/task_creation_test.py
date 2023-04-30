from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.common.action_chains import ActionChains
from time import sleep

# where
URL = "https://studybuddy.life"
# wat
DRIVER_PATH = "./chromedrivers/chromedriver_112_mac"

# passing these ptions will keep the window open when the script completes
options = webdriver.ChromeOptions()
options.add_experimental_option("detach", True)

# Our driver object is LITERALLY a browser we control programatically
driver = webdriver.Chrome(executable_path=DRIVER_PATH, options=options)
# Always wait 10 seconds for object to load/come into view
driver.implicitly_wait(10) 
# fixes a bug in landing page
driver.set_window_size(900,1080)
# Navigate to the URL
driver.get(URL)

# Click the button 
login_button = driver.find_element(By.ID, "login")
login_button.click()
# Let's go bigger, go bolder

driver.maximize_window()

email = driver.find_element(By.ID, "email")
email.send_keys("mock@user.one")

password = driver.find_element(By.ID, "password")
password.send_keys("Asecurepassword123!")

login_button = driver.find_element(By.XPATH, "//*[@id='root']/div/section/form/button")
login_button.click()


# Click '+ Create Task' Button
create_task_button = driver.find_element(By.XPATH, "//button[@class='btn btn-primary'][@type='button']")
create_task_button.click()


# Add title to task
title_input = driver.find_element(By.XPATH, "//input[@id='validationFormik01']")
title_input.send_keys("Create a test for use case 5")

# Add description to task
description_input = driver.find_element(By.XPATH, "//textarea[@id='validationFormik02']")
description_input.send_keys("Work on integration testing!")

# Select estimated time to finish task
task_size = driver.find_element(By.XPATH, "//select[@id='validationFormik03']/option[text()='Between 1 and 4 hours']")
task_size.click()

# Input due date 
due_date = driver.find_element(By.XPATH, "//input[@id='validationFormik04']")
due_date.send_keys("04")
due_date.send_keys("25")
due_date.send_keys("2023")


# Add tag - Click button
add_tag_button = driver.find_element(By.XPATH, "//button[@id='dropdown-autoclose-outside dropdown-button-drop-down-centered']")
add_tag_button.click()

# Add tag - enter tag name in input
add_tag_input = driver.find_element(By.XPATH, "//input[@id='validationFormik05']")
add_tag_input.send_keys("Capstone")
add_tag_input.submit()

# Click Create Task Submit button
create_task_submit = driver.find_element(By.XPATH, "//button[@class='col-md-8 btn btn-primary']")
create_task_submit.click()


# Delete the task
# Scroll down so the task is in view 
driver.execute_script("window.scrollTo(0, document.body.scrollHeight)") 

task_item_delete = driver.find_element(By.XPATH, "//div[@class='my-2 list-group-task list-group list-group-horizontal']//div[@class='close-box-task list-group-item']//button[@class='btn-close']")
task_item_delete.click()

