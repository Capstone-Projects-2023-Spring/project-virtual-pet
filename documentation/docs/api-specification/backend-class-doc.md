
### MyTokenObtainPairView
* Class Purpose: Sub class to provide a view to create the access token and the refresh token with custom claims. Class inherits from TokenObtainPairView.
* Datafields: 
  * serializer_class
    * Type: Alias
    * Purpose: Set serializer for custom claims

### MyTokenObtainPairSerializer
* Class Purpose: Sub class to serialize token with custom claims .Class inherits from TokenObtainPairSerializer.
* Methods:
  * \+ get_token()
    * Purpose: Produce refresh token for view used to generate access token.
    * Pre-condition: User sends valid login credentials.
    * Post-Condition: A valid token is returned.
    * Parameters: 
      * Token
        * Purpose: stores super().get_token so custom claims can be applied
    * Return Values: Jwt refresh token
    * Exceptions Thrown: Error code in rest response
	
### RegisterView
  * Class Purpose: Sub class to provide a view for a new user to register an account. Class inherits from generics.CreateAPIView.
  * Datafields:
    * queryset
      * Type: List of objects
      * Purpose: Store all User objects from the database.
    * permission_classes
      * Type: Permissions class
      * Purpose: Store permissions class AllowAny because any potential should be allowed to register as a new user in the system.
    * serializer_class
      * Type: Serializer Class
      * Purpose: Store RegisterSerializer class.

### RegisterSerializer
* Class Purpose: Sub class to serialize registration information.
* Inner Class:
    * Class Meta
      * Purpose: Validate request data in specified format.
* Datafields:
  * password
    * Type: SHA256
    * Purpose: Validate and clean data
  * password2
    * Type: SHA256
    * Purpose: Validate and clean data
* Methods:
  * \+ validate():
       * Purpose: Check if password and password2 match.
       * Pre-condition: User has not tried to register with the same credentials in the past.
       * Post-Condition: A new user is added to the database with the provided credentials.
       * Parameters: dictionary
         * attrs
       * Return Values: attrs
       * Exceptions Thrown: Validation error
  * \+ create():
       * Purpose: Create new user in database.
       * Pre-condition: User is attempting to register.
       * Post-Condition: User will be able to login
       * Parameters: dictionary
         * Validate_data
       * Return Values: user
       * Exceptions Thrown: User already exists
