import BootstrapIcon from "../assets/bootstrap.png";
import FigmaIcon from "../assets/figma.png";
import ReactIcon from "../assets/react.png";
import { BigButton } from "./Buttons";
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
      id="home"
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
              className="_lead"
            >
              Web developer & designer
            </motion.p>
            <motion.h1
              variants={heroTextVariant}
              custom={0.2}
              whileInView="visible"
              initial="hidden"
              className={`_title ${darkMode ? "text-light" : ""}`}
            >
              Let's <span className="text-primary">Design</span> and
              <span className="text-primary"> Develop</span> a visual appealing
              website
            </motion.h1>
          </div>
          <motion.div custom={1}  variants={heroTextVariant} initial='hidden' whileInView='visible' className="container-fluid px-0">
            <BigButton
              name="See my project"
              icon="bi bi-arrow-right"
              darkMode={darkMode}
              handleClick={() => {
                redirect("project");
                handleNavSelected("project");
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
              src={FigmaIcon}
              className="align-self-start"
              alt=""
            />
          </div>
          <div className="container-fluid d-flex">
            <motion.img
            custom={1.2}
              variants={heroImageVariant}
              initial="hidden"
              whileInView="visible"
              src={BootstrapIcon}
              className="align-self-end"
              alt=""
            />
          </div>
          <div className="container-fluid d-flex">
            <motion.img
            custom={1.3}
            variants={heroImageVariant}
            initial="hidden"
            whileInView="visible"
              src={ReactIcon}
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
