const EventEmitter = require('events');

class MyEmitter extends EventEmitter { }

const myEmitter = new MyEmitter();
myEmitter.on('WaterFull', () => {
    console.log('Turn off the motor');
    setTimeout(() => { 
        console.log("Please turn off the motor it's a gentle reminder dear");
    }, 5000);
});
myEmitter.emit('WaterFull');