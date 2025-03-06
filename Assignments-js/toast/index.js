const bnt = document.getElementById('btn');
const cnt = document.getElementById('container');

bnt.addEventListener('click', ()=>{
creatnotif();
   
});
function creatnotif(){
  const noti = document.createElement('div');
  noti.classList.add('toast');
  noti.innerText="this is Crazy !!!!";
cnt.appendChild(noti);
  setTimeout(() => {
    noti.remove();
  }, 3000);
}