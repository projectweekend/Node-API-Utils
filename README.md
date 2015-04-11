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

#### Mongoose connection with Docker-Compose fallback

```javascript
var databaseUtils = require( "api-utils" ).database;


var db = databaseUtils.mongooseConnection( "DB_PORT" );
```

**Parameters: None**

**Notes:**

`mongooseConnection` takes an optional parameter which is the name of the environment variable provided by a linked Docker Compose service. If this variable name is not provided then the `MONGO_URL` environment variable must be defined.

------------


### Caching

#### Middleware for setting Cache-Control header

```javascript
var cacheUtils = require( "api-utils" ).cache;


var oneMonth = 60 * 60 * 24 * 30;


// Apply to all routes
server.use( cacheUtils.cacheControl( oneMonth ) );


// Apply of a specific route only
server.get( "/", cacheUtils.cacheControl( oneMonth ), indexHandler.get );
```

**Parameters:**

* An integer representing a number os seconds to keep cache alive

------------


### Responses

#### Common HTTP Response Callbacks

```javascript
var responses = require( "api-utils" ).responses;


exports.create = function ( req, res, next ) {

    // Send a 201 and the database result, or pass error to handler middleware
    CreateSomethingInDatabase( thingToCreate, responses.createdResponse( res, next ) );

};

// Other responses:

// Send a 201 and the database result, or pass error to handler middleware.
// Behaves like a detail response and sends 404 when parent document is not found
responses.nestedCreateResponse

// Send 200 and result, or pass error to handler
responses.listResponse

// Send 200 and result, or pass error to handler. Sends a 404 when the result is empty.
responses.detailResponse

// Send 204 and no body, or pass error to handler. Sends a 404 when the result is empty.
responses.deleteResponse
```


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
