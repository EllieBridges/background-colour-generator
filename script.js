var css = document.querySelector("h3");
var input1Colour = document.querySelector(".colour1");
var input2Colour = document.querySelector(".colour2");
var body = document.getElementById("gradient");
var h3 = document.getElementsByTagName("h3");

console.log(input1Colour.value)

function changeColour() {
    body.style.background = "linear-gradient(to right, " + input1Colour.value + ", " + input2Colour.value + ")";
    css.textContent = body.style.background + ";";
};



input1Colour.addEventListener("input", changeColour);


input2Colour.addEventListener("input", changeColour);