exports.system = function ( message ) {

    var err = new Error( message );
    err.status = 500;

    return err;

};


exports.auth = function ( message ) {

    var err = new Error( message );
    err.status = 401;

    return err;

};


exports.conflict = function ( message ) {

    var err = new Error( message );
    err.status = 409;

    return err;

};
