import ChatImage from "../assets/chatScrennShoot.png";
import MovieImage from "../assets/roomScreenCapture.png";
import FashionImage from "../assets/fashion_landing.png";
import { IconButton, MdButton } from "./Buttons";
import DataContext from "../context/DataContext";
import { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { subtitleTextVariant } from "../animation/variants";
import { technoVariant } from "../animation/variants";
import { useNavigate } from "react-router-dom";
import { PROJECTS } from "../constants";

export default function Project() {
  const { darkMode, width, height } = useContext(DataContext);
  return (
    <section
      className={`container-fluid mt-184 d-flex flex-column w-100 align-items-md-center gap-40  ${
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
        style={{ transformOrigin: "left" }}
      >
        My personal <span className="text-primary">projects</span>
      </motion.h1>
      <div className="container-fluid px-0">
        <div className="row  justify-content-between row-gap-40">
          {/* <div className="col-auto mx-0 ">
            <Card
              image={MovieImage}
              title="Movie website"
              description="A modern movie platform designed for efortless anime trailer discovery"
              darkMode={darkMode}
              projectLink="https://nathanrael-room.netlify.app"
              usedTechno={[
                "Html",
                "Css",
                "Bootstrap",
                "Javascript",
                "React js",
              ]}
            />
          </div>
          <div className="col-auto mx-0 ">
            <Card
              image={ChatImage}
              title="ChatBot website"
              description="A website with an interactive bot  that helps you in various topics"
              darkMode={darkMode}
              projectLink="https://nathanrael-chatBot.netlify.app"
              usedTechno={["Html", "Css", "Bootstrap", "Javascript", "JQuery"]}
            />
          </div>
          <div className="col-auto mx-0 ">
            <Card
              image={FashionImage}
              title="Fashion website"
              description="A modern showcase website with a"
              link="figma design | https://www.figma.com/file/EqUzKBWvav6OQj7VKlopkQ/fashion_landing_page?type=design&node-id=9%3A37&mode=design&t=uRc0Z7mDUffrSkxh-1"
              darkMode={darkMode}
              projectLink="https://nathanrael-fashion.netlify.app"
              usedTechno={["Html", "Css", "TailwindCss"]}
            />
          </div> */}
          {PROJECTS.map((item) => (
            <div key={item.title} className=" col-auto mx-0">
              <Card {...item} darkMode={darkMode} />
            </div>
          ))}
        </div>
      </div>
      <div className="">
        <MdButton
          handleClick={() => {
            window.open("https://github.com/NathanRael/", "_blank");
          }}
          name="See more on Github"
          inverseIcon
          icon="bi bi-github"
        />
      </div>
    </section>
  );
}

function Card({
  image,
  title,
  description,
  darkMode,
  projectLink,
  usedTechno,
  link = null,
}) {
  const { width, height } = useContext(DataContext);
  const [cardHover, setCardHover] = useState(false);

  useEffect(() => {
    width <= 990 ? setCardHover(true) : setCardHover(false);
  }, [width]);
  return (
    <div
      className={`_projectCard  d-flex flex-column align-items-center ${
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
          onMouseEnter={() => (width >= 990 ? setCardHover(true) : null)}
          onMouseLeave={() => (width >= 990 ? setCardHover(false) : null)}
          style={{
            filter: cardHover ? "blur(1px)" : "",
            transition: "filter 0.5s ease",
            objectFit: "cover",
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
        {link ? (
          <div className="mb-4">
            <p className={`card-text _lead ${darkMode ? "text-altlight" : ""}`}>
              {description}
            </p>
            <a
              href={link?.split("|")[1]}
              className={`card-text _lead ${darkMode ? "text-altlight" : ""}`}
            >
              {link?.split("|")[0]}
            </a>
          </div>
        ) : (
          <p className={`card-text _lead ${darkMode ? "text-altlight" : ""}`}>
            {description}
          </p>
        )}
        <div className="d-flex justify-content-start align-items-center container-fluid p-0 gap-24">
          {usedTechno.map((techno, index) => (
            <motion.div
              custom={index}
              key={techno}
              variants={technoVariant}
              initial="hidden"
              whileInView="visible"
              className=" bg-primary text-light py-1 px-2 rounded-3 _small"
            >
              {techno}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
