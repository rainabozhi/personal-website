const navSlide = () => {
    const burger = document.querySelector(".burger")
    const nav = document.querySelector(".nav-links")
    const navLinks = document.querySelectorAll(".nav-links li")
    const main = document.querySelector("main")

    burger.addEventListener('click', () => {
        //toggle nav
        nav.classList.toggle('nav-active')
            //animate links
        navLinks.forEach((link, index) => {
        if(link.style.animation) {
            link.style.animation= ""
               } else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5 }s`;
        }
    })
    //burger animation
burger.classList.toggle('toggle')
    })

    main.addEventListener("click", () => {
        nav.classList.toggle('nav-active')
        burger.classList.remove('toggle')

        navLinks.forEach((link, index) => {
            if(link.style.animation) {
                link.style.animation= ""
                   } else{
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5 }s`;
            }
        })
    })
   
}



const navHide = () => {
    const nav = document.querySelector(".nav")
    let lastScrollTop = 2; 

   window.addEventListener('scroll', () => {
       let scrollTop = window.pageYOffset || document.documentElement.scrollTop

       if(scrollTop  > lastScrollTop){
        nav.style.top ="-100px"
       } else{
           nav.style.top ="0"
       }
       lastScrollTop = scrollTop 
    }) 
    
} 


navSlide()
navHide()

