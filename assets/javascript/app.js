
// Timer Set up 

var time = 70;
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
        $("#trivia").css({'display':'none'});
        $(".scoreB").css({'display':'none'});
        $(".gameA").empty();
        $("#final").show();

    var a = $("<div fScreen ansCr>");
    a.text("You got "+ answC +"/10 Correct!");

    var b = $("<div fScreen ansInc>");
    b.text("You got "+ incorrC +"/10 Incorrect!");

    var c= $("<div fScreen qAns>");
    c.text("You answered "+ 10-unAns);


    
        $(".gameA").append(a);
        $(".gameA").append(b);
        $(".gameA").append(c);


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
            $("#correct").text("Correct:" + answC);
            $("#incorrect").text("Incorrect:" + incorrC);
            $("#notAnsw").text("Not Answered:" + unAns);
            
            if(unAns === 0){
                stopT();
                $("#trivia").css({'display':'none'});
                $(".scoreB").css({'display':'none'});
                $(".gameA").empty();
                $("#final").show();

            var a = $("<div fScreen ansCr>");
            a.text("You got "+ answC +"/10 Correct!");

            var b = $("<div fScreen ansInc>");
            b.text("You got "+ incorrC +"/10 Incorrect!");

            var c= $("<div fScreen qAns>");
            c.text("You answered "+ 10-unAns);


            
                $(".gameA").append(a);
                $(".gameA").append(b);
                $(".gameA").append(c);

                
             
            }

            else{

                return;
            }
        }

        else {
            incorrC++;
            unAns--;
            $("#correct").text("Correct:" + answC);
            $("#incorrect").text("Incorrect:" + incorrC);
            $("#notAnsw").text("Questions Left:" + unAns);
            
            if(unAns === 0){
                stopT();
                $("#trivia").css({'display':'none'});
                $(".scoreB").css({'display':'none'});
                $(".gameA").empty();

            var a = $("<h3 fScreen ansCr>");
            a.text("You got "+ answC +"/10 Correct!");
            a.css({'background-color': '#996666' });

            var b = $("<h3 fScreen ansInc>");
            b.text("You got "+ incorrC +"/10 Incorrect!");
            b.css({'background-color': '#996666' });

            
            var c= $("<h3 fScreen qAns>");
            c.text("You did not answered "+ unAns);
            c.css({'background-color': '#996666' });

            
                $(".gameA").append(a);
                $(".gameA").append(b);
                $(".gameA").append(c);

                $("#final").show();
            }
                else{

                    return;
                }
             
        }

    });

}

$(document).ready(function () {

    $(".startB").click(function () {

        $("#loaded").css({'display':'none'});
        $("#trivia").show();

        run();
        game();

    }

    );

});






