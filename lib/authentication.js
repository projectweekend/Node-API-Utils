var _ = require( "lodash" );
var jwt = require( "jsonwebtoken" );


var jwtSecret = process.env.JWT_SECRET;
var jwtExpires = process.env.JWT_EXPIRES;


exports.generateJWT = function ( user, properties ) {

    var options = {
        expiresInMinutes: jwtExpires
    };

    return jwt.sign( _.pick( user, properties ), jwtSecret, options );

};
