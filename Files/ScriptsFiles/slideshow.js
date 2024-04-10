//This script manages the slideshow for the programs for the home.html page and the index.html page

let slideIndex = 0;

//Function that tules the text/program slides

function textSlide(){
    let i;
    let texts = document.getElementsByClassName("programsC"); //Gets element by class name
    for(i = 0; i < texts.length;i++){
        texts[i].style.display="none"; //Makes all of them disappear
    }
    slideIndex++;
    if (slideIndex >= texts.length) {slideIndex = 0;}  //Checks if index is greater than length and if so, move back to the front
    
    texts[slideIndex].style.display = "block"; //Make is appear

    setTimeout(textSlide, 2000);
}

textSlide();