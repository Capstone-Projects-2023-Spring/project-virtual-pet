---
sidebar_position: 4
---
# Backend Unit Tests

<details>
    
<summary>Backend Coverage Report</summary>
    
<img width="764" alt="backend-tests" src="https://user-images.githubusercontent.com/43662352/235539294-aca59a84-1310-4cb0-a1db-2ee7066ac4b1.png"/>

</details>

## Views

### CustomUserInfoViewTests

#### *def test_view_url_exists_at_desired_location(self)*
```
Test: Checks the url exists by attempting to register with mock user data
Returns: True if response status code is 201, otherwise false
```

#### *def test_view_url_accessible_by_name(self)*
```
Test: Checks the view's url is accessible by the name
Returns: True if the response status code is 201, otherwise false
```

### APITokenViewTest

#### *def test_login_with_valid_credentials(self)*
```
Test: Checks the user can login with valid credentials
Returns: True if response status code is 200, otherwise false
```

#### *def test_login_with_invalid_credentials(self)*
```
Test: Checks the user can login with invalid credentials
Returns: True if response status code is 401, otherwise false
```

### Register View

#### *def test_view_url_exists_at_desired_location(self)*
```
 Test: Checks if the url exists for register view
 Returns: True if the response status code is 201, other wise false
```

## Database Models

### NewUser Model

#### *def test_email_address_label(self)*
```
Test: Checks the text for the email_address label
Returns: True if the email_address text label matches the expected label output, otherwise false
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
Test: Checks the size of the field allocated for the bio text
Returns: True if the first_name max length matches the expected max length, otherwise false
```

#### *def test_bio_label(self)*
```
Test: Checks the text for the bio label
Returns: True if the bio label text label matches the expected label output, otherwise false
```

#### *def test_canvas_token_max_length(self)*
```
Test: Checks the size of the field allocated for the canvas_token text
Returns: True if the canvas_token max length matches the expected max length, otherwise false
```
  
#### *def test_object_name_is_actual_name(self)*
```
Test: Checks that the database object's name is the user_name attribute
Returns: True if the object's name matches the expected user_name output, otherwise false
```

#### *def test_canvas_token_is_returned(self)*
```
Test: Checks that the fucntion get_canvas_token() returns the canvas token
Returns: True if the function returns the expected canvas token, otherwise false
```

### Avatar Model

#### *def test_avatar_type_max_length(self)*
```
Test: Checks the size of the field allocated for the avatar_type text
Returns: True if the avatar_type max length matches the expected max length, otherwise false
```

#### *def test_pet_name_max_length(self)*
```
Test: Checks the size of the field allocated for the pet_name text
Returns: True if the pet_name max length matches the expected max length, otherwise false
```

#### *def test_flavour_text_max_length(self)*
```
Test: Checks the size of the field allocated for the flavour_text text
Returns: True if the flavour_text max length matches the expected max length, otherwise false
```

#### *def test_object_name_is_actual_name(self)*
```
Test: Checks that the database object's name is the actual name given
Returns: True if the object's name matches the expected objects name, otherwise false
```

### Inventory Model

#### *def test_candy_base_type_max_length(self)*
```
Test: Checks the size of the field allocated for the candy_base_type text
Returns: True if the candy_base_type max length matches the expected max length, otherwise false
```

#### *def test_object_name_is_actual_name(self)*
```
Test: Checks that the database object's name is the actual name given
Returns: True if the object's name matches the expected objects name, otherwise false
```

### Task Model

#### *def test_title_max_length(self)*
```
Test: Checks the size of the field allocated for the title text
Returns: True if the title max length matches the expected max length, otherwise false
```

#### *def test_task_type_max_length(self)*
```
Test: Checks the size of the field allocated for the task_type text
Returns: True if the task_type max length matches the expected max length, otherwise false
```

#### *def test_unique_canvas_tag_max_length(self)*
```
Test: Checks the size of the field allocated for the unique_canvas_tag text
Returns: True if the unique_canvas_tag max length matches the expected max length, otherwise false
```

#### *def test_course_title_max_length(self)*
```
Test: Checks the size of the field allocated for the course_title text
Returns: True if the course_title max length matches the expected max length, otherwise false
```

#### *def test_object_name_is_actual_name(self)*
```
Test: Checks that the database object's name is the actual name given
Returns: True if the object's name matches the expected objects name, otherwise false
```
