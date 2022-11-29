//theme changer toggler
document.querySelector('#toggleBtn').addEventListener('click' , ()=>{
    document.body.classList.toggle('darkTheme')
})
//menu toggler
document.querySelector('#menu').addEventListener('click' , ()=>{
    document.querySelector('.menu').classList.toggle('showNavbar')
});

// animation on scroll
window.addEventListener('scroll', (event) => {
    console.log(window.scrollY)
   if(window.scrollY > 50){
    document.querySelector('.header').classList.add('headerScroll')
      if(window.scrollY > 380){
        document.querySelector('.getMeTop').style.display = 'block'
      }else{
        document.querySelector('.getMeTop').style.display = 'none'
      }

   }

   else{
        // document.querySelector('.getMeTop').style.display = 'none'
        document.querySelector('.header').classList.remove('headerScroll')
    }
});

