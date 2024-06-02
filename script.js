const menu = document.getElementById('first')
const cancle = document.getElementById('sec')
const mob_nav = document.querySelector('.mob-nav');


menu.addEventListener('click', () =>{

   menu.style.display ="none"
   cancle.style.display ="block"
  mob_nav.style.display='block';
})

cancle.addEventListener( 'click', () =>{

    menu.style.display ="block"
//    menu.classList.add('slidShow')
   cancle.style.display ="none";
  mob_nav.style.display='none';

})

