// console.log("Hii ")
// var username=prompt("Type username")
// var message="Its working " + username;
// alert(message)

var translatebtn = document.querySelector("#translator");
var userInput = document.querySelector("#usertext");
var output = document.querySelector("#output");
var serverurl = "https://api.funtranslations.com/translate/minion.json"

function translatorurl(text){
    return serverurl + "?" + "text=" + text
};
function errorHandler(error){
    console.log("Error!", error);
    alert("Try again later")
}

function clickHandler(){
    // output.innerText="bananannananana "+ userInput.value;
    var inputtext = userInput.value;
    fetch(translatorurl(inputtext))
        .then(response => response.json())
        .then(json => {
            var translatedtext = json.contents.translated;
            output.innerText= translatedtext;
        })
    
    .catch(errorHandler)
};


translatebtn.addEventListener("click", clickHandler)



