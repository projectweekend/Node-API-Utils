## Install it

```
npm install projectweekend/Node-API-Utils
```

------------


### Authentication

#### Generate JSON web token

```javascript
var authUtils = require( "api-utils" ).authentication;


var token = authUtils.generateJWT( user, [ "id", "email", "role" ] );
```

**Parameters:**

* A user object to serialize into a token
* An array of user properties to include in the serialization


#### Middleware requiring a system-wide API key

```javascript
var authUtils = require( "api-utils" ).authentication;


// Assuming an Express or Restify server is defined as 'server'
server.use( authUtils.systemAPIKey( [ "/skip-this-route" ] ) );
```

**Parameters:**

* An array of routes to skip API check (optional)

**Notes:**

* `SYSTEM_API_KEY` environment variable must be defined

------------


### Blitz.io

#### Authorization route for Blitz.io load testing

```javascript
var blitzio = require( "api-utils" ).blitzio;


// Assuming an Express or Restify server is defined as 'server'
server.get( blitzio.url(), blitzio.handler );
```

**Parameters: None**

**Notes:**

* `BLITZ_KEY` environment variable must be defined

------------


### Database

#### Mongoose connection with Fig DB fallback

```javascript
var databaseUtils = require( "api-utils" ).database;


var db = databaseUtils.mongooseConnection();
```

**Parameters: None**

**Notes:**

* `MONGO_URL` environment variable must be defined if not starting the app with Fig (`fig up`)

------------


### Errors

#### Common HTTP errors

```javascript
var errors = require( "api-utils" ).errors;


errors.system( "Something went wrong on the server" );

errors.auth( "Invalid credentials" );

errors.notAuthorized( "You can't do that!" );

errors.resourceNotFound( "That doesn't exist" );

errors.conflict( "Email is in use" );
```

**Notes:**

* Each error function takes a `message` parameter and returns a JavaScript `Error` with the `status` property set to the appropriate HTTP code, so you can pass these to `next()` and let Express middleware do the rest.

------------
