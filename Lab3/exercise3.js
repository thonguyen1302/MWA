let EventEmitter = require('events');

class Clock extends EventEmitter {
    constructor() {
        super();
        let self = this;
        setInterval(function () {
            self.emit('tick');
        }, 1000);
    }
}

let object = new Clock();
object.on('tick', function () {
    console.log("woohoo");
});