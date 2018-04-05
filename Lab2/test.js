fs = require('fs')
fs.readFile('.\Lab2\test.js', 'utf8', function (err,data) {
    setTimeout(() => { console.log('timeout'); }, 0);
    setImmediate(() => {console.log('immediate'); });
    // process.nextTick(() => console.log('nexttick'));
});


var courseName = 'WAA';
var obj = {
 courseName: 'MWA',
 prerequisite: {
 courseName: 'WAP',
 getCourseName: function() {
 return this.courseName;
 }
 }
};
var test = obj.prerequisite.getCourseName;
console.log(test.bind(obj)());
console.log(test.call(obj));
console.log(test.apply(obj));
