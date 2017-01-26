// //Synchronous read
// var fs = require('fs');

// var data = fs.readFileSync('input.txt');
// console.log("Synchronous read:",data.toString());

// console.log("get coffee");
// console.log("Program has ended");

//Asynch read
var fs = require('fs');

fs.readFile('input.txt',function(err,data){
	if(err){
		console.error(err);
	}
	else{
		console.log("asych read:",data.toString());
	}
});

console.log("got coffee");
console.log("Program has ended");