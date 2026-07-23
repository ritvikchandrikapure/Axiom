import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./VoiceAssistant.css";

function VoiceAssistant() {

  let navigate = useNavigate();

  let [isListening, setIsListening] = useState(false);
  let [showPopup, setShowPopup] = useState(false);

  let [status, setStatus] = useState("Listening...");
  let [subStatus, setSubStatus] = useState("Speak now");


  // ==========================================
  // ASSISTANT SPEAK
  // ==========================================

  function speak(message) {

    window.speechSynthesis.cancel();

    let speech = new SpeechSynthesisUtterance(message);

    speech.lang = "en-IN";
    speech.rate = 1;
    speech.pitch = 1;
    speech.volume = 1;

    window.speechSynthesis.speak(speech);

  }


  // ==========================================
  // CLOSE SMALL POPUP
  // ==========================================

  function closePopup(delay = 1200) {

    setTimeout(function () {

      setShowPopup(false);
      setIsListening(false);

    }, delay);

  }


  // ==========================================
  // SPEAK AND NAVIGATE
  // ==========================================

  function speakAndNavigate(message, route) {

    setStatus(message);
    setSubStatus("");

    window.speechSynthesis.cancel();

    let speech = new SpeechSynthesisUtterance(message);

    speech.lang = "en-IN";
    speech.rate = 1;
    speech.pitch = 1;


    speech.onend = function () {

      navigate(route);

      setShowPopup(false);
      setIsListening(false);

    };


    window.speechSynthesis.speak(speech);

  }


  // ==========================================
  // SCROLL TO ELEMENT
  // ==========================================

  function scrollToElement(selector, successMessage) {

    let element = document.querySelector(selector);


    if (element) {

      setStatus(successMessage);
      setSubStatus("");

      element.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

      speak(successMessage);

      closePopup();

    }

    else {

      setStatus("Section not found");
      setSubStatus("Not available on this page");

      speak(
        "Sorry, this section is not available on this page."
      );

      closePopup(1800);

    }

  }


  // ==========================================
  // COMMAND PROCESSOR
  // ==========================================

  function handleCommand(command) {

    let text = command
      .toLowerCase()
      .trim();


    console.log("User said:", text);


    // ==========================================
    // OFFSHORE DEVELOPMENT
    // ==========================================

    if (
      text.includes("offshore development") ||
      text.includes("offshore") ||
      text.includes("offshore page")
    ) {

      speakAndNavigate(
        "Opening Offshore Development",
        "/services/offshore"
      );

    }


    // ==========================================
    // WEB DEVELOPMENT
    // ==========================================

    else if (
      text.includes("web development") ||
      text.includes("website development") ||
      text.includes("web design") ||
      text.includes("website design") ||
      text.includes("web development page")
    ) {

      speakAndNavigate(
        "Opening Web Design and Development",
        "/services/web-development"
      );

    }


    // ==========================================
    // DIGITAL MARKETING
    // ==========================================

    else if (
      text.includes("digital marketing") ||
      text.includes("marketing page") ||
      text.includes("marketing service")
    ) {

      speakAndNavigate(
        "Opening Digital Marketing",
        "/services/digital-marketing"
      );

    }


    // ==========================================
    // HIRE DEVELOPER
    // ==========================================

    else if (
      text.includes("hire developer") ||
      text.includes("hire a developer") ||
      text.includes("developer hire") ||
      text.includes("hire developers")
    ) {

      speakAndNavigate(
        "Opening Hire Developer",
        "/services/hire-developer"
      );

    }


    // ==========================================
    // HOME
    // ==========================================

    else if (
      text.includes("open home") ||
      text.includes("go home") ||
      text.includes("home page") ||
      text.includes("homepage") ||
      text.includes("take me home")
    ) {

      speakAndNavigate(
        "Opening Home",
        "/"
      );

    }


    // ==========================================
    // CONTACT
    // ==========================================

    else if (
      text.includes("open contact") ||
      text.includes("contact page") ||
      text.includes("contact us") ||
      text.includes("show contact") ||
      text.includes("contact kholo")
    ) {

      speakAndNavigate(
        "Opening Contact",
        "/contact"
      );

    }


    // ==========================================
    // PRODUCTS
    // ==========================================

    else if (
      text.includes("open product") ||
      text.includes("open products") ||
      text.includes("product page") ||
      text.includes("show products") ||
      text.includes("our products")
    ) {

      speakAndNavigate(
        "Opening Products",
        "/products"
      );

    }


    // ==========================================
    // PORTFOLIO
    // ==========================================

    else if (
      text.includes("open portfolio") ||
      text.includes("show portfolio") ||
      text.includes("portfolio page") ||
      text.includes("our portfolio") ||
      text.includes("our work") ||
      text.includes("show projects")
    ) {

      speakAndNavigate(
        "Opening Portfolio",
        "/portfolio"
      );

    }


    // ==========================================
    // CAREER
    // ==========================================

    else if (
      text.includes("open career") ||
      text.includes("career page") ||
      text.includes("show career") ||
      text.includes("show careers") ||
      text.includes("show jobs") ||
      text.includes("open jobs") ||
      text.includes("job page")
    ) {

      speakAndNavigate(
        "Opening Career",
        "/career"
      );

    }


    // ==========================================
    // EVENTS
    // ==========================================

    else if (
      text.includes("open event") ||
      text.includes("open events") ||
      text.includes("event page") ||
      text.includes("show events")
    ) {

      speakAndNavigate(
        "Opening Events",
        "/events"
      );

    }


    // ==========================================
    // GENERAL SERVICES
    // ==========================================

    else if (
      text === "services" ||
      text === "service" ||
      text.includes("show services") ||
      text.includes("what services") ||
      text.includes("tell me services")
    ) {

      setStatus("Available Services");

      setSubStatus(
        "Offshore • Web • Marketing • Hire Developer"
      );


      speak(
        "We provide Offshore Development, Web Design and Development, Digital Marketing, and Hire Developer services."
      );


      closePopup(5500);

    }


    // ==========================================
    // FOOTER
    // ==========================================

    else if (
      text.includes("footer") ||
      text.includes("show footer") ||
      text.includes("open footer") ||
      text.includes("footer dikhao") ||
      text.includes("footer dekhna") ||
      text.includes("footer dekhna hai")
    ) {

      scrollToElement(
        "footer",
        "Showing Footer"
      );

    }


    // ==========================================
    // NAVBAR / HEADER
    // ==========================================

    else if (
      text.includes("navbar") ||
      text.includes("navigation bar") ||
      text.includes("show header") ||
      text.includes("go to header")
    ) {

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

      setStatus("Showing Navigation");
      setSubStatus("");

      speak("Showing navigation");

      closePopup();

    }


    // ==========================================
    // GO BACK
    // ==========================================

    else if (
      text === "back" ||
      text.includes("go back") ||
      text.includes("previous page") ||
      text.includes("back page")
    ) {

      setStatus("Going Back");
      setSubStatus("");

      speak("Going back");


      setTimeout(function () {

        navigate(-1);

        setShowPopup(false);
        setIsListening(false);

      }, 800);

    }


    // ==========================================
    // GO FORWARD
    // ==========================================

    else if (
      text.includes("go forward") ||
      text.includes("next page") ||
      text.includes("forward page")
    ) {

      setStatus("Going Forward");
      setSubStatus("");

      speak("Going forward");


      setTimeout(function () {

        navigate(1);

        setShowPopup(false);
        setIsListening(false);

      }, 800);

    }


    // ==========================================
    // SCROLL DOWN
    // ==========================================

    else if (
      text.includes("scroll down") ||
      text.includes("go down") ||
      text.includes("move down") ||
      text.includes("niche jao")
    ) {

      window.scrollBy({
        top: 600,
        behavior: "smooth"
      });


      setStatus("Scrolling Down");
      setSubStatus("");

      speak("Scrolling down");

      closePopup();

    }


    // ==========================================
    // SCROLL UP
    // ==========================================

    else if (
      text.includes("scroll up") ||
      text.includes("go up") ||
      text.includes("move up") ||
      text.includes("upar jao")
    ) {

      window.scrollBy({
        top: -600,
        behavior: "smooth"
      });


      setStatus("Scrolling Up");
      setSubStatus("");

      speak("Scrolling up");

      closePopup();

    }


    // ==========================================
    // GO TO TOP
    // ==========================================

    else if (
      text.includes("go to top") ||
      text.includes("scroll top") ||
      text.includes("top of page") ||
      text.includes("page top") ||
      text.includes("top par jao")
    ) {

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });


      setStatus("Going To Top");
      setSubStatus("");

      speak("Going to the top of the page");

      closePopup();

    }


    // ==========================================
    // GO TO BOTTOM
    // ==========================================

    else if (
      text.includes("go to bottom") ||
      text.includes("scroll bottom") ||
      text.includes("bottom of page") ||
      text.includes("page bottom")
    ) {

      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth"
      });


      setStatus("Going To Bottom");
      setSubStatus("");

      speak("Going to the bottom of the page");

      closePopup();

    }


    // ==========================================
    // REFRESH PAGE
    // ==========================================

    else if (
      text.includes("refresh") ||
      text.includes("refresh page") ||
      text.includes("reload") ||
      text.includes("reload page")
    ) {

      setStatus("Refreshing Page");
      setSubStatus("");

      speak("Refreshing page");


      setTimeout(function () {

        window.location.reload();

      }, 900);

    }


    // ==========================================
    // UNKNOWN COMMAND
    // ==========================================

    else {

      setStatus("Command not recognized");

      setSubStatus("Please try again");


      speak(
        "Sorry, I did not understand that command. Please try again."
      );


      closePopup(1800);

    }

  }


  // ==========================================
  // START SPEECH RECOGNITION
  // ==========================================

  function startListening() {

    let SpeechRecognition =
      window.SpeechRecognition ||
      window.webkitSpeechRecognition;


    // Browser support check

    if (!SpeechRecognition) {

      setShowPopup(true);

      setStatus("Voice Not Supported");

      setSubStatus(
        "Please use a supported browser"
      );


      speak(
        "Voice recognition is not supported in this browser."
      );


      closePopup(2500);

      return;

    }


    let recognition =
      new SpeechRecognition();


    recognition.lang = "en-IN";

    recognition.continuous = false;

    recognition.interimResults = false;

    recognition.maxAlternatives = 1;


    // ==========================================
    // LISTENING START
    // ==========================================

    recognition.onstart = function () {

      setIsListening(true);

      setShowPopup(true);

      setStatus("Listening...");

      setSubStatus("Speak now");

    };


    // ==========================================
    // RESULT
    // ==========================================

    recognition.onresult = function (event) {

      let transcript =
        event.results[0][0].transcript;


      console.log(
        "Voice recognized:",
        transcript
      );


      setIsListening(false);

      setStatus("Processing...");

      setSubStatus("");


      handleCommand(transcript);

    };


    // ==========================================
    // ERROR
    // ==========================================

    recognition.onerror = function (event) {

      console.log(
        "Speech recognition error:",
        event.error
      );


      setIsListening(false);


      if (event.error === "not-allowed") {

        setStatus(
          "Microphone Blocked"
        );

        setSubStatus(
          "Please allow microphone permission"
        );


        speak(
          "Please allow microphone permission."
        );

      }


      else if (
        event.error === "no-speech"
      ) {

        setStatus(
          "I couldn't hear you"
        );

        setSubStatus(
          "Please try again"
        );

      }


      else if (
        event.error === "audio-capture"
      ) {

        setStatus(
          "Microphone Not Found"
        );

        setSubStatus(
          "Please check your microphone"
        );

      }


      else {

        setStatus(
          "Something Went Wrong"
        );

        setSubStatus(
          "Please try again"
        );

      }


      closePopup(2000);

    };


    // ==========================================
    // RECOGNITION END
    // ==========================================

    recognition.onend = function () {

      setIsListening(false);

    };


    // Start microphone

    try {

      recognition.start();

    }

    catch (error) {

      console.log(
        "Recognition start error:",
        error
      );

    }

  }


  // ==========================================
  // JSX
  // ==========================================

  return (
    <>

      {/* SMALL STATUS POPUP */}

      {showPopup && (

        <div className="voice-mini-popup">

          <div
            className={
              isListening
                ? "mini-mic listening"
                : "mini-mic"
            }
          >

            🎤

          </div>


          <div className="mini-popup-text">

            <h4>
              {status}
            </h4>


            {subStatus && (

              <p>
                {subStatus}
              </p>

            )}

          </div>

        </div>

      )}


      {/* FLOATING MIC BUTTON */}

      <button
        className={
          isListening
            ? "voice-floating-button active"
            : "voice-floating-button"
        }

        onClick={startListening}

        disabled={isListening}

        aria-label="Axiom Voice Assistant"

        title="Speak to Axiom"
      >

        🎤

      </button>

    </>
  );

}

export default VoiceAssistant;