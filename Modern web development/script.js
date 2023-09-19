// import LocomotiveScroll from "locomotive-scroll";

const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});
// console.log(LocomotiveScroll());
function Mousefolower() {
  window.addEventListener("mousemove", function (dets) {
    document.querySelector(
      "#minicircle"
    ).style.transform = `translate(${dets.clientX}px,${dets.clientY}px)`;
  });
  console.log(Mousefolower());
}
function firstPageAnim() {
  var tl = gsap.timeline();
  tl.from("#nav", {
    y: "-10",
    opacity: 0,
    duration: 1.5,
    ease: Expo.easeInOut,
  }).to(".boundingelm", {
    y: 0,
    duration: 2,
    ease: Expo.easeInOut,
    stagger: 0.2,
  });
  // console.log(firstPageAnim());
}

Mousefolower();
firstPageAnim();
