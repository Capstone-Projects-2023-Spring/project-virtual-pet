# Backend Unit Tests

## Views

### CustomUserInfoViewTests

Procedure: This class will provide the user's data to the frontend <br>
Tests: Check status codes, url exists at desired location, url reverse lookup, check authentication to allow the user data to sent <br>
Inputs: url path - String, url name - String <br>
Expected Results: True for correct status code, true if url exists and can be looked up by name, true if unauthorized to recieve user data object <br>

### UserLoginViewTests

Procedure: This class will recieve a user's login credentials and verify with the database if the credentials are valid<br>
Tests: Check status codes, url exists at desire location, url reverse lookup, if credentials are correct or incorrect<br>
Inputs: user_name - String, password - String<br>
Expected Results: True for correct status code, true if url exists and can be looked up by name, true if credential provided are valid, true if credential provided are not valid<br>


### CustomUserCreateViewTests

Procedure: This class will recieve register data and attempt to register a new user<br>
Tests:  Check status codes, url exists at desire location, url reverse lookup, if register data already exists<br>
Inputs: user_name - String, email - String, first_name - String, password - String<br>
Expected Results: True for correct status code, true if url exists and can be looked up by name, true if register data provided is valid, true if register data provided is not valid<br>

### PetDataViewTests

Procedure: This class will provide the user's pet data<br>
Tests: Check status codes, url exists at desired location, url reverse lookup, check authentication to allow pet data to be sent<br>
Inputs: url path - String, url name - String<br>
Expected Results: True for correct status code, true if url exists and can be looked up by name, true if unauthorized to recieve pet data object<br>

### UserTaskViewTests

Procedure: This class will provide the user's task data<br>
Tests: Check status codes, url exists at desired location, url reverse lookup, check authentication to allow task data to be sent<br>
Inputs: url path - String, url name - String<br>
Expected Results: True for correct status code, true if url exists and can be looked up by name, true if unauthorized to recieve task data object<br>

### UserInventoryTests

Procedure: This class will provide the user's inventory data<br>
Tests: Tests: Check status codes, url exists at desired location, url reverse lookup, check authentication to allow inventory data to be sent<br>
Inputs: url path - String, url name - String<br>
Expected Results: True for correct status code, true if url exists and can be looked up by name, true if unauthorized to recieve inventory data object<br>



### Register View

#### *def test_view_url_exists_at_desired_location(self)*
```
 Test: Checks if the url exists for register view
 Returns: True if the response status code is 201, other wise false
```


## Database Models

### NewUser Model

#### *def test_first_name_label(self)*
```
Test: Checks the text for the first_name label
Returns: True if the first_name text label matches the expected label output, otherwise false
```

#### *def test_user_name_max_length(self)*
```
Test: Checks the size of the field allocated for the user_name text
Returns: True if the user_name max length matches the expected max length, otherwise false
```

#### *def test_first_name_max_length(self)*
```
Test: Checks the size of the field allocated for the first_name text
Returns: True if the first_name max length matches the expected max length, otherwise false
```
  
#### *def test_bio_max_length(self)*
```
Test: Checks the size of the field allocated for the first_name text
Returns: True if the first_name max length matches the expected max length, otherwise false
```
  
#### *def test_object_name_is_user_name(self)*
```
Test: Checks that the database object's name is the user_name attribute
Returns: True if the object's name matches the expected user_name output, otherwise false
```
       
#### *def test_email_address_label(self)*
```
Test: Checks the text for the email_address label
Returns: True if the email_address text label matches the expected label output, otherwise false
```

#### *test_bio_label(self)*
```
Test: Checks the text for the bio label
Returns: True if the bio label text label matches the expected label output, otherwise false
```
### CustomAccountManager Model (pending)
### Avatar Model (pending)
### Inventory Model (pending)
### Task Model (pending)
