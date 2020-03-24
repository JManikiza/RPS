for (i = 0; i <= 4; i++) {
  game()

  function game() {
    var playerAnswer = prompt("Rock, Paper or Scissors?");

    var playerCorrection1 = playerAnswer.charAt(0).toUpperCase();
    var playerCorrection2 = playerAnswer.slice(1, playerAnswer.length).toLowerCase();

    var playerSelection = playerCorrection1 + playerCorrection2;


    var computerSelection = Math.floor(100 * Math.random());

    if (computerSelection <= 33) {
      computerSelection = "Rock";
    } else if (computerSelection <= 66) {
      computerSelection = "Paper";
    } else {
      computerSelection = "Scissors";
    }




    if (playerSelection == "Rock" && computerSelection == "Rock" ||
      playerSelection == "Paper" && computerSelection == "Paper" ||
      playerSelection == "Scissors" && computerSelection == "Scissors") {
      console.log("You chose " + playerSelection + " so did the computer!
        It was a draw!")
      }
      else if (playerSelection == "Rock" && computerSelection == "Scissors" ||
        playerSelection == "Paper" && computerSelection == "Rock" ||
        playerSelection == "Scissors" && computerSelection == "Paper") {
        console.log("You chose " + playerSelection + " and the computer picked " +
          computerSelection + ". YOU WIN! :)");
      } else if (playerSelection == "Paper" && computerSelection == "Scissors" ||
        playerSelection == "Rock" && computerSelection == "Paper" ||
        playerSelection == "Scissors" && computerSelection == "Rock") {
        console.log("You chose " + playerSelection + " and the computer picked " +
          computerSelection + ". YOU LOST :(")
      } else {
        console.log("You chose " + playerSelection + " and the computer picked " +
          computerSelection + ". Nobody won!")
      }
    }
  }
