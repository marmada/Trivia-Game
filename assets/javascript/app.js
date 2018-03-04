var triviaQ = [{
    qu: "#?",
    options: ["1", "2", "3", "4"],
    correctAnswer: "2",
    image: "#"
}, {
    qu: "#?",
    options: ["1", "2", "3", "4"],
    correctAnswer: "3",
    image: "#"
}, {
    qu: "#?",
    options: ["1", "2", "3", "4"],
    correctAnswer: "4",
    image: "#"
}, {
    qu: "#?",
    options: ["1", "2", "3", "4"],
    correctAnswer: "1",
    image: "#"
}, {
    qu: "#?",
    options: ["1", "2", "3", "4"],
    correctAnswer: "2",
    image: "#"
}, {
    qu: "#?",
    options: ["1", "2", "3", "4"],
    correctAnswer: "3",
    image: "#"
}, {
    qu: "#?",
    options: ["1", "2", "3", "4"],
    correctAnswer: "4",
    image: "#"
},];



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

// on start bring question 1 hide start button

var CurrentQ = triviaQ[0];
var answC = 0
var incorrC = 0

function StartGame () {

    $(".startB").hide()
    $(".question")html()
}



