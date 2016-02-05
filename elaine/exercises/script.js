var CardGame = function(targetId)
{
  // private variables
  var cards = []
  var card_value = ["1C","2C","3C","4C"]; //"5C","6C","7C","8C","1H","2H","3H","4H","5H","6H","7H","8H"

  var started = false;
  var matches_found = 0;
  var card1 = false, card2 = false;

  var hideCard = function(id) // turn card face down
  {
    cards[id].firstChild.src = "v.jpg";
    with(cards[id].style) {
      WebkitTransform = MozTransform = OTransform = msTransform = "scale(1.0) rotate(180deg)";
    }
  };



  var moveToPack = function(id) // move card to pack
  {
    hideCard(id);
    cards[id].matched = true;
    with(cards[id].style) {
      zIndex = "1000";
      top = "0%";
      left = "0%";
      padding = "0 50 30 30px";
    
      // hspace = "300px";

      WebkitTransform = MozTransform = OTransform = msTransform = "rotate(0deg)";
      zIndex = "0";
    }
  };


  var moveToPlace = function(id) // deal card
  {
    // cards[id].matched = false;
    with(cards[id].style) {
      zIndex = "1000";

      top = cards[id].fromtop + "em"; //px

      left = cards[id].fromleft + "em";//%

      WebkitTransform = MozTransform = OTransform = msTransform = "rotate(90deg)";
      zIndex = "0";
    }
  };

  var showCard = function(id) // turn card face up, check for match
  {
    // if(id === card1) return;
    // if(cards[id].matched) return;

    // cards[id].firstChild.src = "v.jpg";
    with(cards[id].style) {
      WebkitTransform = MozTransform = OTransform = msTransform = "scale(1.0) ";
    }

    // if(card1 !== false) {
    //   card2 = id;
    //   if(parseInt(card_value[card1]) == parseInt(card_value[card2])) { // match found
    //     (function(card1, card2) {
    //       setTimeout(function() { moveToPack(card1); moveToPack(card2); }, 1000);
    //     })(card1, card2);
    //     if(++matches_found == 8) { // game over, reset
    //       matches_found = 0;
    //       started = false;
    //     }
    //   } else { // no match
    //     (function(card1, card2) {
    //       setTimeout(function() { hideCard(card1); hideCard(card2); }, 800);
    //     })(card1, card2);
    //   }
    //   card1 = card2 = false;
    // } else { // first card turned over
    //   card1 = id;
    // }
  };

  var cardClick = function(id)
  {
    if(started) {
      showCard(id);
    } else {
      // shuffle and deal cards
      card_value.sort(function() { return Math.round(Math.random()) - 0.9; });
      for(i=0; i < 4; i++) {
        (function(idx) {
          setTimeout(function() { moveToPlace(idx); }, idx * 100);
        })(i);
      }
      started = true;
    }
  };

  // initialise

  var stage = document.getElementById(targetId);
  var felt = document.createElement("div");
  felt.id = "felt";
  stage.appendChild(felt);

  // template for card
  var card = document.createElement("div");
  card.innerHTML = "<img src=\"x.jpg\">";

  for(var i=0; i < 16; i++) {
    var newCard = card.cloneNode(true);

    newCard.fromtop = 0 + 10; // * Math.floor(i);
    newCard.fromleft = 20 * (i%4);
    (function(idx) {
      newCard.addEventListener("click", function() { cardClick(idx); }, false);
    })(i);

    felt.appendChild(newCard);
    cards.push(newCard);
  }

}

$(window).click(function(){
  $("#felt").fadeOut("fast");
});