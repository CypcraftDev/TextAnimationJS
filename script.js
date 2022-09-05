const animatedTexts = document.querySelectorAll('.animated-text');
var codeVar = "ya3rmp5hxyp101";

function siteView(){
  localStorage.setItem("view", parseInt(localStorage.getItem("view")) + 1)
  console.log(localStorage.getItem("view"));
}
function codeReset(){
  var code = prompt("Give your code ! ")
  var txt = "";
  if(code == null || code === " "){
     txt = "No code provided";
     
  }else if(code === codeVar){
      localStorage.setItem("view", parseInt(0));
      console.log(localStorage.getItem("view"));
  }else{
      txt = "Code invalid";
  }
  alert(txt);
  
  
}

function animateText(animatedText) {
  const text = animatedText.textContent;
  console.log(text);
  animatedText.innerHTML = '';
  for (let i = 0; i < text.length; i++) {
    if (text[i] == ' ') {
      animatedText.innerHTML += ' ';
    }
    animatedText.innerHTML += `<span class="letter">${text[i]}</span>`;
  }
}

animatedTexts.forEach(animateText);
const collection = document.getElementsByClassName("letter");

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function AnimTitle(time) {
    for (let i = 0; i < collection.length; i++) {
        await sleep(time);
        collection[i].style.color = "blue";
        collection[i].style.textDecoration="underline blue";
    }
    for (let i = collection.length-1; i >= 0; i--) {
        await sleep(time);
        collection[i].style.color = "red";
        collection[i].style.textDecoration="underline red";
    }
    AnimTitle(250);
}

AnimTitle(250);