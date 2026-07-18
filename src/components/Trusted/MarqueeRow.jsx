import {
  useEffect,
  useRef,
  useState,
} from "react";

function MarqueeRow({

  items,

  direction = "left",

  speed = 1,

}) {

  const trackRef = useRef(null);

  const frameRef = useRef(null);

  const offsetRef = useRef(0);

  const isDragging = useRef(false);

  const startX = useRef(0);

  const lastOffset = useRef(0);

  const [paused, setPaused] = useState(false);

  /* ==========================
      LOOP
  ========================== */

  useEffect(() => {

    const track = trackRef.current;

    if (!track) return;

    const animate = () => {

      if (!paused && !isDragging.current) {

        if (direction === "left") {

          offsetRef.current -= speed;

        }

        else {

          offsetRef.current += speed;

        }

        const half = track.scrollWidth / 2;

        if (offsetRef.current <= -half) {

          offsetRef.current = 0;

        }

        if (offsetRef.current >= 0 && direction === "right") {

          offsetRef.current = -half;

        }

        track.style.transform =
          `translateX(${offsetRef.current}px)`;

      }

      frameRef.current =
        requestAnimationFrame(animate);

    };

    frameRef.current =
      requestAnimationFrame(animate);

    return () =>

      cancelAnimationFrame(frameRef.current);

  }, [

    paused,

    direction,

    speed,

  ]);

    /* ==========================
      MOUSE DRAG
  ========================== */

  const handleMouseDown = (e) => {

    isDragging.current = true;

    startX.current = e.clientX;

    lastOffset.current = offsetRef.current;

  };

  const handleMouseMove = (e) => {

    if (!isDragging.current) return;

    const distance = e.clientX - startX.current;

    offsetRef.current = lastOffset.current + distance;

    trackRef.current.style.transform =
      `translateX(${offsetRef.current}px)`;

  };

  const handleMouseUp = () => {

    isDragging.current = false;

  };

  /* ==========================
      TOUCH
  ========================== */

  const handleTouchStart = (e) => {

    isDragging.current = true;

    startX.current = e.touches[0].clientX;

    lastOffset.current = offsetRef.current;

  };

  const handleTouchMove = (e) => {

    if (!isDragging.current) return;

    const distance =
      e.touches[0].clientX - startX.current;

    offsetRef.current = lastOffset.current + distance;

    trackRef.current.style.transform =
      `translateX(${offsetRef.current}px)`;

  };

  const handleTouchEnd = () => {

    isDragging.current = false;

  };

  /* ==========================
      JSX
  ========================== */

  return (

    <div

      className="marquee"

      onMouseEnter={() => setPaused(true)}

      onMouseLeave={() => setPaused(false)}

      onMouseMove={handleMouseMove}

      onMouseUp={handleMouseUp}

      onMouseLeaveCapture={handleMouseUp}

      onTouchStart={handleTouchStart}

      onTouchMove={handleTouchMove}

      onTouchEnd={handleTouchEnd}

    >

      <div

        ref={trackRef}

        className="marquee-track"

        onMouseDown={handleMouseDown}

      >

        {[...items, ...items].map((item, index) => (

          <div

            className="tech-card"

            key={index}

          >

            {item.icon}

            <h3>

              {item.name}

            </h3>

          </div>

        ))}

      </div>

    </div>

  );

}

export default MarqueeRow;