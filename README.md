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

* A user object to serialize into a token
* An array of user properties to include in the serialization


### Middleware requiring a system-wide API key

```javascript
var authUtils = require( "api-utils" ).authentication;


// Assuming an Express or Restify server is defined as 'server'
server.use( authUtils.systemAPIKey() );
```

**Parameters: None**

**Notes:**

* `SYSTEM_API_KEY` environment variable must be defined
