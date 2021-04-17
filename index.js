
const chalk = require('chalk');

var readlineSync = require('readline-sync');

var data=[{ques:"Where Do I Live?", ans:"Jammu"},
          {ques:"Am I a Student?", ans:"Yes"},
          {ques:"Whats My Favorite Food?",ans:"Pizza"},
          {ques:"Whats my Favorite Colour?", ans:"Black"},
          {ques:"Which Season I Like the Most?", ans:"Winter"}
          ]
          
var score=0;
var highScore = [{name: "Sameep :",score: 5},
                {name: "Sahil :",score: 4}
                ]

// Welcoming the user
function Welcome()
{
    var userName= readlineSync.question(chalk.yellowBright("What's your good name??"));
console.log();
console.log(chalk.bgCyan('WELCOME '+userName+ ' to HOW WELL YOU KNOW ME Quiz!!!!'));
console.log('------------------------------------------------------');
}

// function to check the answers is right..
function check(ques,ans)
{
  var userAns=readlineSync.question(ques);
  if( userAns.toUpperCase() == ans.toUpperCase())
  {
    console.log(chalk.green.bold.italic("Your are Right"));
    score=score+1;
  }
  else
  {
    console.log(chalk.red.bold.italic("Your Wrong"));
   
  }
  console.log("Current score: ", score);
  console.log("****************************************************");

}
// for loop to access array of objects
function play(){
    for (var i=0;i<data.length;i++)
    {
      var currentQue=data[i];
      check(currentQue.ques,currentQue.ans);
      console.log();
    }
    }
    
    //to print the score of all Users
    function scoreboard() 
    {
      console.log(chalk.red ('Thanks for PLAYING. Your Total Score is: ', score));
    
      console.log(chalk.yellow.bold(("Check Out Highest Scores of All Users")));
    
      for (var i = 0; i < highScore.length; i++) 
      {
        var max= highScore[i];
        console.log(chalk.blue.bold(max.name,max.score));
      }
    
    }
    Welcome();
    play();
    scoreboard();