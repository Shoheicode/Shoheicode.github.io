let slideIndex = 0;

function textSlide(){
    let i;
    let texts = document.getElementsByClassName("programsC");
    for(i = 0; i < texts.length;i++){
        texts[i].style.display="none";
    }
    slideIndex++;
    if (slideIndex >= texts.length) {slideIndex = 0;}  
    
    texts[slideIndex].style.display = "block";
    console.log("hihihih");

    setTimeout(textSlide, 2000);
}

textSlide();