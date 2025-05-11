gsap.registerPlugin(ScrollSmoother, ScrollTrigger)

const sensitivity = 0.1

document.addEventListener("mousemove", (e) => {
    let deltaX = (e.clientX - window.innerWidth / 2 ) * sensitivity
    let deltaY = (e.clientY - window.innerHeight / 2) * sensitivity

    gsap.to(".layers-container", {

        duration: 1.5,
        x: -deltaX,
        y: -deltaY,
        rotationX: deltaY / 10,
        rotationY: deltaX / 10,
        ease: "power2.out"

    })

    gsap.to(".head-text", {
        duration: 1.5,
        x: deltaX / 2,
        y: deltaY / 2,
        ease: "power2.out"

    })
})

ScrollSmoother.create({
    wrapper: ".wrapper",
    content: ".wrapper_content",
    smooth: 1.5,
    effects:true

})

gsap.utils.toArray("section").forEach(section => {
    gsap.fromTo(
        section,
        { opacity: 0, y: 25},
        { opacity: 1, y: 0, scrollTrigger:{

            trigger:section,
            start:"top center+=100",
            end:"bottom center",
            toggleActions: "play none none reverse"
        }}
    )
})

function initGallery(){
    let gallery = document.querySelector(".gallery")
    let items = document.querySelectorAll(".gallery-item")

    gallery.style.setProperty("--total-items",items.length)
    console.log(items.length)

    gallery.addEventListener("click", (event) => {
        let clicked = event.target.closest(".gallery-item")
        if (!clicked || clicked.classList.contains("active")) return

        items.forEach((item) => {
            item.classList.remove("active")
        })
        clicked.classList.add("active")

    })
}

colors = {
    "primary": "rgb(255, 11, 11)",
    "secondary": "rgb(170, 181, 199)",
    "thirty": "rgb(34, 40, 51)",
    "primary_2": "rgb(122, 10, 10)"
}

document.addEventListener("DOMContentLoaded",initGallery)

const themeChanger = document.querySelector(".theme-change")
themeChanger.addEventListener("click", () => {
    let isLight = localStorage.getItem("theme") == "light"

    if (isLight){ 
        localStorage.setItem("theme","dark")
        themeChanger.innerHTML = '<i class = "fas fa-moon"></i>'
        document.documentElement.style.setProperty("--secondary","rgb(34, 40, 51)")
        document.documentElement.style.setProperty("--text","rgb(255, 255, 255)")

        document.documentElement.style.setProperty("--primary","rgb(146, 0, 0, 0.836)")
        document.documentElement.style.setProperty("--primary_2","rgb(206, 206, 206)")
        
      
    }
    else{ 
        localStorage.setItem("theme","light")
        themeChanger.innerHTML = '<i class = "fas fa-sun"></i>' 
        document.documentElement.style.setProperty("--secondary","rgb(170, 181, 199)")
        document.documentElement.style.setProperty("--text","rgb(10, 10, 10)")

        document.documentElement.style.setProperty("--primary","rgb(255, 11, 11)")
        document.documentElement.style.setProperty("--primary_2","rgb(122, 10, 10)")
    }
})