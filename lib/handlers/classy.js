var util = require( "util" );
var EventEmitter = require( "events" ).EventEmitter;


module.exports = ClassyHandler;


function ClassyHandler ( req, res, next ) {

    EventEmitter.call( this );

    this.req = req;
    this.res = res;
    this.next = next;

    this.on( "error", this.error );
    this.on( "invalid", this.validationError );
    this.on( "respond", this.respond );

}

util.inherits( ClassyHandler, EventEmitter );


ClassyHandler.prototype.error = function( error ) {

    this.next( error );

};


ClassyHandler.prototype.validationError = function( errors ) {

    this.respond( errors, 400 );

};


ClassyHandler.prototype.respond = function( data, status ) {

    this.res.status( status ).json( data );

};
