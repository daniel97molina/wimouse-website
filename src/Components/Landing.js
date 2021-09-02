import React from "react";
import car1 from "../images/image1.jpg";
import car2 from "../images/image2.jpg";
import car3 from "../images/image3.jpg";
import car4 from "../images/image4.jpg";
import car5 from "../images/image5.jpg";
import computerList from "../images/listImage.png";

import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import {
  FaGooglePlay,
  FaAppStoreIos,
  FaApple,
  FaWindows,
} from "react-icons/fa";

const Landing = () => {
  return (
    <main>
      <div id="features">
        <h1 className="title" id="webcam">
          ALL IN ONE CONTROLLER
        </h1>
        <Carousel
          autoPlay={6000}
          animationSpeed={1000}
          className="carousel"
          infinite
          arrows
          slidesPerPage={3}
          breakpoints={{
            950: {
              slidesPerPage: 2,
              arrows: true,
            },
            620: {
              slidesPerPage: 1,
              arrows: true,
            },
          }}
        >
          <img src={car1} alt="image1" />
          <img src={car2} alt="image2" />
          <img src={car4} alt="image4" loading="lazy" />
          <img src={car3} alt="image3" loading="lazy" />
          <img src={car5} alt="image5" />
        </Carousel>
      </div>

      <div className="downloadWrapper">
        <h1 className="title" id="download">
          DOWNLOAD
        </h1>

        <div className="Aligner notAligner">
          <div className="half separator">
            <h3>1. Download WiMouse app</h3>
            <a href="https://splitcam.com/download">
              <FaGooglePlay className="icon" size={30}></FaGooglePlay>
              Android
            </a>
            <a href="https://splitcam.com/download">
              <FaAppStoreIos className="icon" size={30}></FaAppStoreIos>
              iOS
            </a>
          </div>

          <div className="half">
            <h3>2. Install WiMouse Server in your computer</h3>
            <a href="https://splitcam.com/download">
              <FaWindows className="icon" size={30}></FaWindows>
              Windows
            </a>
            <a href="https://splitcam.com/download">
              <FaApple className="icon" size={30}></FaApple>
              macOS
            </a>
          </div>
        </div>

        <div className="Aligner notAligner">
        <div className="half">
          <h3>
            3. Connect both devices to the same Wi-Fi Network, and select your
            computer from the app
          </h3>
        </div>
        <div className="half">
          <img src={computerList}></img>
        </div>
        </div>
      </div>

      <h1 id="FAQs" className="title">
        Frequently Asked Questions (FAQs)
      </h1>
      <h3 className="question">
        Should the phone be connected to the same network as my computer?
      </h3>
      <p className="answer">
        Yes, both your phone and computer must be connected to the same local
        network, for example, connected to the same wi-fi.
      </p>
      <h3 className="question">
        Can my computer be connected through Ethernet?
      </h3>
      <p className="answer">
        Yes, your PC can be connected through Ethernet and your phone through
        wi-fi, as long as they're in the same network.
      </p>
      <h3 className="question">Will it use my internet bandwidth?</h3>
      <p className="answer">
        No, all the data remains in your local network, so it won't affect nor
        use your internet bandwidth
      </p>
    </main>
  );
};

export default Landing;
