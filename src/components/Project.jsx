import ChatImage from "../assets/chatScrennShoot.png";
import MovieImage from "../assets/roomScreenCapture.png";
import { IconButton } from "./Buttons";
import DataContext from "../context/DataContext";
import { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { subtitleTextVariant } from "../animation/variants";

export default function Project() {
  const { darkMode, width, height } = useContext(DataContext);
  return (
    <section
      className={`container-fluid mt-184  ${
        darkMode ? "text-light bg-secondary" : "text-dark bg-light"
      }`}
      id="Project"
    >
      <motion.h1
        custom={0.2}
        variants={subtitleTextVariant}
        initial="hidden"
        whileInView="visible"
        className={`_title-2 ${
          darkMode ? "text-light" : ""
        } mb-40 text-center text-lg-start`}
        style={{transformOrigin : 'left'}}
      >
        My personal <span className="text-primary">projects</span>
      </motion.h1>
      <div className="container-fluid px-0">
        <div className="row  justify-content-center row-gap-40">
          <div className="col-12 col-lg-6 mx-0 d-flex justify-content-center">
            <Card
              image={MovieImage}
              title="Movie website"
              description="A modern movie website that can simplify your life in terms of searching for new anime and watching trailers."
              darkMode={darkMode}
              projectLink="https://nathanrael-movie.netlify.app"
            />
          </div>
          <div className="col-12 col-lg-6 mx-0 d-flex justify-content-center">
            <Card
              image={ChatImage}
              title="ChatBot website"
              description="A ChatBot website that can help you in different topics."
              darkMode={darkMode}
              projectLink="https://nathanrael-chatBot.netlify.app"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Card({ image, title, description, darkMode, projectLink }) {
  const { width, height } = useContext(DataContext);
  const [cardHover, setCardHover] = useState(false);

  useEffect(() => {
    width <= 990 ? setCardHover(true) : setCardHover(false); 
  }, [width])
  return (
    <div
      className={`_projectCard d-flex flex-column align-items-center ${
        darkMode ? "text-light bg-secondary" : "text-dark bg-light"
      }`}
    >
      <motion.div
        className={`card p-8 bg-secondary border-light rounded-4`}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <motion.img
          src={image}
          className="card-img-top rounded-3"
          alt=""
          height="319px"
          onMouseEnter={() => width >= 990 ? setCardHover(true) : null}
          onMouseLeave={() => width >= 990 ? setCardHover(false) : null}
          style={{
            filter: cardHover ? "blur(1px)" : "",
            transition: "filter 0.5s ease",
          }}
        />
        <motion.div
          className="container-fluid position-absolute top-50 start-50 translate-middle _transOpacity"
          style={{
            width: "max-content",
            opacity: cardHover ? 1 : 0,
          }}
          onMouseEnter={() => setCardHover(true)}
          onMouseLeave={() => setCardHover(false)}
        >
          <IconButton
            icon="bi bi-eye"
            handleClick={() => {
              window.open(projectLink, "_blank");
              setCardHover(false);
            }}
          />
        </motion.div>
      </motion.div>
      <div className="container-fluid m-0 mt-16 p-0">
        <h1
          className={`card-title _subtitle ${darkMode ? "text-altlight" : ""}`}
        >
          {title}
        </h1>
        <p className={`card-text _lead ${darkMode ? "text-altlight" : ""}`}>
          {description}
        </p>
      </div>
    </div>
  );
}
