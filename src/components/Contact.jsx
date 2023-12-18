import { MdButton } from "./Buttons";
import DataContext from "../context/DataContext";
import { useContext } from "react";
import myCv from "../assets/myCV.png";
import { motion } from "framer-motion";
import { subtitleTextVariant } from "../animation/variants";

export default function Contact() {
  const { darkMode } = useContext(DataContext);
  return (
    <section
      className={`container-fluid mt-184 ${
        darkMode ? "text-light bg-secondary" : "text-dark bg-light"
      }`}
      id="Contact"
    >
      <motion.h1
        custom={0.3}
        variants={subtitleTextVariant}
        initial="hidden"
        whileInView="visible"
        className={`_title-2 mb-40 ${
          darkMode ? "text-light" : ""
        } text-center text-lg-start`}
        style={{transformOrigin : 'left'}}
      >
        Feel free to <span className="text-primary">contact</span> me
      </motion.h1>
      <div className="container-fluid pe-0 ps-80 ps-sm-0">
        <MdButton
          name="ralaivoavy.natanael@gmail.com"
          icon="bi bi-envelope-at"
          inverseIcon={true}
          handleClick={() => {
            window.location.href = "mailto:ralaivoavy.natanel@gmail.com";
          }}
        />
      </div>

      <div
        className={`container-fluid _body mt-32 text-center text-sm-start ${
          darkMode ? "text-light" : ""
        }`}
      >
        <i className="bi bi-filetype-pdf _icon me-8"></i>
        <a href={myCv} target="_blank">
          Natanael-Ralaivoavy-resume.png
        </a>
      </div>
    </section>
  );
}
