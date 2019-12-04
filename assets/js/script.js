/** Nav Bar Scrolling.*/
window.addEventListener('scroll', function () {
        var navBar = document.getElementById('navbar');
        if (document.documentElement.scrollTop || 
        	document.body.scrollTop > window.innerHeight) {
                navBar.classList.add('nav-colored');
                navBar.classList.remove('nav-transparent');
            } else {
                navBar.classList.add('nav-transparent');
                navBar.classList.remove('nav-colored');
            }
    });

var myVar = setInterval(setWord, 500);
 
function setWord() {
  var wordOne = document.getElementById('word1');
  var wordTwo = document.getElementById('word2');
  var wordThree = document.getElementById('word3');
  var wordFour = document.getElementById('word4');
  var wordFive = document.getElementById('word5');

  if(wordOne.style.display == "block"){
        wordOne.style.display = "none";
        wordTwo.style.display = "block";
        wordThree.style.display = "none";
        wordFour.style.display = "none";
        wordFive.style.display = "none";
      } else if (wordTwo.style.display == "block"){
        wordOne.style.display = "none";
        wordTwo.style.display = "none";
        wordThree.style.display = "block";
        wordFour.style.display = "none";
        wordFive.style.display = "none";
      }else if(wordThree.style.display == "block") {
      	wordOne.style.display = "none";
        wordTwo.style.display = "none";
        wordThree.style.display = "none";
        wordFour.style.display = "block";
        wordFive.style.display = "none";
      } else if(wordFour.style.display == "block") {
      	wordOne.style.display = "none";
        wordTwo.style.display = "none";
        wordThree.style.display = "none";
        wordFour.style.display = "none";
        wordFive.style.display = "block";
      } else {
      	wordOne.style.display = "block";
        wordTwo.style.display = "none";
        wordThree.style.display = "none";
        wordFour.style.display = "none";
        wordFive.style.display = "none";
      }
}

