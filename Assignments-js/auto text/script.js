const text = "Hi, I am ABDELOUAHED ABDELDJALIL I'm Appreciate to Introduce myself to you ♥♥";

let index =0;
function write(){

  document.body.innerText = text.slice(0,index);
  index++;
  if (index > text.length - 1){
    index = 0;
  }
 
}
setInterval(write, 100);