import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function FeatureItem({ feature, index }) {
  const rootRef = useRef(null);
  const titleRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    const titleEl = titleRef.current;
    const cardEl = cardRef.current;
    if (!root || !titleEl || !cardEl) return;

    // Ensure initial states
    gsap.set(titleEl, { scale: 0.7, opacity: 0, transformOrigin: "50% 50%" });
    gsap.set(cardEl, { y: 20, opacity: 0 });

    // Title animation -> plays when the section first enters shallowly
    const titleTrigger = ScrollTrigger.create({
      trigger: root,
      // tune these start/end values to control when bg text animates in
      start: "top 85%",    // when top of element is at 85% viewport
      end: "top 65%",      // small window — we only want a one-shot feel
      onEnter: () => {
        gsap.to(titleEl, {
          scale: 1,
          opacity: 0.28,
          duration: 0.32,
          ease: "power2.out",
          overwrite: true,
          delay: 0.04 + index * 0.06,
        });
      },
      onLeaveBack: () => {
        // when scrolling up out of the section, hide again
        gsap.to(titleEl, { scale: 0.7, opacity: 0, duration: 0.18, ease: "power1.out" });
      },
      // optionally handle onEnterBack as well to re-show when scrolling up into it
    });

    // Card animation -> triggers when the element is scrolled deeper into view
    const cardTrigger = ScrollTrigger.create({
      trigger: root,
      // deeper start so card only appears after user scrolls further
      start: "top 55%",   // tune this for when card should come
      end: "top 30%",
      onEnter: () => {
        gsap.to(cardEl, {
          y: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power2.out",
          overwrite: true,
          delay: 0.16 + index * 0.1,
        });
      },
      onLeaveBack: () => {
        // hide card when scrolling back up above its start
        gsap.to(cardEl, { y: 20, opacity: 0, duration: 0.3, ease: "power1.out" });
      },
    });

    // cleanup
    return () => {
      titleTrigger.kill();
      cardTrigger.kill();
    };
  }, [index]);

  return (
    <div ref={rootRef} className="relative flex justify-center items-center">
      {/* background big text */}
      <div
        ref={titleRef}
        className="absolute text-[220px] font-bold text-gray-300 select-none pointer-events-none"
        aria-hidden
        style={{ transformOrigin: "50% 50%" }}
      >
        {feature.titleBg}
      </div>

      {/* card */}
      <div
        ref={cardRef}
        className="relative bg-black text-white px-6 py-6 rounded-2xl max-w-[280px] z-10 text-center space-y-4"
        // keep accessible: don't use aria-hidden for the card
      >
        <div className="p-3 rounded-md mb-4 flex justify-center items-center">
          <img src={feature.img} alt={`${feature.titleBg} Illustration`} className="h-14 w-14" />
        </div>
        <h6 className="font-bold">{feature.heading}</h6>
        <p className="text-gray-300 mt-2">{feature.description}</p>
      </div>
    </div>
  );
}

export default FeatureItem;
