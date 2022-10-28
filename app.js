// console.log("Hii ")
// var username=prompt("Type username")
// var message="Its working " + username;
// alert(message)

var translatebtn = document.querySelector("#translator");
var userInput = document.querySelector("#usertext");

translatebtn.addEventListener("click", clickHandler)

function clickHandler(){
    console.log("Clicked");
    console.log("Input: ", userInput.value);
};


