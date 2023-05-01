from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.common.action_chains import ActionChains
from time import sleep
from setup_login import setup_login


driver = setup_login()

driver.find_element(By.XPATH, '//*[@id="basic-nav-dropdown"]/div/img').click()

driver.find_element(By.XPATH, '//*[@id="root"]/main/div[1]/div/div[3]/div/div/a[3]').click()

driver.find_element(By.XPATH, '//*[@id="root"]/main/div[2]/div/form/input').send_keys("canvastoken")

sleep(2)

driver.find_element(By.XPATH, '//*[@id="root"]/main/div[2]/div/form/input').send_keys("\n")

sleep(2)

driver.find_element(By.XPATH, '//*[@id="root"]/main/div[1]/div/div[2]/button').click()

sleep(2)

print("TEST PASSED!")

driver.quit()   