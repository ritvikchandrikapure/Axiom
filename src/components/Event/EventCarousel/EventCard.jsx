import {
    FaPlay,
    FaArrowRight
} from "react-icons/fa";


function EventCard({
    item,
    position,
    onCardClick
}) {


    function handleWatch(event) {

        event.stopPropagation();


        if (
            !item.videoUrl ||
            item.videoUrl === "#"
        ) {

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

            className={
                `eventVideoCard ${position}`
            }

            onClick={onCardClick}

        >


            {/* =========================
                CATEGORY
            ========================== */}

            <div className="eventCardTop">

                <div className="eventVideoCategory">

                    <span
                        className="categoryDot"
                    ></span>

                    <span>

                        {item.category}

                    </span>

                </div>

            </div>



            {/* =========================
                THUMBNAIL
            ========================== */}

            <div className="eventThumbnailFrame">

                <div className="eventVideoImage">


                    <img

                        src={item.thumbnail}

                        alt={item.title}

                        draggable="false"

                    />


                    <div
                        className="eventVideoOverlay"
                    ></div>



                    {/* PLAY */}

                    <button

                        className="eventVideoPlay"

                        onClick={handleWatch}

                        aria-label={
                            `Watch ${item.title}`
                        }

                    >

                        <span
                            className="eventVideoPulse"
                        ></span>

                        <FaPlay />

                    </button>


                </div>

            </div>



            {/* =========================
                CARD DETAILS
            ========================== */}

            <div className="eventVideoInfo">


                <div className="eventVideoText">

                    <h3>

                        {item.title}

                    </h3>


                    <p>

                        {item.subtitle}

                    </p>

                </div>



                <button

                    className="eventWatchButton"

                    onClick={handleWatch}

                >

                    Watch

                    <FaArrowRight />

                </button>


            </div>



            {/* BOTTOM ACTIVE LINE */}

            <div
                className="eventCardActiveLine"
            ></div>


        </article>

    );

}


export default EventCard;