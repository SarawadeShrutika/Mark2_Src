var readline = require('readline-sync');
var score = 0;

var Questions = [{
  questions: "Which School I have been to?",
  answer: "St Jude High School",
  options: [
    "Shivaji Vidyalay",
    "St Joseph",
    "St Jude High School",
    "Wisdom School"]

}, {
  questions: "Which is my favourite vegetable?",
  answer: "Bhendi",
  options: [
    "Gavar",
    "Bhendi",
    "Beans",
    "Brinjal"]
}, {
  questions: "Where Do I work?",
  answer: "Pieriandx",
  options: [
    "Wipro",
    "Yardi",
    "Capgemini",
    "Pieriandx"]
}, {
  questions: "Which City Do I live?",
  answer: "Pune",
  options: [
    "Chennai",
    "Bangalore",
    "Pune",
    "Mumbai"]
}, {
  questions: "Which is my favourite Color?",
  answer: "Blue",
  options: [
    "Black",
    "Blue",
    "Pink",
    "Red"]
}];


function welcome() {
  console.log("****Hello!!! welcome to quick quizzz APP****");
  var username = readline.question("Please Can you enter your name? ");
  console.log("WELCOME " + username.toUpperCase() + "!!!! LETS CHECK HOW MUCH YOU KNOW ME!!!");
  Start();
}

function play() {
  for (var i = 0; i < Questions.length; i++) {
    var quest = Questions[i];
    game(quest.questions, quest.answer, quest.options);
  }

}
function Start() {
  var start = readline.question("Please Type Start to start the game!!!");
  if (start == "Start") {
    play();
  }
}
function game(questions, answer, options) {
  console.log(questions);
  for (var i = 0; i < options.length; i++) {
    var option = options[i];
    console.log(option);
  }
  var user_answer = readline.question("Please enter the answer from the above options");
  if (user_answer == answer) {
    score = score + 1;
  }
}
function finalscore(score) {
  if (score == 5) {
    console.log("You Scored the Highest " + score);
    console.log("BRAVO!!!! You WON");

  } else {
    console.log("YOur Score is" + score + "!!!");
  }
}
welcome();

finalscore(score);