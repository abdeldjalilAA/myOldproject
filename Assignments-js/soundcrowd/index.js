const arr=['tada','boo','panting','cheer','woah'];

arr.forEach((sound)=>{
 
  const x= document.createElement('button');
   x.classList.add('btn');
   x.innerText=sound;
   x.addEventListener('click',()=>{ 
    pauseS();
    document.getElementById(sound).play();
  })
  
   document.body.appendChild(x);

})
function pauseS(){
  arr.forEach((sound)=>{
    const s = document.getElementById(sound);
    s.pause();
    s.currentTime=0;
  })
}