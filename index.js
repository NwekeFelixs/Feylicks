 //Navbar
 const menu = document.querySelector('.menu')
 const navbar = document.querySelector('.navbar')

 menu.addEventListener('click', ()=>{
     navbar.classList.toggle('change')
     menu.classList.toggle('change')
 })
 //End of Navbar
 //section 2 video
 const video = document.querySelector('.video')
 const btn = document.querySelector('.buttons i')
 const bar = document.querySelector('.video-bar')

 const playpause = () =>{
     if(video.paused){
        video.play()
        btn.className = 'far fa-pause-circle'
        video.style.opacity = '.7'
     }else{
        video.pause()
        btn.className = 'far fa-play-circle'
        video.style.opacity = '.3'
     }
 }
 btn.addEventListener('click', ()=>{
     playpause()
 })

 video.addEventListener('timeupdate', ()=>{
     const barwidth = video.currentTime/video.duration
     bar.style.width = `${barwidth * 100}%`
     if(video.ended){
         btn.className = 'far fa-play-circle'
         video.style.opacity = '.3'
     }
 })
 // End of section 2 video

 // Section 3 pricing cards
 var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 70,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows : true,
    },
  });
 // End of Section 3 pricing cards