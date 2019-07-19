
var pname = document.querySelector("#fname");
var counterElem = document.querySelector(".counter");
var greetLanguage = document.querySelector(".language");
var greetButton = document.querySelector(".enterBtn");
var resetButton = document.querySelector(".resettingButton");
var message = document.querySelector(".msg");
var peopleGreetedElem = document.querySelector(".peopleGreeted")



if (localStorage['fname'] !== undefined){
    var nameStored = JSON.parse(localStorage['fname']); 
}
else {
    nameStored = {};
}

 var greetings = FactoryGreetings(nameStored); 

function displayGreetBtn(){

    var name =  pname.value;
    var lang = document.querySelector("input[name='myLang']:checked");

    if(lang){
    var language = lang.value;
    } 
    
    message.innerHTML = greetings.greetNameEntered(name , language)
    counts();

     localStorage['fname'] = JSON.stringify(greetings.getName())
    
}

function resetBtn(){
    window.location.reload();
    localStorage.clear();
    message.innerHTML = "";
    counterElem.innerHTML = 0;
}

function counts(){
    counterElem.innerHTML = greetings.countDisplay();
}



greetButton.addEventListener('click', displayGreetBtn)
resetButton.addEventListener('click', resetBtn)