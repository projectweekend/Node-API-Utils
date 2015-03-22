var util = require( "util" );
var ClassyHandler = require( "./classy" );


module.exports = CreateHandler;


function CreateHandler ( req, res, next ) {

    ClassyHandler.call( this, req, res, next );

    this.on( "valid", this.create );

}

util.inherits( CreateHandler, ClassyHandler );


CreateHandler.prototype.validate = function() {
    "If validation fails emit 'invalid' and pass errors";
    "If validation passes emit 'valid' and pass in data";
    throw new Error( "Not implemented" );
};


CreateHandler.prototype.create = function( data ) {
    "If an error happens emit 'error' and pass error";
    "If successful emit 'respond' with data to send in response";
    throw new Error( "Not implemented" );
};


CreateHandler.prototype.handle = function() {
    this.validate();
};
