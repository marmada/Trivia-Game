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
    q1: "#?",
    options: ["1", "2", "3", "4"],
    correctAnswer: "4",
    image: "#"
}, {
    q1: "#?",
    options: ["1", "2", "3", "4"],
    correctAnswer: "1",
    image: "#"
}, {
    q1: "#?",
    options: ["1", "2", "3", "4"],
    correctAnswer: "2",
    image: "#"
}, {
    q1: "#?",
    options: ["1", "2", "3", "4"],
    correctAnswer: "3",
    image: "#"
}, {
    q1: "#?",
    options: ["1", "2", "3", "4"],
    correctAnswer: "4",
    image: "#"
},];

var time=300

function run() {
    clearInterval(clock);
    clock = setInterval(decrement, 1000);
  }

function decrement() {
    //  Decrease number by one.
    time--;
    //  Show the number in the #show-number tag.
    $("#show-number").html("<h2>" + time + "</h2>");

