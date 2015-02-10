var is = require( "is_js" );


exports.url = function () {

    var blitzKey = process.env.BLITZ_KEY;

    if ( is.undefined( blitzKey ) ) {
        console.log( "BLITZ_KEY environment variable not defined." );
        process.exit( 1 );
    }

    return "/" + blitzKey;

};


exports.handler = function ( req, res ) {

    res.header( "Content-Type", "text/plain" );
    res.send( "42" );

};
