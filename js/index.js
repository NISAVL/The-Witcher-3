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

document.addEventListener("DOMContentLoaded",initGallery)