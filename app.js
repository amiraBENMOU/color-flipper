const color=["red","green","blue"];
const btn=document.getElementById("btn");
const colorName=document.querySelector(".color");


btn.addEventListener('click',function(){
       //get random number between 0-2
        let randomNumber=getRandomNumber();
        document.body.style.backgroundColor=color[randomNumber];
        colorName.textContent=color[randomNumber];

})


function getRandomNumber() {
    return Math.floor(Math.random() * 3); // Returns a random number between 0 and 2
  }