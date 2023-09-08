function foto(slide){
console.log("kaas")
if (slide == 1){
    document.getElementById("Slide3").style.display = "none"
    document.getElementById("Slide2").style.display = "none"
    document.getElementById("Slide1").style.display = "block"
}
else if (slide == 2){
    document.getElementById("Slide3").style.display = "none"
    document.getElementById("Slide2").style.display = "block"
    document.getElementById("Slide1").style.display = "none"
}
else if (slide == 3){
    document.getElementById("Slide3").style.display = "block"
    document.getElementById("Slide2").style.display = "none"
    document.getElementById("Slide1").style.display = "none"
}
}