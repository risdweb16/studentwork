$(document).ready(function(){





var yourGender = prompt("Your Gender", "Please enter M or F");
var yourAge = prompt("Your Age", "enter a number");
var theirGender = prompt("The person you are talking to is", "M or F?");
var theirAge = prompt("Their Age", "enter a number")
var theirName = prompt("what is his/her name?", "Enter name here");


var ageDiff = (theirAge-yourAge);


if (ageDiff > 0 && ageDiff < 7) {

		if(yourGender === "M" && theirGender === "M"){
			console.log("Hyung");
			$("div").append(theirName + " " + "Hyung");
		}
		else if (yourGender === "M" && theirGender === "F"){
			console.log("Nuna");
			$("div").append(theirName + " " + "Nuna");
		}
		else if (yourGender === "F" && theirGender === "M"){
			console.log("Oppa");
			$("div").append(theirName + " " + "Oppa");
		}
		else if (yourGender === "F" && theirGender === "F"){
			console.log("Unni");
			$("div").append(theirName + " " + "Unni");
		};
}
else if (ageDiff > 8 && ageDiff <15) {

		if(yourGender === "M" && theirGender === "M"){
			console.log("Hyungnim");
			$("div").append(theirName + " " + "Hyungnim");
		}
		else if (yourGender === "M" && theirGender === "F"){
			console.log("Nunim");
			$("div").append(theirName + " " + "Nunim");
		}
		else if (yourGender === "F" && theirGender === "M"){
			console.log("Oppa");
			$("div").append(theirName + " " + "Oppa");
		}
		else if (yourGender === "F" && theirGender === "F"){
			console.log("Unni");
			$("div").append(theirName + " " + "Unni");
		};


}
else if (ageDiff > 16){

		if(yourGender === "M" && theirGender === "M"){
			console.log("Sunsengnim");
			$("div").append(theirName + " " + "Sunsengnim");
		}
		else if (yourGender === "M" && theirGender === "F"){
			console.log("Sunsengnim");
			$("div").append(theirName + " " + "Sunsengnim");
		}
		else if (yourGender === "F" && theirGender === "M"){
			console.log("Sunsengnim");
			$("div").append(theirName + " " + "Sunsengnim");
		}
		else if (yourGender === "F" && theirGender === "F"){
			console.log("Sunsengnim");
			$("div").append(theirName + " " + "Sunsengnim");
		};
}
else
{
console.log("just the name");
$("div").append("just" + " " + theirName)
};




});

