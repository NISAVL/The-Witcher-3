gsap.registerPlugin(ScrollSmoother, ScrollTrigger)

const sensitivity = 0.1

document.addEventListener("mousemove", (e) => {
    let deltaX = (e.clientX - window.innerWidth / 2) * sensitivity
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
    effects: true

})

gsap.utils.toArray("section").forEach(section => {
    gsap.fromTo(
        section,
        { opacity: 0, y: 25 },
        {
            opacity: 1, y: 0, scrollTrigger: {

                trigger: section,
                start: "top center+=100",
                end: "bottom center",
                toggleActions: "play none none reverse"
            }
        }
    )
})

function initGallery() {
    let gallery = document.querySelector(".gallery")
    let items = document.querySelectorAll(".gallery-item")

    gallery.style.setProperty("--total-items", items.length)
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

document.addEventListener("DOMContentLoaded", initGallery)

const themeChanger = document.querySelector(".theme-change")
themeChanger.addEventListener("click", () => {
    let isLight = localStorage.getItem("theme") == "light"

    if (isLight) {
        localStorage.setItem("theme", "dark")
        themeChanger.innerHTML = '<i class = "fas fa-moon"></i>'
        document.documentElement.style.setProperty("--secondary", "rgb(34, 40, 51)")
        document.documentElement.style.setProperty("--text", "rgb(255, 255, 255)")

        document.documentElement.style.setProperty("--primary", "rgb(146, 0, 0, 0.836)")
        document.documentElement.style.setProperty("--primary_2", "rgb(206, 206, 206)")


    }
    else {
        localStorage.setItem("theme", "light")
        themeChanger.innerHTML = '<i class = "fas fa-sun"></i>'
        document.documentElement.style.setProperty("--secondary", "rgb(170, 181, 199)")
        document.documentElement.style.setProperty("--text", "rgb(10, 10, 10)")

        document.documentElement.style.setProperty("--primary", "rgb(255, 11, 11)")
        document.documentElement.style.setProperty("--primary_2", "rgb(180, 10, 10)")
    }
})

function fix_zero(a){
    if (a<0) {return 0}
    return a
}

function initPlayer() {
    console.log(1)
    const btn = document.querySelector(".play-btn");
    const audio = document.getElementById('audioPlayer');
    audio.src = "./sounds/01. The Trail.mp3";

    const bar = document.querySelector(".progress_bar");

    const progress = document.querySelector(".progress");

    console.log(bar);

    btn.addEventListener("click", () => {
        if (audio.paused) {
            audio.play();
            btn.innerHTML = '<i class = "fas fa-pause"></i>';
        }
        else {
            audio.pause();
            btn.innerHTML = '<i class = "fas fa-play"></i>';
        }
    });

    

    bar.addEventListener("click", (event) => {
        var rect = bar.getBoundingClientRect();
        let x = event.clientX;
        


        let percents = ((x - rect.left)/rect.width)
        
        //progress.style.width=(percents*100).toString()+"%"
        
        audio.currentTime=percents*audio.duration
    
    });

    const time = document.querySelector(".time");
    audio.addEventListener("timeupdate", () => {
        let minutes = Math.floor(audio.currentTime / 60);
        let seconds = Math.floor(audio.currentTime % 60).toString().padStart(2, "0");
        let maxMinutes = Math.floor(audio.duration / 60);
        let maxSeconds = Math.floor(audio.duration % 60).toString().padStart(2, "0");
        time.innerHTML = `${minutes}:${seconds} / ${maxMinutes}:${maxSeconds}`;

    let time_as_seconds = minutes*60+seconds
    let max_time_as_seconds= maxMinutes*60+maxSeconds

   
    
    let time_as_percents = audio.currentTime/audio.duration*100
    //console.log(time_as_percents)

    progress.style.width=time_as_percents.toString()+"%"
    })



}

document.addEventListener("DOMContentLoaded", initPlayer)