var util = require( "util" );
var EventEmitter = require( "events" ).EventEmitter;


module.exports = CreateHandler;


function CreateHandler () {

    EventEmitter.call( this );

    this.on( "valid", this.create );
    this.on( "invalid", this._validationFailed );
    this.on( "error", this._error );
    this.on( "created", this._respond );

}

util.inherits( CreateHandler, EventEmitter );


CreateHandler.prototype._validationFailed = function( errors ) {
    this.res.status( 400 ).json( errors );
};


CreateHandler.prototype._error = function( error ) {
    this.next( error );
};


CreateHandler.prototype._respond = function( data ) {
    this.res.status( 201 ).json( data );
};


CreateHandler.prototype.validate = function() {
    "If validation fails emit 'invalid' and pass errors";
    "If validation passes emit 'valid' and pass in data";
    throw new Error( "Not implemented" );
};


CreateHandler.prototype.create = function( data ) {
    "If an error happens emit 'error' and pass error";
    "If successful emit 'created' with data to send in response";
    throw new Error( "Not implemented" );
};


CreateHandler.prototype.handler = function( req, res, next ) {

    this.req = req;
    this.res = res;
    this.next = next;

    this.validate();

};
