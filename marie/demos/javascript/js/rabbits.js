/*//declaring some variables
var x = 5;
var y = "5";

var z = 15;

var s = 3;

//printing out the results
console.log(x + z);
console.log(x == y);
console.log(x === y);
console.log("String"+" "+"concatenation");

function subtractVars() {
	
}


function addVars() {
   var sum = s + z;
   console.log(sum);
}

addVars();


var carNames = [
				"Civic",
				"Prius",
				"Wrangler",
				"Cayenne",
				"GranTurismo",
				"Toyota"];

console.log(carNames[5]);
console.log(carNames.length);






//conditionals
function checkRabbitCount() {
	console.log(rabbitCount < 10);
   
   if(rabbitCount < 10){
   		console.log("We have less than 10 rabbits.");
   }
   else{
   		console.log("We have more than 10 rabbits.")
   }
}

checkRabbitCount();

//loops
var rabbitCount = 12;

function listRabbits() {
    for(var i=1; i < rabbitCount; i=i+2) {
       // operator + concatenates strings
        console.log("Rabbit "+i+" out of the hat!");
    }
    var n = 1;

	while (n<rabbitCount){
		console.log("Rabbit "+n+" out of the hat!");
		n=n+2;
	}
}

listRabbits();

var person = new Object();
person.address = new Object();
person.address.street = "111 Main St.";
person.address.city = "Providence";
person.address.state = "Rhode Island";
*/

// Object-literal syntax
var person = {   
	firstname: "Marie",
	lastname: "Otsuka",
	address: {
		street: "111 Main St.",
		city: "Providence",
		state: "Rhode Island"
	}
};



console.log(person.firstname); //dot operator member access
console.log(person["firstname"]);



var car = {
	make: "MINI",
	model: "Cooper S",
	horsepower: 189,
	color: "Orange",
	currentSpeed: 30,
	fuelLevel: 100,
	changeSpeed : function() {
       console.log(this.currentSpeed + 40 + "mph");
    }
}

console.log(car);
car.changeSpeed();

