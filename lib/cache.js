exports.cacheControl = function ( isPublic, expiresInSeconds ) {

    return function ( req, res, next ) {

        var cacheType = isPublic ? "public" : "private";

        res.header( "Cache-Control", cacheType + ", max-age=" + expiresInSeconds );
        next();

    };

};
