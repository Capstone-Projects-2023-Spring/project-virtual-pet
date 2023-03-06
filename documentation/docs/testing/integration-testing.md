---
sidebar_position: 2
---
# Integration tests

Tests to demonstrate each use-case based on the use-case descriptions and the sequence diagrams. External input should be provided via mock objects and results verified via mock objects. Integration tests should not require manual entry of data nor require manual interpretation of results.


# Basic Workflow

## Overview

We will leverage Selenium to complete our integration testing in a semi-automated fasion. This integration tests will occur in clean version of our production build, with a clean version of our production database. We will reserve a set of user ids in real prod for the purpose of repeating these tests before our final release. We are currently constructing our endpoints using Django Rest Framework, which provides a serializer class that we can leverage to load the production database with mock data. Django provides a shell environment we can use to import our serializers and load data into the database programatically. Therefore, we can pre-prepare a set of scripts and pipe them into the shell using a bash script. For example:

## Sample Python script for loading data

```python

from db.serializers import *

#data is a valid dictionary representing required fields of a task object
task = TaskSerializer(**data) 
task.is_valid()
task.save()

```
## Sample Selenium Script
```python

WebDriver driver = new ChromeDriver();
driver.get("http://127.0.0.1:3000)
title = 'Study Buddies'
assertIs(title, driver.title, "Compare expected title with true title.")

```

## Sample Bash script
Here we are leveraging our prepared python script to perform CRUD operations in Django's shell, then launching our shell backend and front end before finally launching our prepared selenium script. 
```bash
#!bin/bash
cat load_data.py | python manage.py shell
python manage.py runserver
cd ../
nmp start
python3 selenium_script_use_case_1.py
python3 selenium_script_use_case_2.py
# and so on
```

