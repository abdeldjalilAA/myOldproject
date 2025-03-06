const toog = document.getElementById('toggle');
toog.addEventListener('change',(e)=>{
document.body.classList.toggle('dark',e.target.checked)

})