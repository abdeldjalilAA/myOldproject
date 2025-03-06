const cont = document.querySelector('.container');
const dert = document.querySelector('img');

cont.addEventListener('mousemove',(e)=>{

  const x= e.clientX - e.target.offsetLeft;
  const y= e.clientY - e.target.offsetTop;
  // console.log(x,y)
  dert.style.transformOrigin=`${x}px ${y}px`;
  dert.style.transform='scale(2)'

})
cont.addEventListener('mouseleave',()=>{
  cont.style.transformOrigin='center center';
  dert.style.transform='scale(1)';
})