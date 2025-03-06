const topen = document.getElementById('open');
const tclose = document.getElementById('close');
const tcont = document.querySelector('.pop-container')

topen.addEventListener('click',()=>{
tcont.classList.add('active');
});
tclose.addEventListener('click',()=>{
  tcont.classList.remove('active');
})