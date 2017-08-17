$(document).ready(function() {
var number = 60;
var intervalId;
var question = ["Who was the shortest player ever to play in the NBA?", "Kareem Abdul-Jabbar played 20 seasons in which sport?", "What NFL team does Tom Brady play for?",
"What sport do you hit off of a tee", "Where is the Pro Bowl normally played every year?", "How many innings are in a Baseball game?", "What state is the Baseball Hall of Fame located in?"
];
var options = ["Tyrone Bogues", "Micheal Jordan", "Allen Iverson", "Jason Kidd", "Baseball", "Golf", "Basketball", "Football", "Cleveland Browns", "New England Patriots", "Miami Dolphins", "Oakland Raiders",
"Hockey", "Golf", "Football", "Tennis", "Detroit", "Houstan", "San Diego", "Hawaii", "5", "6", "7", "9", "Florida", "Ohio", "Massachusettes", "New York",];
$("#q0").html(question[0]);
$("#q1").html(question[1]);
$("#q2").html(question[2]);
$("#q3").html(question[3]);
$("#q4").html(question[4]);
$("#q5").html(question[5]);
$("#q6").html(question[6]);
$("#op1").html(options[0]);
$("#op2").html(options[1]);
$("#op3").html(options[2]);
$("#op4").html(options[3]);
$("#op5").html(options[4]);
$("#op6").html(options[5]);
$("#op7").html(options[6]);
$("#op8").html(options[7]);
$("#op9").html(options[8]);
$("#op10").html(options[9]);
$("#op11").html(options[10]);
$("#op12").html(options[11]);
$("#op13").html(options[12]);
$("#op14").html(options[13]);
$("#op15").html(options[14]);
$("#op16").html(options[15]);
$("#op17").html(options[16]);
$("#op18").html(options[17]);
$("#op19").html(options[18]);
$("#op20").html(options[19]);
$("#op21").html(options[20]);
$("#op22").html(options[21]);
$("#op23").html(options[22]);
$("#op24").html(options[23]);
$("#op25").html(options[24]);
$("#op26").html(options[25]);
$("#op27").html(options[26]);
$("#op28").html(options[27]);
	
	$("#stop").on("click", stop);
$("#resume").on("click", run);
function run() {
      intervalId = setInterval(decrement, 1000);
    }
 function decrement() {
      number--;
      $("#timer").html("<h2>" + number + "</h2>");
      if (number === 0) {
        stop();
       window.location.href = "result.html";
      }
    }
function stop() {
      clearInterval(intervalId);
    }
    run();


});
var answers = ["A","C","B","B","D","D","D"], 
    tot = answers.length;

function getCheckedValue( radioName ){
    var radios = document.getElementsByName( radioName ); 
    for(var y=0; y<radios.length; y++)
      if(radios[y].checked) return radios[y].value;
}

function getScore(){
  var score = 0;
  var incorrect = 0;
  for (var i=0; i<tot; i++)
    if(getCheckedValue("question"+i)===answers[i]) score += 1; 
  return score;

}

function returnScore(){

	$("#score").html("<h1>"+"YOU GOT "+getScore()+"/"+tot+" QUESTIONS CORRECT!"+"</h1>");
  
}



$("#button").on("click", function(){
   
	returnScore();
}

	


});

