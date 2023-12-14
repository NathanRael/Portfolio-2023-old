import BootstrapIcon from "../assets/bootstrap.png";
import FigmaIcon from "../assets/figma.png";
import ReactIcon from "../assets/react.png";
import JsIcon from "../assets/javascript.png";
import CssIcon from "../assets/css.png";
import HtmlIcon from "../assets/html.png";
import JQuerIcon from "../assets/jquery.png";
import { useContext } from "react";
import DataContext from "../context/DataContext";

export default function Skill() {
  const { darkMode } = useContext(DataContext);

  return (
    <section className={`mt-184 ${darkMode ? 'text-light bg-secondary' : 'text-dark bg-light'}`} id="skill">
      <h1 className={`_title-2 ${darkMode ? 'text-light' : ''} mb-40`}>
        My current <span className="text-primary">Skills</span>
      </h1>
      <div className="container-fluid">
        <div className="row row-col-4 row-gap-40 justify-content-center">
          <div className="col-3">
            <SkillItem
              image={HtmlIcon}
              name="Html"
              darkMode={darkMode}
            />
          </div>
          <div className="col-3">
            <SkillItem
              image={CssIcon}
              name="Css"
              darkMode={darkMode}
            />
          </div>
          <div className="col-3">
            <SkillItem
              image={JsIcon}
              name="Javascript"
              darkMode={darkMode}
            />
          </div>
          <div className="col-3">
            <SkillItem
              image={JQuerIcon}
              name="JQuery"
              darkMode={darkMode}
            />
          </div>
          <div className="col-3">
            <SkillItem
              image={BootstrapIcon}
              name="Bootstrap"
              darkMode={darkMode}
            />
          </div>
          <div className="col-3">
            <SkillItem
              image={ReactIcon}
              name="React js"
              darkMode={darkMode}
            />
          </div>
          <div className="col-3">
            <SkillItem
              image={FigmaIcon}
              name="Figma"
              darkMode={darkMode}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillItem({ image, name, darkMode }) {
  return (
    <div className={`container-fluid d-flex flex-column align-items-center row-gap-16 ${darkMode ? 'text-light bg-secondary' : 'text-dark bg-light'}`}>
      <div className="d-flex justify-content-center align-items-center _skillImage">
        <img src={image} alt="" width="80" height="80" />
      </div>
      <div
        className={`rounded-2 text-center _body px-8 ${darkMode ? 'text-light' : ''}`}
        style={{
          width: "max-content",
          backgroundColor: "rgba(111, 62, 244,0.5)",
        }}
      >
        {name}
      </div>
    </div>
  );
}
