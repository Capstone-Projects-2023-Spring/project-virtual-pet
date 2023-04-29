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




