# Rock_Paper_Sissors
My first Js project
also first game!

Step 1: Write the logic to get the computer choice

A function that randomly returns “rock”, “paper” or “scissors”.

Step 2: Write the logic to get the human choice

Step 3: Declare the players score variables

Step 4: Write the logic to play a single round

<!-- ------------------------------------------------------------------------------------------------- -->
<!-- #       human               computer            output          logic          hScore      cScore -->
<!-- ------------------------------------------------------------------------------------------------- -->
<!-- 1        rock                  rock              draw             0               0          0    -->
<!-- 2        paper                 rock              computer         1               1          0    -->
<!-- 3        sissors               rock              computer         1               0          1    -->
<!-- 4        rock                  paper             human            1               0          1    -->
<!-- 5        paper                 paper             draw             0               0          0    -->
<!-- 6        sissors               paper             human            1               1          0    -->
<!-- 7        rock                  sissors           human            1               1          0    -->
<!-- 8        paper                 sissors           computer         1               0          1    -->
<!-- 9        sissors               sissors           draw             0               0          0    -->


------------PSEUDOCODE--------------------------------------------
cont.1 : humanChoice == comouterChoice
                if      true, display console.log("Tie)
cont.2 : humanChoice == "ROCK" && computerChoice == "SISSORS"
                if      true, add +1 in humanScore
                else    add +1 in computerScore
cont.3 : humanChoice == "PAPER" && computerChoice == "ROCK"
                if      true, add +1 in humanScore
                else    add +1 in computerScore
cont.4 : humanChoice == "SISSORS" && computerChoice == "PAPER"
                if      true, add +1 in humanScore
                else    add +1 in computerScore
-------------------------------------------------------------------

Step 5: Write the logic to play the entire game

function playGame
            calls playRound 5 times
            
            use for loop.


----SAMPLE OUTPUT-------
Humam       = PAPER
Computer    = PAPER
The match is a tie.
Humam       = ROCK
Computer    = PAPER
Computer wins this Round
Humam       = SISSORS
Computer    = ROCK
Computer wins this Round
Humam       = ROCK
Computer    = ROCK
The match is a tie.
Humam       = ROCK
Computer    = SISSORS
You win this Round
Human Score         = 1
Computer Score      = 2
You lose!
----------------------------


Now, lets transform UI