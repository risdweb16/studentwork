circle_cnt_degrees = [0, 0, 0, 0];
animation_loop = [0, 0, 0, 0];
//redraw_loop = [0, 0, 0, 0];

default_tag = "COME ON"

window.onload = function(){
	circle_animation(0, "canvas0", 0, default_tag);
	circle_animation(1, "canvas1", 0, default_tag);
	circle_animation(2, "canvas2", 0, default_tag);
	circle_animation(3, "canvas3", 0, default_tag);
	
}



function circle_animation(circle_id, canvas_id, degree, text) {
	clearInterval(animation_loop[circle_id]);

	//canvas initialization
	//var canvas = document.getElementById("canvas");
	var canvas = document.getElementById(canvas_id);
	var ctx = canvas.getContext("2d");
	var W = canvas.width;
	var H = canvas.height;

	//Variables
	//var degrees = 0;
	var new_degrees = 0;
	var difference = 0;
	var bgcolor = "DimGray";
	var color = "lightgreen"; 
	if (text == default_tag) color = bgcolor;
	//var animation_loop, redraw_loop;
	
	function init()
	{
		//Clear the canvas everytime a chart is drawn
		ctx.clearRect(0, 0, W, H);
		
		//Background 360 degree arc
		ctx.beginPath();
		ctx.strokeStyle = bgcolor;
		ctx.lineWidth = 10;
		ctx.arc(W/2, H/2, 80, 0, Math.PI*2, false); //you can see the arc now
		ctx.stroke();
		
		//gauge will be a simple arc
		//Angle in radians = angle in degrees * PI / 180
		var radians = circle_cnt_degrees[circle_id] * Math.PI / 180;
		//alert(circle_id);
		ctx.beginPath();
		ctx.strokeStyle = color;
		ctx.lineWidth = 10;
		//The arc starts from the rightmost end. If we deduct 90 degrees from the angles
		//the arc will start from the topmost end
		ctx.arc(W/2, H/2, 80, 0 - 90*Math.PI/180, radians - 90*Math.PI/180, false); 
		//you can see the arc now
		ctx.stroke();
		
		//Lets add the text
		ctx.fillStyle = color;
		ctx.font = "15px Open Sans";
		//text = Math.floor(degrees/360*100) + "%";
		//text = "CONCEPT"
		//Lets center the text
		//deducting half of text width from position x
		text_width = ctx.measureText(text).width;
		//adding manual value to position y since the height of the text cannot
		//be measured easily. There are hacks but we will keep it manual for now.
		ctx.fillText(text, W/2 - text_width/2, H/2 + 8);
	}
	
	function draw()
	{
		//Cancel any movement animation if a new chart is requested
		//if(typeof animation_loop != undefined) clearInterval(animation_loop);
		
		//random degree from 0 to 360
		//new_degrees = Math.round(Math.random()*360);
		new_degrees = degree;
		//difference = new_degrees - circle_cnt_degrees[circle_id];
		//This will animate the gauge to new positions
		//The animation will take 1 second
		//time for each frame is 1sec / difference in degrees
		animation_loop[circle_id] = setInterval(animate_to, 1000/360);
	}
	
	//function to make the chart move to new degrees
	function animate_to()
	{
		//clear animation loop if degrees reaches to new_degrees
		if(circle_cnt_degrees[circle_id] == new_degrees) 
			clearInterval(animation_loop[circle_id]);

		if(circle_cnt_degrees[circle_id] < new_degrees)
			circle_cnt_degrees[circle_id]++;
		else
			circle_cnt_degrees[circle_id]--;
			if (circle_cnt_degrees[circle_id] == -1) {
				color = bgcolor;
				text = default_tag;
			}
		init();
	}
	
	//Lets add some animation for fun
	draw();
	//redraw_loop = setInterval(draw, 2000); //Draw a new chart every 2 seconds
	
	
	
	
}