const scroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,
});

// Smooth scroll to sections when clicking navigation links
setTimeout(() => {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");

      if (targetId && targetId !== "#") {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          scroll.scrollTo(targetElement);
        }
      }
    });
  });
}, 100);

// hero Section page animation
function firstPageAnimation() {
  var tl = gsap.timeline();

  // Navigatiob bar animation
  tl.from("header", {
    y: "15",
    opacity: 0,
    duration: 1.5,
    ease: Expo.easeInOut,
  })

    // flash text animation
    .to(".flash-txt", {
      y: 0,
      ease: Expo.ease,
      duration: 0.8,
      delay: -0.4,
      stagger: 0.1,
    });

  // hero section footer animation
  tl.from(".hero-footer", {
    y: 0,
    opacity: 0,
    duration: 1.5,
    delay: -0.6,
    ease: Expo.easeInOut,
  });
}

// cursor mouse follower
function cursorFollower() {
  window.addEventListener("mousemove", function (dets) {
    this.document.querySelector(
      ".cursor"
    ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
    // console.log(dets.clientX, dets.clientY);
  });
}

cursorFollower();
firstPageAnimation();



document.querySelectorAll(".elem").forEach(function (elem) {
  var rotate = 0;
  var diffrot = 0;

  elem.addEventListener("mouseleave", function (dets) {
    gsap.to(elem.querySelector("img"), {
      opacity: 0,
      ease: Power3,
      duration: 0.5,
    });
  });

  elem.addEventListener("mousemove", function (dets) {
    var diff = dets.clientY - elem.getBoundingClientRect().top;
    diffrot = dets.clientX - rotate;
    rotate = dets.clientX;
    gsap.to(elem.querySelector("img"), {
      opacity: 1,
      ease: Power3,
      top: diff,
      left: dets.clientX,
      rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
    });
  });
});


