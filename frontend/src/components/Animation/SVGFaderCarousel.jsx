import React from 'react';
import Img1 from "../../../public/images/Heroslider1.png"
import Img2 from "../../../public/images/Heroslider2.png"
import Img3 from "../../../public/images/Heroslider3.png"
import Img4 from "../../../public/images/Heroslider4.png"

export default function SVGFaderCarousel({ images = [], width = 600, height = 500, loopDuration = 20 }) {
  const slides = images.length ? images : [
    { primary: Img1.src , secondary: 'https://aisera.com/wp-content/uploads/2025/10/cost-efficiencies.png' },
    { primary: Img2.src, secondary: 'https://aisera.com/wp-content/uploads/2025/10/84.png' },
    { primary: Img3.src, secondary: 'https://aisera.com/wp-content/uploads/2025/06/78-1.png' },
    { primary: Img4.src, secondary: 'https://aisera.com/wp-content/uploads/2025/06/55-1.png' },
  ];

  const perSlideDelay = loopDuration / slides.length;
  return (
    <div style={{ position: 'relative', width: '100%', maxWidth: width }}>
      <svg
        width="100%"
        height="100%"
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: 'block' }}
      >
        <style>{`
          .primary-photo, .secondary-photo {
            opacity: 0;
            transform: translateX(0);
            will-change: opacity, transform, filter;
          }

          @keyframes primaryFade {
            0%   { opacity: 0; }
            5%   { opacity: 1; }
            25%  { opacity: 1; }
            30%  { opacity: 0; }
            100% { opacity: 0; }
          }

          @keyframes secondarySlideFade {
            0%   { opacity: 0; transform: translateX(-600px) translateY(70px) scale(0); filter: blur(1000px); }
            15%  { opacity: 1; transform: translateX(0) translateY(70px) scale(1); filter: blur(0); }
            25%  { opacity: 1; transform: translateX(0) translateY(70px) scale(1); filter: blur(0); }
            30%  { opacity: 0; transform: translateX(0) translateY(70px) scale(1); filter: blur(0); }
            100% { opacity: 0; transform: translateX(0) translateY(70px) scale(1); filter: blur(0); }
          }
        `}</style>

        {slides.map((s, idx) => {
  const delay = (perSlideDelay * idx).toFixed(2) + 's';

  return (
    <g key={idx}>
      {/* SECONDARY IMAGE FIRST — goes behind */}
      {s.secondary && (
        <image
          className="secondary-photo"
          href={s.secondary}
          x={Math.round(width * 0.65)}
          y={0}
          width={Math.round(width * 0.35)}
          height={Math.round(height * 0.44)}
          style={{
            animationName: 'secondarySlideFade',
            animationDuration: `${loopDuration}s`,
            animationTimingFunction: 'linear',
            animationIterationCount: 'infinite',
            animationDelay: delay,
          }}
        />
      )}

      {/* PRIMARY IMAGE SECOND — stays on top */}
      <image
        className="primary-photo"
        href={s.primary}
        x={0}
        y={0}
        width={width}
        height={height}
        style={{
          animationName: 'primaryFade',
          animationDuration: `${loopDuration}s`,
          animationTimingFunction: 'linear',
          animationIterationCount: 'infinite',
          animationDelay: delay,
        }}
      />
    </g>
  );
})}

      </svg>
    </div>
  );
}
