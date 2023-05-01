from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.common.action_chains import ActionChains
from time import sleep
from setup_login import setup_login


driver = setup_login()

driver.get('https://studybuddy.life/tut')

sleep(2)

driver.get('https://studybuddy.life')

sleep(4)

print("TEST PASSED!")

driver.quit()   https://studybuddy.life/tut