let gameResult = document.getElementById("resultEl");
let userInput = document.getElementById("inputEl");
let randomNumber = Math.ceil(Math.random()*100);

function checkResult(){
    let guessedNumer = parseInt(userInput.value);
    if (guessedNumer>randomNumber){
        gameResult.textContent = "Too High Try Again";
        gameResult.style.backgroundColor= "#1e217c";
        
    }
    else if (guessedNumer<randomNumber){
        gameResult.textContent = "Too Low Try Again";
        gameResult.style.backgroundColor= "#1e217c";

    }
    else if (guessedNumer===randomNumber){
        gameResult.textContent = "Congratulations You got it right1";
        gameResult.style.backgroundColor= green;

    }
    else{
        gameResult.textContent = "Please provide a valid input.";
        gameResult.style.backgroundColor = "#1e217c";
    }


}