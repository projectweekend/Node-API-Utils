## Install it

```
npm install projectweekend/Node-API-Utils
```


### Generate JSON web token

```javascript
var authUtils = require( "api-utils" ).authentication;


var token = authUtils.generateJWT( user, [ "id", "email", "role" ] );
```

**Parameters:**

* The user object to serialize into a token
* An array of user properties to include in the serialization
