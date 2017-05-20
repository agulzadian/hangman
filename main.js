// ------- Game word ---------
var inputWord = "spandex".toUpperCase();
var word = Array.from(inputWord);
var lettersList = document.querySelector("#letters");
var letters = document.querySelector("#letters").getElementsByTagName("li");
var correctLetterCount = 0;
var guess;
var counter = 0;

// create list of asterix's
for (i=0; i < word.length; i++){
  lettersList.innerHTML += "<li>*</li>";
}

// ------- Qwerty -----------
var qwertyLetters = Array.from("qwertyuiopasdfghjklzxcvbnm".toUpperCase());
var qwertyList = document.querySelector("#qwerty");
var qwerty = document.querySelector("#qwerty").getElementsByTagName("li");

for (i=0; i < qwertyLetters.length; i++){
  qwertyList.innerHTML += "<li>" + qwertyLetters[i] +  "</li>";
}

//--------------------- CHECKER ----------------------- //
qwertyList.addEventListener("click", guessChecker);

function guessChecker(e){
  if(e.target.nodeName == "LI"){
    guess = e.target.innerHTML;

    // CORRECT MECHANISM
    for(i = 0; i < word.length; i++){
      if (word[i] === guess ) {
        letters[i].innerHTML =  word[i];
        e.target.classList.add("correct");
        correctLetterCount ++;
      }
    }

    // WRONG MECHANISM
    if(word.indexOf(guess) < 0) {
      e.target.classList.add("wrong");
      counter ++;
      console.log("wong guesses: " + counter);
    }

    // WIN MECHANISM
    if(correctLetterCount == word.length) {
      console.log("WINNER!");
    }
    // LOSE MECHANISM
    if (counter >= 10) {
      console.log("You Lose!");
    }
  }
}
