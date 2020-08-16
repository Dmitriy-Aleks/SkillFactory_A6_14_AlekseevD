const numDivs = 36;
const maxHits = 10;
var countNumber=1;

let hits = 0;
let score = 10;
let firstHitTime = 0;

function round() {
    $('.target').removeClass("target"); 
    let divSelector = randomDivId();
    $(divSelector).addClass("target");
    $('.target').text(countNumber); 
    
    if (countNumber==1) {     
      firstHitTime=getTimestamp(); 
    }

    countNumber = countNumber+1;

    if (hits === maxHits) {
    endGame();
  }
}

function endGame() {
  $('.game-field').hide();
  let totalPlayedMillis = getTimestamp() - firstHitTime;
  let totalPlayedSeconds = Number(totalPlayedMillis / 1000).toPrecision(3);
  $("#total-time-played").text(totalPlayedSeconds);
  $("#total-score").text(score);
  $("#win-message").removeClass("d-none");
}

function handleClick(event) {
    if ($(event.target).hasClass("target")) {
    $('.miss').removeClass("miss"); 
    hits = hits + 1;
    $('.target').text("");
    round();
  }
    else {
      $('.miss').removeClass("miss"); 
      $(event.target).addClass("miss");
      $('.target').text("");
      hits = hits + 1;
      score -= 1
      round();
    }
}


function start() {
  $("#button-start").click(function() {
  $(".game").removeClass("d-none");

  init();
  });
} 

function init() { 
  
  $("#button-start").addClass("d-none");
  
  round();

  $(".game-field").click(handleClick);
  $("#button-reload").click(function() {
  location.reload();

  });
}

$(document).ready(start);

