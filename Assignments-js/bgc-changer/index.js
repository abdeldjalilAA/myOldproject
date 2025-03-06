const btn = document.getElementById('btn');
btn.addEventListener('click',()=>{
  checkbg();
});
function checkbg(){
  document.body.style.backgroundColor=`hsl(${Math.floor(Math.random()*360)}, 100%, 50%)`
}