import TailwindIcon from "../assets/TailwindCSS.svg";
import FigmaIcon from "../assets/figma.png";
import ReactIcon from "../assets/react.png";
import { BigButton, IconButton, MdButton } from "./Buttons";
import DataContext from "../context/DataContext";
import { useContext } from "react";
import { delay, motion } from "framer-motion";
import { heroTextVariant, heroImageVariant } from "../animation/variants";

export default function Hero() {
  const { darkMode, redirect, handleNavSelected } = useContext(DataContext);
  return (
    <section
      className={`container-fluid mt-200 ${
        darkMode ? "text-light" : "text-dark"
      } `}
      id="Home"
    >
      <div className="row row-gap-64">
        <div className="col-12 col-lg-7 d-flex flex-column row-gap-40">
          <div
            className={`container-fluid px-0 ${
              darkMode ? "text-light" : "text-dark"
            } row-gap-16`}
          >
            <motion.p
              variants={heroTextVariant}
              custom={0.7}
              whileInView="visible"
              initial="hidden"
              className="_lead text-center text-sm-start"
            >
              Web developer & designer
            </motion.p>
            <motion.h1
              variants={heroTextVariant}
              custom={0.2}
              whileInView="visible"
              initial="hidden"
              className={`_title text-center text-sm-start ${
                darkMode ? "text-light" : ""
              }`}
            >
              Let's <span className="text-primary">Design</span> and
              <span className="text-primary"> Develop</span> a visual appealing
              website
            </motion.h1>
          </div>
          <motion.div
            custom={1}
            variants={heroTextVariant}
            initial="hidden"
            whileInView="visible"
            className="container-fluid d-flex align-items-center justify-content-sm-start justify-content-center px-0 gap-4"
          >
            <div className="d-flex align-items-center  gap-4">
              <IconButton
                icon="bi bi-facebook"
                href="https://www.facebook.com/profile.php?id=100087957505977"
              />
              <IconButton
                icon="bi bi-github"
                href="https://github.com/nathanrael"
              />
            </div>
            <MdButton
              name="See my project"
              icon="bi bi-arrow-right"
              darkMode={darkMode}
              handleClick={() => {
                redirect("Project");
              }}
            />
          </motion.div>
        </div>
        <div className="col-12 col-lg-5 d-none d-sm-flex gap-48">
          <div className="container-fluid d-flex">
            <motion.img
              custom={1}
              variants={heroImageVariant}
              initial="hidden"
              whileInView="visible"
              src={ReactIcon}
              className="align-self-start"
              alt=""
              style={{
                width: "128px",
              }}
            />
          </div>
          <div className="container-fluid d-flex">
            <motion.img
              custom={1.2}
              variants={heroImageVariant}
              initial="hidden"
              whileInView="visible"
              src={TailwindIcon}
              className="align-self-end"
              style={{
                width: "128px",
              }}
              alt=""
            />
          </div>
          <div className="container-fluid d-flex">
            <motion.img
              custom={1.3}
              variants={heroImageVariant}
              initial="hidden"
              whileInView="visible"
              src={FigmaIcon}
              className="align-self-start"
              alt=""
              width="106"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
