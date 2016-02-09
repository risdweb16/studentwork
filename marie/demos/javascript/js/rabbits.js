//declaring some variables
var x = 5; //data type number 
var y = "5"; //data type string

var z = 15;

var s = 3;

//printing out the results
console.log(x + z);
console.log(x == y);
console.log(x === y);
console.log("String"+ x + "concatenation"); //strings go in quotation marks and should be separate from variables

function subtractVars() {
	
}


function addVars() {
   var sum = s + z;
   console.log(sum);
}

addVars();

//an array
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

//dot syntax
var person = new Object();
person.firstname = "Marie";
person.lastname = "Otsuka";
person.address = new Object();
person.address.street = "111 Main St.";
person.address.city = "Providence";
person.address.state = "Rhode Island";

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


//two ways to access object properties
console.log(person.firstname); 
console.log(person["firstname"]);


//objects can have properties and methods
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
};

console.log(car);
car.changeSpeed();

