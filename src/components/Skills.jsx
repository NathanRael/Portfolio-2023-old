import BootstrapIcon from "../assets/bootstrap.png";
import FigmaIcon from "../assets/figma.png";
import ReactIcon from "../assets/react.png";
import JsIcon from "../assets/javascript.png";
import CssIcon from "../assets/css.png";
import HtmlIcon from "../assets/html.png";
import JQuerIcon from "../assets/jquery.png";
import { useContext } from "react";
import DataContext from "../context/DataContext";
import { subtitleTextVariant } from "../animation/variants";
import { motion } from "framer-motion";
import { skillVariant } from "../animation/variants";

export default function Skill() {
  const { darkMode } = useContext(DataContext);

  const mySkills = [
    {
      name: "Html",
      image: HtmlIcon,
      delay: 0.2,
    },
    {
      name: "Css",
      image: CssIcon,
      delay: 0.3,
    },
    {
      name: "Javascript",
      image: JsIcon,
      delay: 0.4,
    },
    {
      name: "JQuery",
      image: JQuerIcon,
      delay: 0.5,
    },
    {
      name: "Bootstrap",
      image: BootstrapIcon,
      delay: 0.6,
    },
    {
      name: "React",
      image: ReactIcon,
      delay: 0.7,
    },
    {
      name: "Figma",
      image: FigmaIcon,
      delay: 0.9,
    },
  ];

  const skillElements = mySkills.map((skill) => (
    <div
      className="col-6 col-md-4 col-lg-auto"
      style={{ width: "max-content" }}
    >
      <SkillItem
        key={skill.name}
        name={skill.name}
        image={skill.image}
        darkMode={darkMode}
        custom={skill.delay}
      />
    </div>
  ));
  return (
    <section
      className={`container-fluid mt-184 ${
        darkMode ? "text-light bg-secondary" : "text-dark bg-light"
      }`}
      id="Skill"
    >
      <motion.h1
        custom={0.3}
        variants={subtitleTextVariant}
        initial="hidden"
        whileInView="visible"
        className={`_title-2 ${
          darkMode ? "text-light" : ""
        } mb-40 text-center text-lg-start`}
        style={{ transformOrigin: "left" }}
      >
        My current <span className="text-primary">Skills</span>
      </motion.h1>
      <div className="container-fluid px-0">
        <div className="row row-col-4 row-gap-40 justify-content-center">
          {skillElements}
        </div>
      </div>
    </section>
  );
}

function SkillItem({ image, name, darkMode, custom }) {
  

  const { width  } = useContext(DataContext);
  return (
    <motion.div
      drag={width >= 995 ? true : false}
      dragConstraints={skillVariant.constraint}
      custom={custom}
      variants={skillVariant}
      whileHover="hover"
      initial="hidden"
      whileInView="visible"
      className={`container-fluid d-flex flex-column align-items-center row-gap-16 _grab  ${
        darkMode ? "text-light" : "text-dark"
      }`}
    >
      <div className="d-flex justify-content-center align-items-center _skillImage">
        <img src={image} alt="" />
      </div>
      <div
        className={`rounded-2 text-center _body px-8 ${
          darkMode ? "text-light" : ""
        }`}
        style={{
          width: "max-content",
          backgroundColor: "rgba(111, 62, 244,0.5)",
        }}
      >
        {name}
      </div>
    </motion.div>
  );
}
