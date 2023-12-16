import React, { useContext } from "react";
import DataContext from "../context/DataContext";
import { motion } from "framer-motion";
import { subtitleTextVariant } from "../animation/variants";

export default function About() {
  const { darkMode } = useContext(DataContext);

  return (
    <section
      className={`d-flex flex-column row-gap-40 container-fluid mt-240 ${
        darkMode ? "text-light bg-secondary" : "text-dark bg-light"
      }`}
      id="about"
    >
      <motion.h1
        custom={0.2}
        variants={subtitleTextVariant}
        initial="hidden"
        whileInView="visible"
        className={`_title-2  text-center text-lg-start ${
          darkMode ? "text-light" : ""
        }`}
        style={{transformOrigin : 'left'}}
      >
        <span className="text-primary ">About</span> me
      </motion.h1>
      <motion.div
        className={`container-fluid p-0 m-0 _lead ${
          darkMode ? "text-light" : ""
        } _about ms-16`}
      >
        <div className="mb-16">
        👋 Hello, I'm <span className="_gradient text-gradient">Natanael</span>.{" "}
          <br />
        </div>
        <div className="mb-16">
        📚 I am a <span className="_gradient">computer science student</span> at
          EMIT (Ecole de Management et d'Innovation Technologique)
          <br />
          in the University of Fianarantsoa.
          <br />
        </div>
        <div className="mb-16">
        💻 I'm interested in developing an{" "}
          <span className="_gradient">amazing</span> and{" "}
          <span className="_gradient">visually appealing website</span>. I'm
          currently using some front-end <br />
          technologies and libraries such as{" "}
          <span className="_gradient">React.js, Bootstrap, and jQuery</span>.<br/>
        🎯 Continuously improving my skills is a priority 
          <br />
          to ensure that I stay up-to-date in this field. <br />
        </div>
        <div className="mb-16">
        🎮 Beyond coding, I have also delved into the realm of{" "}
          <span className="_gradient">3D</span> for a year, which has led me
          into the world of <span className="_gradient">game</span> <br />
          <span className="_gradient">development</span>.<br />
        </div>
      </motion.div>
    </section>
  );
}
