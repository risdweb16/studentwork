$(document).ready(function() { 

	//Testing the for loop for when Fizz, Buzz and FizzBuzz occur.
	/*for (var i = 1000; i <= 25000; i+=1000) {
		if (i % 3000 === 0 & i % 5000 === 0) {
			console.log("FizzBuzz");
		} else if (i % 3000 === 0) {
			console.log("Fizz");
		} else if (i % 5000 === 0) {
			console.log("Buzz");
		} else {
			console.log(i);
		}
	};*/
	
	var userAnswer = 1;

	//Testing the buttons of Fizz, Buzz and FizzBuzz
	$('#f').click(function(){
		console.log("Yay a click");
		userAnswer = "fizz";
	});

	$('#b').click(function() {
		console.log("Yay a click");
		userAnswer = "buzz";
	});

	$('#fB').click(function() {
		console.log("Yay a click");
		userAnswer = "fizzBuzz";
	});

	
	//Testing the timer.

	function timedText(i){
		$('#demo').html(i);
	};

	var i = 0;
	
	var timer = setInterval(function(){

        i++;
        timedText(i);
        if(i===25){
        	clearInterval(timer); //this will clear the interval and end the game   
        }
        else if (i % 3 === 0 && i % 5 === 0) {
            	console.log("FizzBuzz");
            } else if (i % 3 === 0) {
            	console.log("Fizz");
            } else if (i % 5 === 0) {
            	console.log("Buzz");
            } else {
                console.log(i);
            }
     },1000);



	/*$('#demo').click(timedText);

	var timer = 0;

	function timedText(){
		for(var i=0; i<25; i++){
			timer = i*1000;
			setTimeout(function() {
				$('#demo').html(i);
			}, timer);
		}
	};*/


	/*var timer = true;
	var i=1000
	
	while(timer) {
		for (i=1, i<26, i++) {
			if (i % 3 === 0) {
				var answer = "fizz";
				console.log("Fizz");
			} else if (i % 5 === 0) {
				var answer = "buzz";
				console.log("Buzz");
			} else if (i % 3 === 0 && i % 5 === 0) {
				var answer = "fizzBuzz";
				console.log("FizzBuzz");
			} else {
				var answer = false;
				console.log("Wrong");
			}
		}
	}*/
	
	/*function timedText() {
		setTimeout(myTimeout0, 0000)
	    setTimeout(myTimeout1, 1000) 
	    setTimeout(myTimeout2, 2000) 
	    setTimeout(myTimeout3, 3000)
	    setTimeout(myTimeout4, 4000) 
	    setTimeout(myTimeout5, 5000) 
	    setTimeout(myTimeout6, 6000) 
	    setTimeout(myTimeout7, 7000) 
	    setTimeout(myTimeout8, 8000) 
	    setTimeout(myTimeout9, 9000) 
	    setTimeout(myTimeout10, 10000) 
	    setTimeout(myTimeout11, 11000) 
	    setTimeout(myTimeout12, 12000) 
	    setTimeout(myTimeout13, 13000) 
	    setTimeout(myTimeout14, 14000) 
	    setTimeout(myTimeout15, 15000) 
	    setTimeout(myTimeout16, 16000) 
	    setTimeout(myTimeout17, 17000) 
	    setTimeout(myTimeout18, 18000) 
	    setTimeout(myTimeout19, 19000) 
	    setTimeout(myTimeout20, 20000) 
	    setTimeout(myTimeout21, 21000) 
	    setTimeout(myTimeout22, 22000) 
	    setTimeout(myTimeout23, 23000) 
	    setTimeout(myTimeout24, 24000)
	    setTimeout(myTimeout25, 25000)  
	}
	
	function myTimeout0() {
	    document.getElementById("demo").innerHTML = "GO";
	}
	function myTimeout1() {
	    document.getElementById("demo").innerHTML = "01";
	}
	function myTimeout2() {
	    document.getElementById("demo").innerHTML = "02";
	}
	function myTimeout3() {
	    document.getElementById("demo").innerHTML = "03";
	}
	function myTimeout4() {
	    document.getElementById("demo").innerHTML = "04";
	}
	function myTimeout5() {
	    document.getElementById("demo").innerHTML = "05";
	}
	function myTimeout6() {
	    document.getElementById("demo").innerHTML = "06";
	}
	function myTimeout7() {
	    document.getElementById("demo").innerHTML = "07";
	}
	function myTimeout8() {
	    document.getElementById("demo").innerHTML = "08";
	}
	function myTimeout9() {
	    document.getElementById("demo").innerHTML = "09";
	}
	function myTimeout10() {
	    document.getElementById("demo").innerHTML = "10";
	}
	function myTimeout11() {
	    document.getElementById("demo").innerHTML = "11";
	}
	function myTimeout12() {
	    document.getElementById("demo").innerHTML = "12";
	}
	function myTimeout13() {
	    document.getElementById("demo").innerHTML = "13";
	}
	function myTimeout14() {
	    document.getElementById("demo").innerHTML = "14";
	}
	function myTimeout15() {
	    document.getElementById("demo").innerHTML = "15";
	}
	function myTimeout16() {
	    document.getElementById("demo").innerHTML = "16";
	}
	function myTimeout17() {
	    document.getElementById("demo").innerHTML = "17";
	}
	function myTimeout18() {
	    document.getElementById("demo").innerHTML = "18";
	}
	function myTimeout19() {
	    document.getElementById("demo").innerHTML = "19";
	}
	function myTimeout20() {
	    document.getElementById("demo").innerHTML = "20";
	}
	function myTimeout21() {
	    document.getElementById("demo").innerHTML = "21";
	}
	function myTimeout22() {
	    document.getElementById("demo").innerHTML = "22";
	}
	function myTimeout23() {
	    document.getElementById("demo").innerHTML = "23";
	}
	function myTimeout24() {
	    document.getElementById("demo").innerHTML = "24";
	}
	function myTimeout25() {
	    document.getElementById("demo").innerHTML = "25";
	}*/


});



