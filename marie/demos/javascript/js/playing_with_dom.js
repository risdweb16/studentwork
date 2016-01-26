	// document.addEventListener( 'DOMContentLoaded', function () {
		var listItems = document.getElementsByClassName("test");
	    for (var i = 0; i < listItems.length; i++){
	        listItems[i].innerHTML = "milk";
	    };
	    
	    document.getElementById("no2").textContent= "text change"; 

	    var today = new Date();
	    document.getElementById("demoDate").innerHTML = today.toDateString();

	// }, false );