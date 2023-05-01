from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.common.action_chains import ActionChains
from time import sleep
from setup_login import setup_login


driver = setup_login()

sleep(2)

driver.get('https://studybuddy.life/tut')

sleep(2)

driver.get('https://studybuddy.life')

sleep(2)

tasks = driver.find_elements(By.ID, "default-checkbox")
driver.execute_script("arguments[0].scrollIntoView();", tasks[0])
driver.execute_script("arguments[0].click();", tasks[0])

sleep(2)

driver.get('https://studybuddy.life')
driver.find_element(By.ID, "default-checkbox")
tasks2 = driver.find_elements(By.ID, "default-checkbox")
driver.execute_script("arguments[0].scrollIntoView();", tasks2[0])
driver.execute_script("arguments[0].click();", tasks2[0])

driver.find_element(By.ID, "justify-tab-example-tab-inventory").click()
candy = driver.find_element(By.XPATH, '//*[@id="justify-tab-example-tabpane-inventory"]/div/div/div[2]/div[1]/div/div/div[1]/div/div/div')

action_chains = ActionChains(driver)
action_chains.click_and_hold(candy).perform()
sleep(2)
action_chains.release(candy).perform()



print("TEST PASSED!")
driver.quit()
