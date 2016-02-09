var myAge = prompt("What is your age?");

if(myAge>=13){
  confirm("The future of mankind is now in your hands. Go forth and make us 
    proud.");
}
else{
  alert("You may go on, but I am not responsible for your actions during 
    or after the game. This is not for the faint of heart. The fate of 
    mankind is in your hands now.");
}

alert("This is a top secret mission.
No one can know what happens here!");
confirm("Are you ready?");
alert("Let's begin!");

alert("There has been an outbreak at one of our facilities. 
  We are a government funded research group known for its studies in 
  chemical warfare. The origin of the outbreak is unknown.")



var troll = prompt("We will provide you with a gas mask but you must 
  pick one weapon of your choice in case you run into any trouble. 
  Your options are: one fully loaded GUN, a stainless steel BAT, or a SWORD. 
  What will you pick?").toUpperCase();

switch(troll) {
  case 'GUN':
    var shot = prompt("Ah good choice. Are you a good shot?
 (YES or NO)?").toUpperCase();
    var smart = prompt("Are you smart?").toUpperCase();
    if(shot === "YES" || smart === "YES") {
      console.log("A gun won’t do you much use when you run out of bullets, 
        so clearly you are not that smart. This mission is not for you. 
        Sorry but we rather rely on someone else. ");
    } 
    else {
      console.log("If you are neither a good shot nor are you smart 
        then perhaps this mission was not meant for you. You simply won’t do.");
    }
    break;

  case 'BAT':
    var change = prompt("Alright, you do realize this is not a baseball game? 
      Do you want to change your weapon? (YES or NO)?").toUpperCase();
    var newweaopn = prompt("Should your weapon have magical abilities?").toUpperCase();
    if(change === 'YES' && newweaopn === 'YES') {
      console.log("Great, you are both indecisive and crazy. Magic isn’t real! 
        This isn’t Harry Potter! We are all doomed!");
    } else {
      console.log("You really have no idea what you are up against! There is 
        nothing a bat can do for you here. You are 
        not making it out of here alive. So much for mankind. ");
    }
    break;

  case 'SWORD':
    var fast = prompt("Hmm interesting pick. Do you have any experience with 
      handling a sword (YES or NO)?").toUpperCase();
    var headStart = prompt("Did you get a head start?").toUpperCase();
    if(fast === 'YES' || headStart === 'YES') {
      console.log("You got away--barely! You live to stroll through the forest another day.");
    } else {
      console.log("You're not fast and you didn't get a head start? You never had a chance! The troll eats you.");
    }
    break;
  default:
    console.log("I didn't understand your choice. Hit Run and try again, this time picking FIGHT, PAY, or RUN!");
}