const gsapButton = document.querySelector('[data="hamburger-menu-gsap"]');

if (gsapButton && window.gsap) {
  const bar1 = gsapButton.querySelector("b:nth-child(1)");
  const bar2 = gsapButton.querySelector("b:nth-child(2)");
  const bar3 = gsapButton.querySelector("b:nth-child(3)");

  gsap.set([bar1, bar2, bar3, gsapButton], { transformOrigin: "50% 50%" });

  const tl = gsap.timeline({ paused: true });
  tl.to(bar1, { top: "50%", duration: 0.45, ease: "sine.inOut" }, 0);
  tl.to(bar3, { top: "50%", duration: 0.45, ease: "sine.inOut" }, 0);
  tl.to(bar3, { rotate: 90, duration: 1.5, ease: "elastic.out(1, 0.35)" }, 0.3);
  tl.to(gsapButton, { rotate: 135, duration: 1.5, ease: "elastic.out(1, 0.35)" }, 0.3);

  gsapButton.addEventListener("click", () => {
    const isActive = gsapButton.classList.toggle("active");
    gsapButton.setAttribute("aria-label", isActive ? "Close menu" : "Open menu");
    if (isActive) {
      tl.play(0);
    } else {
      tl.reverse();
    }
  });
}

