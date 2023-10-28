
function locomotive() {
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".main"),
        smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy(".main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });
    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();

}
locomotive();
function sectionAnimation() {
    var tl = gsap.timeline();
    tl.from("nav", {
        y: -50,
        duration: 0.4,
        ease: Power3,
    })
    tl.from(".main .text-section h1", {
        y: 100,
        duration: 0.7,
        delay: 0.3,
        stagger: 0.3,
        opacity: 0,
        rotate: 10,
    })


}
sectionAnimation();
function purplePage() {
    var menu = document.querySelectorAll("nav a");
    var workPage = document.querySelector(".purple-page");

    menu.forEach(function (element) {
        document.querySelector(".menu-section").addEventListener("mouseenter", function () {

            workPage.style.display = "block";
            workPage.style.opacity = 1;
        })
        document.querySelector(".menu-section").addEventListener("mouseleave", function () {

            workPage.style.display = "none";
            workPage.style.opacity = 0;
        })
        element.addEventListener("mouseenter", function () {

            element.querySelector(".line-anim").style.display = "block";
            element.querySelector(".line-anim").style.opacity = 1;

        })
        element.addEventListener("mouseleave", function () {

            element.querySelector(".line-anim").style.display = "none";
            element.querySelector(".line-anim").style.opacity = 0;

        })
    })
}
purplePage();
function page1Animation() {

    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".page-1 .text-section",
            scroller: ".main",
            scrub: 2,
            start: "bottom 60%",
            end: "top -40%"
        }
    })

    tl.to(".page-1 .text-section .upper-text", {
        x: -200,

    }, "page-1")
    tl.to(".page-1 .text-section .lower-text", {
        x: 200,
    }, "page-1")
    tl.to(".page-1 video", {
        width: "90%",

    }, "page-1")
}
page1Animation();
function page2Animation() {
    var tl = gsap.timeline();
    tl.to(".main", {
        color: "black",
        backgroundColor: "white",
        ease: Power1,
        scrollTrigger: {
            trigger: ".page-2",
            scroller: ".main",
            start: "top 40%",

            end: "top 30%",
            scrub: 1,
        }
    })
}
page2Animation();
function page3Animation() {
    var box = document.querySelectorAll(".page-3 .box");
    box.forEach(function (element) {
        element.addEventListener("mouseenter", function () {
            gsap.to(element.querySelector("img"), {
                filter: "blur(10px)",
                scale: "1.1",
            })
        })
        element.addEventListener("mouseleave", function () {
            gsap.to(element.querySelector("img "), {
                filter: "blur(0px)",
                scale: "1",
            })
        })
        element.addEventListener("mouseenter", function () {
            gsap.to(element.querySelector(" video"), {
                scale: "1.2",
                filter: "blur(10px)"
            })
        })
        element.addEventListener("mouseleave", function () {
            gsap.to(element.querySelector("video"), {
                scale: "1",
                filter: "blur(0px)"
            })
        })
    })
}
page3Animation();
function page4Anmation() {
    var tl = gsap.timeline();
    tl.to(".main", {
        color: "white",
        backgroundColor: "black",
        ease: Power1,
        scrollTrigger: {
            trigger: ".page-4",
            scroller: ".main",
            start: "top 40%",
            end: "top 30%",
            scrub: 1,
        }
    })
}
page4Anmation();

function page6Animation() {
    var box = document.querySelectorAll(".page-6 .box");
    box.forEach(function (element) {
        element.addEventListener("mousemove", function (dtls) {
            element.querySelector("img").style.opacity = 1;
            Ydiff = dtls.clientY - element.getBoundingClientRect().top;
            element.querySelector("img").style.transform = `translate(${dtls.clientX}px,${Ydiff}px)`;

        })
        element.addEventListener("mouseleave", function () {
            element.querySelector("img").style.opacity = 0;

        })
    })
}
page6Animation();

// variable of cursor 
var cursor = document.querySelector(".cursor");
// variable of cursor 
function cursorCircle() {
    window.addEventListener("mousemove", function (dtls) {
        cursor.style.opacity = 1;
        cursor.style.transform = `translate(${dtls.clientX}px,${dtls.clientY}px)`
    })
}
cursorCircle();
