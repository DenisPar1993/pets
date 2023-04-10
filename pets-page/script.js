const burgerBtn=document.querySelector('.burger');
const navWrap=document.querySelector('.nav-wrap');
const body = document.querySelector('body')
const links= document.querySelectorAll('.nav-links')
console.log(links)


links.forEach(item=>{
   return item.addEventListener('click',(e)=>{
      e.preventDefault()
      navWrap.classList.add('nav-wrap');
    navWrap.classList.remove('nav-wrap__active');
    burgerBtn.classList.remove('burger-active')
    body.style.overflowY=''
      location.href=e.target.getAttribute('href')
   })
})


burgerBtn.addEventListener('click',()=>{
   if(navWrap.classList.contains('nav-wrap')){
    console.log(navWrap)
      navWrap.classList.add('nav-wrap__active');
      navWrap.classList.remove('nav-wrap');
      burgerBtn.classList.add('burger-active')
      body.style.overflowY='hidden'
      console.log(body)
   }else{
    navWrap.classList.add('nav-wrap');
    navWrap.classList.remove('nav-wrap__active');
    burgerBtn.classList.remove('burger-active')
    body.style.overflowY=''
   }
    

})