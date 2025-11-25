"use client"
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const gsapAnimations = () => {
  useEffect(() => {
    const animationConfigs = [
      {
        selector: ".fade-up",
        from: { autoAlpha: 0, y: 40 },
        to: { autoAlpha: 1, y: 0 },
      },
      {
        selector: ".fade-down",
        from: { autoAlpha: 0, y: -40 },
        to: { autoAlpha: 1, y: 0 },
      },
      {
        selector: ".fade-left",
        from: { autoAlpha: 0, x: -40 },
        to: { autoAlpha: 1, x: 0 },
      },
      {
        selector: ".fade-right",
        from: { autoAlpha: 0, x: 40 },
        to: { autoAlpha: 1, x: 0 },
      },
      {
        selector: ".fade-scale",
        from: { autoAlpha: 0, scale: 0.8 },
        to: { autoAlpha: 1, scale: 1 },
      }
    ];

    animationConfigs.forEach(({ selector, from, to }) => {
      const elements = gsap.utils.toArray(selector);

      elements.forEach((el) => {
        gsap.fromTo(
          el,
          from,
          {
            ...to,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 95%",
              end: "bottom",
              toggleActions: "restart none none reverse",
            },
          }
        );
      });
    });

    const bounceElements = gsap.utils.toArray(".bounce-loop");
    bounceElements.forEach((el) => {
      gsap.to(el, {
        y: -30,
        duration: 0.8,
        ease: "power1.inOut",
        repeat: -1,      // infinite
        yoyo: true,      // bounce back and forth
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      gsap.globalTimeline.clear();
    };
  }, []);
};
