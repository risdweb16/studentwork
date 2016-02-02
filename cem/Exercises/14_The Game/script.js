$(document).ready(function(){
	$(".button").hide();
	$(".Questions").hide();
	$(".han").hide();

$('.wilk').hover(function(){
    $(this).text('환영');
});


/*
	$(".welcome").hover(function() {
    $(".wilk").hide;
    $(".han").show;
	}, function() {
    $(".wilk").show();
    $(".han").hide();
  }
);*/


	$(".welcome").click(function(){

		$(this).hide();
		$(".Questions").show();
	});



	
	var yourGender = $('#yourGender').val();
	var yourAge = $('#yourAge').val();
	var theirGender = $('#theirGender').val();
	var theirAge = $('#theirAge').val();
	var theirName = $('#theirName').val();

	

function validate(){
    if ($('#yourGender').val().length   >   0   &&
        $('#yourAge').val().length  >   0   &&
        $('#theirGender').val().length    >   0 &&
        $('#theirAge').val().length > 0) {
    
    		$(".button").show();

    };

};

	validate();
    $('#yourGender, #yourAge, #theirGender, #theirAge, #theirName').change(validate);



	/*var bgColor = $(this).css("background-color");
	if (bgColor==="rgb(255, 0, 0)"){
			 	console.log($(this).css("background-color"));
			 	checkFilled++;
			 	console.log(checkFilled);
			 }*/


	// var checkFilled = 0;
	// $('input').blur (function() { 
	// 	console.log("out of focus");
	// 	$('input').each(function() {
			 
	// 		 console.log(bgColor);
	// 	});
		 
	// });

	// if (checkFilled ===5) {
	// 	console.log("button");
	// };


	// if ($('#yourGender, #yourAge, #theirGender, #theirAge').val().length > 0) {
 //  		console.log("yas");
 // 	}
 // 	else 
 // 	{
 	
 // 	};
	


	$(".button").click(function(){

	$(".Questions").hide();

	var yourGender = $('#yourGender').val();
	var yourAge = $('#yourAge').val();
	var theirGender = $('#theirGender').val();
	var theirAge = $('#theirAge').val();
	var theirName = $('#theirName').val();

		console.log(theirName);

		var ageDiff = (theirAge-yourAge);



		if (ageDiff > 0 && ageDiff < 7) {

				if(yourGender === "M" && theirGender === "M"){
					console.log("Hyung");
					$("#answer").append(theirName + " " + "Hyung");
				}
				else if (yourGender === "M" && theirGender === "F"){
					console.log("Nuna");
					$("#answer").append(theirName + " " + "Nuna");
				}
				else if (yourGender === "F" && theirGender === "M"){
					console.log("Oppa");
					$("#answer").append(theirName + " " + "Oppa");
				}
				else if (yourGender === "F" && theirGender === "F"){
					console.log("Unni");
					$("#answer").append(theirName + " " + "Unni");
				};
		}
		else if (ageDiff > 8 && ageDiff <15) {

				if(yourGender === "M" && theirGender === "M"){
					console.log("Hyungnim");
					$("#answer").append(theirName + " " + "Hyungnim");
				}
				else if (yourGender === "M" && theirGender === "F"){
					console.log("Nunim");
					$("#answer").append(theirName + " " + "Nunim");
				}
				else if (yourGender === "F" && theirGender === "M"){
					console.log("Oppa");
					$("#answer").append(theirName + " " + "Oppa");
				}
				else if (yourGender === "F" && theirGender === "F"){
					console.log("Unni");
					$("#answer").append(theirName + " " + "Unni");
				};


		}
		else if (ageDiff > 16){

				if(yourGender === "M" && theirGender === "M"){
					console.log("Sunsengnim");
					$("#answer").append(theirName + " " + "Sunsengnim");
				}
				else if (yourGender === "M" && theirGender === "F"){
					console.log("Sunsengnim");
					$("#answer").append(theirName + " " + "Sunsengnim");
				}
				else if (yourGender === "F" && theirGender === "M"){
					console.log("Sunsengnim");
					$("#answer").append(theirName + " " + "Sunsengnim");
				}
				else if (yourGender === "F" && theirGender === "F"){
					console.log("Sunsengnim");
					$("#answer").append(theirName + " " + "Sunsengnim");
				};
		}
		else
		{
		console.log("just the name");
		$("#answer").append("just" + " " + theirName)
		};

	});



	
	$("#answer").click(function(){
	$(".Questions").show();
	$(this).empty();
	});



});

