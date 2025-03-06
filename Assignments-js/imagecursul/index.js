const imgs = document.querySelector('.image-container');
const imge = document.querySelectorAll('.image-container img');

let idx =0;

function nextig(){

  idx++;
  if(idx>imge.length-1){
    idx=0;
  }
  imgs.style.transform= `translateX(${-idx*500}px)`

}
setInterval(nextig,2000);
