var EventEmitter = require('events');
var util = require('util');

class Clock {
    constructor(){
        EventEmitter.call(this);
    }
}

util.inherits(Clock, EventEmitter);

var clock = new Clock();

clock.on('tick', function() {
    console.log('Woohoo');
});

setInterval(function(){
    clock.emit('tick');
}, 1000);
