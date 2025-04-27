gsap.registerPlugin(ScrollSmoother, ScrollTrigger)

const sensitivity = 0.4

document.addEventListener("mousemove", (e) => {
    let deltaX = (e.clientX - window.innerWidth / 2 ) * sensitivity
    let deltaY = (e.clientY - window.innerHeight / 2) * sensitivity

    gsap.to(".layers-container", {

        diration: 1.5,
        x: deltaX,
        y: deltaY,
        rotationX: y / 10,
        rotationY: X / 10,
        ease: "power2.out"

    })

    gsap.to(".head-text", {

        diration: 1.5,
        x: -deltaX / 2,
        y: -deltaY / 2,
      
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

