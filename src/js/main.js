function up () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
    
}
document.getElementById('up').addEventListener('click', up)

window.onscroll = function(){
    const scroll = document.documentElement.scrollTop
    if (scroll > 500){
        document.getElementById('up').style.transform = 'scale(1)'
    }else if (scroll < 500){
        document.getElementById('up').style.transform = 'scale(0)'
    }
}




const observer = new IntersectionObserver (entries => {
    entries.forEach(entry => {
        const id = entry.target.getAttribute("id")
        const menuLink = document.querySelector(`.menu a[href="#${id}"]`)
        if (entry.isIntersecting) {
            menuLink.classList.add ('selected')
        }
        else{
            menuLink.classList.remove ('selected')
        }
        
        const menuLinks = document.querySelectorAll('.menu a[href^="#"]')

        menuLinks.forEach(menuLink => {

            const hash = menuLink.getAttribute("href")
            const target = document.querySelector(hash)
            if (target){
                observer.observe(target)
            }
        })
    })
})  


const men = document.querySelector(".hamburge")
const hambMenu = document.querySelector(".hamburger-menu")
const closeMenu = document.querySelector(".close-menu")

men.addEventListener("click",  () => {
    hambMenu.classList.remove("hidden")
    document.body.classList.add("overflow-y-hidden")

    closeMenu.classList.remove("hidden")
    men.classList.replace("sm:hidden","hidden")
})

closeMenu.addEventListener("click",  () => {
    hambMenu.classList.add("hidden")
    document.body.classList.remove("overflow-y-hidden")

    document.querySelector(".close-menu").classList.add("hidden")
    men.classList.replace("hidden","sm:hidden")
})


const listAll = document.querySelectorAll(".navList")

listAll.forEach( li=>{
    li.addEventListener("click", ()=>{
        document.body.classList.remove("overflow-y-hidden")
        hambMenu.classList.add("hidden")
        closeMenu.classList.add("hidden")
        men.classList.replace("hidden","sm:hidden")
    })
} )