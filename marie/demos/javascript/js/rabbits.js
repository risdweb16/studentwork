//declaring some variables
var x = 5;
var y = "5";
var z = 8;
/*
//printing out the results
console.log((5 + 6) * 9, "hi");
console.log(x == y);
console.log(x === y);
console.log("String"+" "+"concatenation");

//example function
function addVars() {
   var sum = 5+8;
   console.log(sum);
}

//addVars();


var carNames = [
				"Civic",
				"Prius",
				"Wrangler",
				"Cayenne",
				"GranTurismo"];

console.log(carNames[2]);
console.log(carNames.length);




var rabbitCount = 3;

//conditionals
function checkRabbitCount() {
   if(rabbitCount<10){
   		console.log("We have less than 10 rabbits.");
   }
   else{
   		console.log("We have more than 10 rabbits.")
   }
}

//loops
function listRabbits() {
    for(var i=1; i<=rabbitCount; i++) {
       // operator + concatenates strings
        console.log("Rabbit "+i+" out of the hat!");
    }
}

checkRabbitCount();
listRabbits();
*/


// {} shorthand for var person = new Object();
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

/*shorthand for 
person.address = new Object();
person.address.street = "111 Main St.";
person.address.city = "Providence";
person.address.state = "Rhode Island";
*/

console.log(person.firstname); //dot operator member access
console.log(person.address.street);
console.log(person["address"]["city"]);



var car = {
	make: "MINI",
	model: "Cooper S",
	horsepower: 189,
	color: "Orange",
	currentSpeed: 30,
	fuelLevel: 100,
	changeSpeed : function() {
       console.log(this.currentSpeed + 10 + "mph");
    }
}

console.log(car);
car.changeSpeed();
