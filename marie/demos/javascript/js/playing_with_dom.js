document.addEventListener( 'DOMContentLoaded', function () {
		
		document.getElementById("no2").innerHTML = "Changed Text";

		var listItems = document.getElementsByClassName("test");
		console.log(listItems);

	    for (var i = 0; i < listItems.length; i++){
	        listItems[i].innerHTML = "milk <strong> and cheese</strong>";
	    };

		console.log(listItems.length);
		console.log(listItems[0]);
		console.log(listItems[1]);

		function showDate(){
		    var today = new Date();
		    document.getElementById("demoDate").innerHTML = today.toDateString();
	    };

	    // document.onclick = showDate;
	    document.addEventListener('click', showDate, false);

}, false );