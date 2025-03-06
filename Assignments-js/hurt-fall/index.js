function createheart(){

  let x= document.createElement('div');
  x.classList.add('heart');
  x.innerText="♥";
  x.style.left= Math.random()*100+'vw'
  x.style.animationDuration = Math.random()*2+3 +'s';
  document.body.appendChild(x);
   

setTimeout(() => {
  x.remove();
}, 5000);

}
setInterval(createheart,300);