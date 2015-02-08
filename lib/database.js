var is = require( "is_js" );
var mongoose = require( "mongoose" );


exports.mongooseConnection = function () {

    var mongoUrl = process.env.MONGO_URL;
    var figDbUrl = process.env.DB_1_PORT;

    if ( is.undefined( mongoUrl ) && is.undefined( figDbUrl ) ) {
        console.log( "MONGO_URL environment variable is required if not starting app with Fig." );
        process.exit( 1 );
    }

    return mongoose.connect( mongoUrl || figDbUrl.replace( "tcp", "mongodb" ) + "/test" );

};
