var context;
var queue;
var WIDTH = 1430;
var HEIGHT = 768;
var mouseXPosition;
var mouseYPosition;
var batImage;
var stage;
var animation;
var deathAnimation;
var spriteSheet;
var enemyXPos=100;
var enemyYPos=100;
var enemyXSpeed = 1.5;
var enemyYSpeed = 1.75;
var score = 0;
var scoreText;
var gameTimer;
var playagaintext;
var gameTime = 0;
var timerText;

window.onload = function()
{
    /*
     *      Set up the Canvas with Size and height
     *
     */
    var canvas = document.getElementById('myCanvas');
    context = canvas.getContext('2d');
    context.canvas.width = WIDTH;
    context.canvas.height = HEIGHT;
    stage = new createjs.Stage("myCanvas");

    /*
     *      Set up the Asset Queue and load sounds
     *
     */
    queue = new createjs.LoadQueue(false);
    queue.installPlugin(createjs.Sound);
    queue.on("complete", queueLoaded, this);
    createjs.Sound.alternateExtensions = ["ogg"];

    /*
     *      Create a load manifest for all assets
     *
     */
    queue.loadManifest([
        {id: 'backgroundImage', },
        {id: 'crossHair', src: 'assets/crosshair.png'},
        {id: 'shot', src: 'assets/Woosh.mp3'},
        {id: 'gameOverSound', src: 'assets/gameOver.mp3'},
        {id: 'tick', src: 'assets/tick.mp3'},
        {id: 'plane', src: 'http://punkave.com/images/logo-black-circle.png'},
        {id: 'Death', src: 'http://www.clker.com/cliparts/9/9/c/p/q/E/plane-md.png'},
    ]);
    queue.load();

    /*
     *      Create a timer that updates once per second
     *
     */
    gameTimer = setInterval(updateTime, 1000);

}

function queueLoaded(event)
{
    // Add background image
    var backgroundImage = new createjs.Bitmap(queue.getResult("backgroundImage"))
    stage.addChild(backgroundImage);

    //Add Score
    scoreText = new createjs.Text("HIT ME: " + score.toString(), "36px Helvetica", "red");
    scoreText.x = 10;
    scoreText.y = 10;
    stage.addChild(scoreText);

    //Ad Timer
    timerText = new createjs.Text("TIME: " + gameTime.toString(), "36px Helvetica", "red");
    timerText.x = 1200;
    timerText.y = 10;
    stage.addChild(timerText);

    // Create bat spritesheet
    spriteSheet = new createjs.SpriteSheet({
        "images": [queue.getResult('plane')],
        "frames": {"width": 200, "height": 200},
        "animations": { "flap": [0,0] }
    
    });

    // Create bat death spritesheet
    batDeathSpriteSheet = new createjs.SpriteSheet({
    	"images": [queue.getResult('Death')],
    	"frames": {"width": 198, "height" : 148},
    	"animations": {"die": [0,7, false,1 ] }
    });

    // Create bat sprite
    createEnemy();


    // Add ticker
    createjs.Ticker.setFPS(15);
    createjs.Ticker.addEventListener('tick', stage);
    createjs.Ticker.addEventListener('tick', tickEvent);

    // Set up events AFTER the game is loaded
   // window.onmousemove = handleMouseMove;
    window.onmousedown = handleMouseDown;
}

function createEnemy()
{
	animation = new createjs.Sprite(spriteSheet, "flap");
    animation.regX = 99;
    animation.regY = 58;
    animation.x = enemyXPos;
    animation.y = enemyYPos;
    animation.gotoAndPlay("flap");
    stage.addChildAt(animation,1);
}

function batDeath()
{
  deathAnimation = new createjs.Sprite(batDeathSpriteSheet, "die");
  deathAnimation.regX = 99;
  deathAnimation.regY = 58;
  deathAnimation.x = enemyXPos;
  deathAnimation.y = enemyYPos;
  deathAnimation.gotoAndPlay("die");
  stage.addChild(deathAnimation);
}

function tickEvent()
{
	//Make sure enemy bat is within game boundaries and move enemy Bat
	if(enemyXPos < WIDTH && enemyXPos > 0)
	{
		enemyXPos += enemyXSpeed;
	} else 
	{
		enemyXSpeed = enemyXSpeed * (-1);
		enemyXPos += enemyXSpeed;
	}
	if(enemyYPos < HEIGHT && enemyYPos > 0)
	{
		enemyYPos += enemyYSpeed;
	} else
	{
		enemyYSpeed = enemyYSpeed * (-1);
		enemyYPos += enemyYSpeed;
	}

	animation.x = enemyXPos;
	animation.y = enemyYPos;

	
}


function handleMouseMove(event)
{
    //Offset the position by 45 pixels so mouse is in center of crosshair
    crossHair.x = event.clientX-45;
    crossHair.y = event.clientY-45;
}


function handleMouseDown(event)
{
    
    //Display CrossHair
    crossHair = new createjs.Bitmap(queue.getResult("crossHair"));
    crossHair.x = event.clientX-45;
    crossHair.y = event.clientY-45;
    stage.addChild(crossHair);
    createjs.Tween.get(crossHair).to({alpha: 0},1000);
    
    //Play Gunshot sound
    createjs.Sound.play("shot");

    //Increase speed of enemy slightly
    enemyXSpeed *= 1.05;
    enemyYSpeed *= 1.06;

    //Obtain Shot position
    var shotX = Math.round(event.clientX);
    var shotY = Math.round(event.clientY);
    var spriteX = Math.round(animation.x);
    var spriteY = Math.round(animation.y);

    // Compute the X and Y distance using absolte value
    var distX = Math.abs(shotX - spriteX);
    var distY = Math.abs(shotY - spriteY);

    // Anywhere in the body or head is a hit - but not the wings
    if(distX < 50 && distY < 59 )
    {
    	//Hit
    	stage.removeChild(animation);
    	batDeath();
    	score += 100;
    	scoreText.text = "SCORE: " + score.toString();
    	createjs.Sound.play("deathSound");
    	
        //Make it harder next time
    	enemyYSpeed *= 1.25;
    	enemyXSpeed *= 1.3;

    	//Create new enemy
    	var timeToCreate = Math.floor((Math.random()*3500)+1);
	    setTimeout(createEnemy,timeToCreate);

    } else
    {
    	//Miss
    	score -= 10;
    	scoreText.text = "SCORE: " + score.toString();

    }
}

function updateTime()
{
	gameTime += 1;
	if(gameTime > 60)
	{
		//End Game and Clean up
		timerText.text = "GAME OVER";
		stage.removeChild(animation);
		stage.removeChild(crossHair);
        createjs.Sound.removeSound("background");
        var si =createjs.Sound.play("gameOverSound");
		clearInterval(gameTimer);
	}
	else
	{
		timerText.text = "TIME: " + gameTime
    createjs.Sound.play("tick");
	}

}

