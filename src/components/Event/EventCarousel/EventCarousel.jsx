import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import EventCard from "./EventCard";
import "./EventCarousel.css";

/* =========================================
   TEMPORARY FRONTEND DATA

   Later this data will come from backend API.
========================================= */

import thumbnail1 from "../../../assets/events/event1.jpg";
import thumbnail2 from "../../../assets/events/event2.jpg";
import thumbnail3 from "../../../assets/events/event3.jpg";
import thumbnail4 from "../../../assets/events/event4.jpg";
import thumbnail5 from "../../../assets/events/event5.jpg";
import thumbnail6 from "../../../assets/events/event6.jpg";


function EventCarousel() {

  /* =========================================
     EVENT DATA
  ========================================= */

  let events = [

    {
      id: 1,

      category: "Workshop",

      title: "Node.js Backend Workshop",

      subtitle: "Backend • Node.js • Development",

      thumbnail: thumbnail1,

      videoUrl: "#"
    },

    {
      id: 2,

      category: "Webinar",

      title: "Digital Marketing Webinar",

      subtitle: "Marketing • Growth • Strategy",

      thumbnail: thumbnail2,

      videoUrl: "#"
    },

    {
      id: 3,

      category: "Live Session",

      title: "Cloud Development Live",

      subtitle: "Cloud • DevOps • Technology",

      thumbnail: thumbnail3,

      videoUrl: "#"
    },

    {
      id: 4,

      category: "AI Session",

      title: "AI Development Session",

      subtitle: "Artificial Intelligence • Technology",

      thumbnail: thumbnail4,

      videoUrl: "#"
    },

    {
      id: 5,

      category: "Workshop",

      title: "React Native Workshop",

      subtitle: "React Native • Mobile • Development",

      thumbnail: thumbnail5,

      videoUrl: "#"
    },

    {
      id: 6,

      category: "Workshop",

      title: "Database Dashboard",

      subtitle: "Insights • Technology • Innovation",

      thumbnail: thumbnail6,

      videoUrl: "#"
    }

  ];
  /* =========================================
     AUTO SLIDE
  
     Automatically moves every 3 seconds
  ========================================= */

  useEffect(function () {

    let autoSlide = setInterval(function () {

      setActiveIndex(function (currentIndex) {

        return (currentIndex + 1) % events.length;

      });

    }, 3000);


    return function () {

      clearInterval(autoSlide);

    };

  }, []);

  /* =========================================
     ACTIVE CARD
  ========================================= */

  let [activeIndex, setActiveIndex] = useState(0);


  /* =========================================
     NEXT SLIDE
  ========================================= */

  function nextSlide() {

    setActiveIndex(function (currentIndex) {

      return (currentIndex + 1) % events.length;

    });

  }


  /* =========================================
     PREVIOUS SLIDE
  ========================================= */

  function prevSlide() {

    setActiveIndex(function (currentIndex) {

      return (
        currentIndex - 1 + events.length
      ) % events.length;

    });

  }


  /* =========================================
     KEYBOARD NAVIGATION

     → Right Arrow = Next
     ← Left Arrow  = Previous
  ========================================= */

  useEffect(function () {

    function handleKeyboard(event) {

      if (event.key === "ArrowRight") {

        event.preventDefault();

        nextSlide();

      }


      if (event.key === "ArrowLeft") {

        event.preventDefault();

        prevSlide();

      }

    }


    window.addEventListener(
      "keydown",
      handleKeyboard
    );


    return function () {

      window.removeEventListener(
        "keydown",
        handleKeyboard
      );

    };

  }, []);


  /* =========================================
     FIND CARD POSITION
  ========================================= */

  function getCardPosition(index) {

    let total = events.length;

    let difference =
      (index - activeIndex + total) % total;


    /* CENTER CARD */

    if (difference === 0) {

      return "active";

    }


    /* RIGHT FIRST CARD */

    if (difference === 1) {

      return "rightOne";

    }


    /* RIGHT SECOND CARD */

    if (difference === 2) {

      return "rightTwo";

    }


    /* LEFT FIRST CARD */

    if (difference === total - 1) {

      return "leftOne";

    }


    /* LEFT SECOND CARD */

    if (difference === total - 2) {

      return "leftTwo";

    }


    /* OTHER CARDS */

    return "hiddenCard";

  }


  /* =========================================
     CARD CLICK
  ========================================= */

  function handleCardClick(index) {

    if (index === activeIndex) {

      return;

    }

    setActiveIndex(index);

  }


  /* =========================================
     DOT CLICK
  ========================================= */

  function handleDotClick(index) {

    setActiveIndex(index);

  }


  /* =========================================
     JSX
  ========================================= */

  return (

    <section className="eventVideosSection">


      {/* BACKGROUND GLOW */}

      <div className="eventGlow eventGlowOne"></div>

      <div className="eventGlow eventGlowTwo"></div>



      <div className="eventVideosContainer">


        {/* =================================
                    SECTION HEADING
                ================================= */}

        <div className="eventVideosHeading">

          <span className="eventSmallTitle">

            Featured Sessions

          </span>


          <h2>

            Latest Event Videos

          </h2>


          <p>

            Explore our latest webinars,
            workshops, technology sessions
            and expert discussions.

          </p>

        </div>



        {/* =================================
                    CAROUSEL
                ================================= */}

        <div className="eventCarouselArea">


          {/* LEFT BUTTON */}

          <button

            className="
                            eventCarouselArrow
                            eventCarouselArrowLeft
                        "

            onClick={prevSlide}

            aria-label="Previous event"

          >

            <FaChevronLeft />

          </button>



          {/* =================================
                        CARDS
                    ================================= */}

          <div className="eventCardsStage">


            {events.map(function (item, index) {

              return (

                <EventCard

                  key={item.id}

                  item={item}

                  position={
                    getCardPosition(index)
                  }

                  onCardClick={function () {

                    handleCardClick(index);

                  }}

                />

              );

            })}


          </div>



          {/* RIGHT BUTTON */}

          <button

            className="
                            eventCarouselArrow
                            eventCarouselArrowRight
                        "

            onClick={nextSlide}

            aria-label="Next event"

          >

            <FaChevronRight />

          </button>


        </div>


        {/* =================================
                    DOT NAVIGATION
                ================================= */}

        <div className="eventCarouselDots">


          {events.map(function (item, index) {

            return (

              <button

                key={item.id}

                className={

                  index === activeIndex

                    ? "eventCarouselDot activeDot"

                    : "eventCarouselDot"

                }

                onClick={function () {

                  handleDotClick(index);

                }}

                aria-label={
                  `Go to event ${index + 1}`
                }

              ></button>

            );

          })}


        </div>


      </div>

    </section>

  );

}


export default EventCarousel;