gsap.to("#nav", {
    backgroundColor: "#000",
    duration: 1,
    height: "100px",
    scrollTrigger:{
        trigger: "#nav",
        scroller: "body",
        start: "top -20%",
        end: "top -20%",
        scrub: 2
    }
})