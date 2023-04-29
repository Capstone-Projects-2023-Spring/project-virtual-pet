"""
TEST 1: Can you register an account! 

NOW WITH ANOTATIONS!!

NOTE: 
The idea here is we want to assert specific elements can be found, and that
certain conditions are met after operating on these elements.

If you request to find an element and it cannot be found, the script will
crash. Additionally, we will use assertions to ensure conditions that we
try to manifest are true at the appropriate times. 
"""

from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By

# where
URL = "https://studybuddy.life"
# wat
DRIVER_PATH = "./chromedrivers/chromedriver_112"

# passing these ptions will keep the window open when the script completes
options = webdriver.ChromeOptions()
options.add_experimental_option("detach", True)

# Our driver object is LITERALLY a browser we control programatically
driver = webdriver.Chrome(executable_path=DRIVER_PATH, options=options)
# Always wait 10 seconds for object to load/come into view
driver.implicitly_wait(10) 
# Navigate to the URL
driver.get(URL)

# Create an object representation of the register button
register_button = driver.find_element(By.ID, "register")
# Click the button 
register_button.click()

"""
NOTE:
Alternative notation, but you don't get the object back
driver.find_element(By.ID, "register").click() 
"""

# locate the username entry box
username = driver.find_element(By.ID, "username")
# we can send keys like this
username.send_keys("username1")
# We can now inspect the object to see that the keys were sent
assert username.get_attribute("value") == "username1"

# We can also inspect label text (inner div and span text) like so
# Here we will use the XPATH to get the element since there is no id
username_label = driver.find_element(By.XPATH,"//*[@id='root']/div/section/form/label[1]")
# <element>.text will get the inner text
assert (username_label.text == "Username:") 

# Uncomment to see failures!!
# driver.find_element(By.id, "a_known_bad_id")
# driver.find_element(By.XPATH, "a/bad/x/path")
# assert (username_label.text == "not correct label text")

password = driver.find_element(By.ID, "password")
password.send_keys("Agoodpassword123!")
assert password.get_attribute("value") == "Agoodpassword123!"

confirm_password = driver.find_element(By.ID, "confirm_password")
confirm_password.send_keys("Agoodpassword123!")
assert confirm_password.get_attribute("value") == "Agoodpassword123!"

email = driver.find_element(By.ID, "email")
email.send_keys("i@love.cats")
assert email.get_attribute("value") == "i@love.cats"

name = driver.find_element(By.ID, "first_name")
name.send_keys("Arlene")
assert name.get_attribute("value") == "Arlene" #thank you christine for the name suggestion

birthday = driver.find_element(By.ID, "validationCustom03")
birthday.send_keys("09")
birthday.send_keys("16")
birthday.send_keys("1988")
assert birthday.get_attribute("value") == "1988-09-16"

user_bio = driver.find_element(By.ID, "user_bio")
user_bio.send_keys("I am a nice lady who loves cats!")
assert user_bio.get_attribute("value") == "I am a nice lady who loves cats!"

# we just want to assert we can find the button without actually submitting
submit_button = driver.find_element(By.XPATH, "//*[@id='root']/div/section/form/button")


print("TEST PASSED!")

# explicitly close the driver and end the script
# here we won't quit since we do not want to submit the form
# driver.quit()

# NOTE: if you do not quit, you can continue to operate on the driver from the 
# command line