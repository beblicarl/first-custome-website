const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu');


burger.addEventListener('click', () => {
  if (menu.classList.contains('hidden')){
    menu.classList.remove('hidden');
  }else{
    menu.classList.add('hidden');
  }
  
})



window.addEventListener('DOMContentLoaded', () =>{
  const modalBg = document.querySelector('#modal-bg')
  const subscribeBtn = document.querySelector('#subscribe-button')
  const closeBtn = document.querySelector('#close-modal')

  const toggleModal = () => {
      modalBg.classList.toggle('hidden')
      modalBg.classList.toggle('inline-flex')
  }

  subscribeBtn.addEventListener('click', toggleModal)

  closeBtn.addEventListener('click', toggleModal)
})

function myFunction() {
  var elmnt = document.getElementById("home1");
  elmnt.scrollIntoView({behavior: "smooth"});
}