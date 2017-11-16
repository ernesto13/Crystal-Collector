// start of game generate a randomNum between 19-120
// generate random hidden number for crystal between 1-12
// click on crystal until total score is === to randomNum
// clicking crystal adds more points to total score
// match total score to randomNum
// if total score is === to randomNumber then wins goes up by 1
// else if total score goes over, losses goes up by 1
// then randomNumber resets to different randomNumber and total score gets set to 0.
// crystals will have a different random number generated

$(document).ready(function() {
    //set for user total score and user wins/losses
    var winSound = $("#winner")[0];
    var loseSound = $("#loser")[0];
    var wins = 0;
    var losses = 0;
    var userTotal = 0;

    // * The random number shown at the start of the game should be between 19 - 120.
    var randomNumber = Math.floor(Math.random() * 101 + 19);
    // generate random number when crystal is clicked 1-12

    var amethystNumber = Math.floor(Math.random() * 12 + 1);
    var crystalBallNumber = Math.floor(Math.random() * 12 + 1);
    var zirconNumber = Math.floor(Math.random() * 12 + 1);
    var gemStoneNumber = Math.floor(Math.random() * 12 + 1);
    // start of game generate a randomNum between 19-120
    $("#computerScore").html(randomNumber);

    function determineWinner() {
        if (userTotal === randomNumber) {
            wins++;

            winSound.play();

            $("#userWins").html("Wins: " + wins);
            reset();
        } else if (userTotal > randomNumber) {
            losses++;

            loseSound.play();

            $("#userLosses").html("Losses: " + losses);
            reset();
        }
    }

    function reset() {
        randomNumber = Math.floor(Math.random() * 101 + 19);
        $("#computerScore").html(randomNumber);

        amethystNumber = Math.floor(Math.random() * 12 + 1);
        crystalBallNumber = Math.floor(Math.random() * 12 + 1);
        zirconNumber = Math.floor(Math.random() * 12 + 1);
        gemStoneNumber = Math.floor(Math.random() * 12 + 1);
        userTotal = 0;

        $("#userPoints").text(userTotal);
    }

    //   ====================button clicks======================
    $("#amethyst").on("click", function() {
        userTotal = userTotal + amethystNumber;
        $("#userPoints").html(userTotal); //sets equal point to userTotal html document
        determineWinner();




    }); //amethyst

    $("#crystalBall").on("click", function() {
        userTotal = userTotal + crystalBallNumber;
        $("#userPoints").html(userTotal); //sets equal point to userTotal html document
        determineWinner();

    }); //crystal

    $("#zircon").on("click", function() {
        userTotal = userTotal + zirconNumber;
        $("#userPoints").html(userTotal); //sets equal point to userTotal html document
        determineWinner();

    }); //zircon

    $("#gemstone").on("click", function() {
        userTotal = userTotal + gemStoneNumber;
        $("#userPoints").html(userTotal); //sets equal point to userTotal html document
        determineWinner();

    }); //gemstone
}); //ready function