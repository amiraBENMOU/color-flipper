const hex=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

// hex color consist of 6 elements from hex array
const btn=document.getElementById("btn");
const colorName=document.querySelector(".color");

btn.addEventListener('click',function(){
    let hexColor="#";
    for(let i=0;i<6;i++){
        hexColor+=hex[getRandomNumber()];
    }
    document.body.style.backgroundColor=hexColor;
    colorName.textContent=hexColor;
})



function getRandomNumber() {
    return Math.floor(Math.random() * 16); // Returns a random number between 0 and 15
  }