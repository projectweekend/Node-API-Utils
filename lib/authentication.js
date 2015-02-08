var _ = require( "lodash" );
var is = require( "is_js" );
var jwt = require( "jsonwebtoken" );


var jwtSecret = process.env.JWT_SECRET;
var jwtExpires = process.env.JWT_EXPIRES;


exports.generateJWT = function ( user, properties ) {

    var options = {
        expiresInMinutes: jwtExpires
    };

    return jwt.sign( _.pick( user, properties ), jwtSecret, options );

};


// Middleware requiring a system-wide API key
exports.systemAPIKey = function ( routesToExclude ) {

    var systemAPIKey = process.env.SYSTEM_API_KEY;
    var systemAPIKeyHeader = "SYSTEM-API-KEY";

    if ( is.undefined( systemAPIKey ) ) {
        console.log( "SYSTEM_API_KEY environment variable must be defined." );
        process.exit( 1 );
    }

    return function ( req, res, next ) {

        var excluded = is.inArray( req.url, routesToExclude );
        var apiKeyValid = req.header( systemAPIKeyHeader ) === systemAPIKey;

        if ( !excluded && !apiKeyValid ) {
            return res.send( 403 );
        }

        next();

    };

};
