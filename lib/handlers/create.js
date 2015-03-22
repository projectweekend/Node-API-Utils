var util = require( "util" );
var ClassyHandler = require( "./classy" );


module.exports = CreateHandler;


function CreateHandler ( req, res, next ) {

    ClassyHandler.call( this, req, res, next );

    this.on( "preCreate", this.preCreate );
    this.on( "create", this.create );
    this.on( "postCreate", this.postCreate );

}

util.inherits( CreateHandler, ClassyHandler );


CreateHandler.prototype.validate = function() {
    "Emit 'invalid' and pass errors to send validation error response";
    "Emit 'create' and pass data to invoke 'create' method";
    "Emit 'preCreate' and pass data to invoke 'preCreate' method";
    throw new Error( "Not implemented" );
};


CreateHandler.prototype.preCreate = function( data ) {
    "Emit 'create' and pass data to invoke 'create' method";
    "Emit 'error' and pass error to send error response";
    throw new Error( "Not implemented" );
};


CreateHandler.prototype.create = function( data ) {
    "Emit 'error' and pass error to send error response";
    "Emit 'respond' and pass data and status code to send response";
    "Emit 'postCreate' and pass data to invoke 'postCreate' method";
    throw new Error( "Not implemented" );
};


CreateHandler.prototype.postCreate = function( data ) {
    "Emit 'error' and pass error to send error response";
    "Emit 'respond' and pass data and status code to send response";
    throw new Error( "Not implemented" );
};


CreateHandler.prototype.handle = function() {
    this.validate();
};
