import "../../styles/Portfolio.css";
import portfolioData from "./portfolioData";
import TimelineCard from "./TimelineCard";

function Timeline() {

  return (

    <section

      id="portfolio-list"

      className="timelineSection"

    >

      <div className="timelineContainer">

        <div className="timelineLine"></div>

        {

          portfolioData.map((item,index)=>(

            <TimelineCard

              key={item.id}

              item={item}

              index={index}

            />

          ))

        }

      </div>

    </section>

  );

}

export default Timeline;