import {
  FaPlay,
  FaArrowRight
} from "react-icons/fa";

function EventCard({
  item,
  position,
  onClick
}) {

  function handleWatch(event) {

    event.stopPropagation();

    if (!item.videoUrl || item.videoUrl === "#") {
      return;
    }

    window.open(
      item.videoUrl,
      "_blank",
      "noopener,noreferrer"
    );

  }


  return (

    <article
      className={`videoCard ${position}`}
      onClick={onClick}
    >

      {/* IMAGE AREA */}

      <div className="videoCardImage">

        <img
          src={item.thumbnail}
          alt={item.title}
          draggable="false"
        />


        {/* Image overlay */}

        <div className="videoCardOverlay"></div>


        {/* Category */}

        <div className="videoCategory">

          <span></span>

          {item.category || "EVENT"}

        </div>


        {/* Play Button */}

        <button
          className="videoPlayButton"
          onClick={handleWatch}
          aria-label={`Play ${item.title}`}
        >

          <span className="videoPlayPulse"></span>

          <FaPlay />

        </button>

      </div>


      {/* INFORMATION AREA */}

      <div className="videoCardContent">

        <div className="videoCardText">

          <h3>
            {item.title}
          </h3>

          <p>
            {item.category || "Event"} • Axiom Techguru
          </p>

        </div>


        <button
          className="videoWatchButton"
          onClick={handleWatch}
        >

          Watch

          <FaArrowRight />

        </button>

      </div>


      {/* Active indicator */}

      <div className="videoActiveIndicator"></div>

    </article>

  );

}

export default EventCard;