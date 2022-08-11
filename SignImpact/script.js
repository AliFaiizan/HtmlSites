const timeline=gsap.timeline({default:{duration:2,ease:"ease-in-out"}});

timeline
  .from("nav", { y: -100, opacity: 0 })
  .from("logo", { x: -100, opacity: 0 })
  .from(".nav-list li", { opacity: 0, y: -100, stagger: 0.1 });