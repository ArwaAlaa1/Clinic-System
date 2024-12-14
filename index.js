
var paragraphs = document.querySelectorAll('.paragraph');
var currentIndex = 0;


// paragraphs[currentIndex].style.opacity = 1;
var currenetPraghraph=paragraphs[currentIndex]


 currenetPraghraph.style.opacity ="1";
setInterval(function () {


    paragraphs[currentIndex].style.opacity = "0"


    currentIndex++;
    if (currentIndex >= paragraphs.length) {
        currentIndex = 0;
    }

    paragraphs[currentIndex].style.opacity = "1";

}, 3000);



