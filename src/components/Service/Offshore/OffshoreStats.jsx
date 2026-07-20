import "./OffshoreStats.css";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

function OffshoreStats() {

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const stats = [
    {
      id: 1,
      number: 600,
      suffix: "+",
      title: "Happy Clients",
    },
    {
      id: 2,
      number: 1100,
      suffix: "+",
      title: "Delivery Projects",
    },
    {
      id: 3,
      number: 50,
      suffix: "+",
      title: "Skilled Experts",
    },
    {
      id: 4,
      number: 100,
      suffix: "%",
      title: "Satisfaction",
    },
  ];

  const [counts, setCounts] = useState(
    stats.map(() => 0)
  );

  useEffect(() => {

    if (!inView) return;

    stats.forEach((item, index) => {

      let start = 0;

      const end = item.number;

      const duration = 2000;

      const increment = end / (duration / 16);

      const timer = setInterval(() => {

        start += increment;

        if (start >= end) {

          start = end;

          clearInterval(timer);

        }

        setCounts((prev) => {

          const updated = [...prev];

          updated[index] = Math.floor(start);

          return updated;

        });

      }, 16);

    });

  }, [inView]);

  return (

    <section
      className="offshoreStats"
      ref={ref}
    >

      <div className="statsContainer">

        {stats.map((item, index) => (

          <div
            className="statCard"
            key={item.id}
          >

            <h2>

              {counts[index]}

              {item.suffix}

            </h2>

            <p>

              {item.title}

            </p>

          </div>

        ))}

      </div>

    </section>

  );

}

export default OffshoreStats;