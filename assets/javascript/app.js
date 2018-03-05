
// Timer Set up 

var time=30;
var clock;


function run() {
    clearInterval(clock);
    clock = setInterval(decrement, 1000);
  }
function decrement() {
    //  Decrease number by one.
    time--;
    //  Show the number in the #show-number tag.
    $("#timer").html("<h2>" + time + "</h2>");

    if (time===0) {

        stopT(); // move to next question or GAMEOVER
    }
    else{ return;
    }
}
function stopT() {
    clearInterval(clock);
}


var unAns= 10
var answC = 0;
var incorrC = 0;


$(document).ready(function(){

function game(){
$("input").on("click", function(){

    var ansQ = $("input:checked").val();
    console.log(ansQ);

if (ansQ =="1") {
    answC++;
    unAns--;
    
  }

  else{
    incorrC++;
    unAns--;
  }


});}

});



