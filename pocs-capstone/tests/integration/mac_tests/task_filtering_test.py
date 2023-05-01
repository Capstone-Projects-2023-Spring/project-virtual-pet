from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.common.action_chains import ActionChains
from selenium.common.exceptions import NoSuchElementException
from time import sleep

from login_test import login_test

# wat
DRIVER_PATH = "./chromedrivers/chromedriver_112_mac"

# passing these ptions will keep the window open when the script completes
options = webdriver.ChromeOptions()
options.add_experimental_option("detach", True)

# Our driver object is LITERALLY a browser we control programatically
driver = webdriver.Chrome(executable_path=DRIVER_PATH, options=options)

login_test(driver)


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


# Find tags filtering button on home page
add_tag_global = driver.find_element(By.XPATH, "//button[@id='dropdown-autoclose-outside']")
add_tag_global.click()

# Check the 'Canvas Assignments' box
my_canvas_tags = driver.find_element(By.XPATH, "//form[@class='tag-type-checkoff']//div[text()[contains(., 'Canvas Assignments')]]")
my_canvas_tags_input = my_canvas_tags.find_element(By.XPATH,"..//div//div[@class='']//input[@class='form-check-input'][@type='checkbox']")
my_canvas_tags_input.click()

# Try to find tasks with the delete button - there should be NONE since the filter option is set to CANVAS ASSIGNMENTS which can't be deleted
non_canvas_tasks_count = len(driver.find_elements(By.XPATH, "//div[@class='my-2 list-group-task list-group list-group-horizontal']//div[@class='close-box-task list-group-item']//button[@class='btn-close']"))
assert non_canvas_tasks_count == 0

# Un-check the 'Canvas Assignments' box and check the 'My Tasks' box
my_tasks = driver.find_element(By.XPATH, "//form[@class='tag-type-checkoff']//div[text()[contains(., 'My Tasks')]]")
my_tasks_input = my_tasks.find_element(By.XPATH,"..//div//div[@class='']//input[@class='form-check-input'][@type='checkbox']")
my_canvas_tags_input.click()
my_tasks_input.click()

# Try to find the number of tasks with the delete button - should only be ONE since the filter option is set to user-made tasks which can be deleted
non_canvas_tasks_count = len(driver.find_elements(By.XPATH, "//div[@class='my-2 list-group-task list-group list-group-horizontal']//div[@class='close-box-task list-group-item']//button[@class='btn-close']"))
assert non_canvas_tasks_count == 1

# Delete the task item
task_item_delete = driver.find_element(By.XPATH, "//div[@class='my-2 list-group-task list-group list-group-horizontal']//div[@class='close-box-task list-group-item']//button[@class='btn-close']")
task_item_delete.click()

print("Use Case 6: Task Filtering - TEST PASSED!")
driver.quit()