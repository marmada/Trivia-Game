
// Timer Set up 

var time = 120;
var clock;

 // count  scores

var unAns = 10
var answC = 0;
var incorrC = 0;

// game master

var screenA = $("#loaded")
var screenB = $("#trivia")
var screenC = $("#final")

// funtion Timer
function run() {
    clearInterval(clock);
    clock = setInterval(decrement, 1000);
    }

function decrement() {
    //   Decrease number by one.
    time--;
    console.log(time);

    var convTime = timeConverter(time);

    $("#timer").html("<h2>" + convTime + "</h2>");

    if (time === 0) {

        stopT();
    }
    else {
        return;
    }
}

function stopT() {
    clearInterval(clock);
}
// standarize timer
function timeConverter(t) {

    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    if (minutes === 0) {
        minutes = "00";
    }
    else if (minutes < 10) {
        minutes = "0" + minutes;
    }

    return minutes + ":" + seconds;
}


function game() {
    $("input").on("click", function () {

        var ansQ = $("input:checked").val();
        console.log(ansQ);

        if (ansQ == "1") {
            answC++;
            unAns--;
            $("correct").text("Correct:" + answC);

        }

        else {
            incorrC++;
            unAns--;
        }

    });

}
        $(document).ready(function () {

            $(".startB").click(function(){

                $("#loaded").hide();
                $("#trivia").show();

                run();
                game();

            }

                
            );

        });
    





