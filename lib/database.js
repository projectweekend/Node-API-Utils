var is = require( "is_js" );
var mongoose = require( "mongoose" );


exports.mongooseConnection = function ( dockerComposeEnvVar ) {

    var mongoUrl = process.env.MONGO_URL;
    var dockerComposeDbUrl = process.env[ dockerComposeEnvVar ];

    if ( is.undefined( dockerComposeDbUrl ) && is.undefined( mongoUrl ) ) {
        console.log( "MONGO_URL environment variable is required if not starting app with Docker Compose." );
        process.exit( 1 );
    }

    if ( dockerComposeDbUrl ) {
        mongoUrl = dockerComposeDbUrl.replace( "tcp", "mongodb" ) + "/test";
    }

    return mongoose.connect( mongoUrl );

};
