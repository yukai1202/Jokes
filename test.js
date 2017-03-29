var datetime = require('node-datetime');

var dt = datetime.create(Date.now()).format('Y-m-d H:M:S');
console.log(dt);