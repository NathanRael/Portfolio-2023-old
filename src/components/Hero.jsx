import BootstrapIcon from "../assets/bootstrap.png";
import FigmaIcon from "../assets/figma.png";
import ReactIcon from "../assets/react.png";
import { BigButton } from "./Buttons";
import DataContext from "../context/DataContext";
import { useContext } from "react";

export default function Hero() {
  const { darkMode, redirect, handleNavSelected } = useContext(DataContext);

  return (
    <section
      className={`container-fluid mt-200 ${
        darkMode ? "text-light" : "text-dark"
      }`}
      id="home"
    >
      <div className="row row-gap-64">
        <div className="col-12 col-lg-7 d-flex flex-column row-gap-40">
          <div
            className={`container-fluid px-0 ${
              darkMode ? "text-light" : "text-dark"
            } row-gap-16`}
          >
            <p className="_lead">Web developer & designer</p>
            <h1 className={`_title ${darkMode ? "text-light" : ""}`}>
              Let's <span className="text-primary">Design</span> and
              <span className="text-primary"> Develop</span> a visual appealing
              website
            </h1>
          </div>
          <div className="container-fluid px-0">
            <BigButton
              name="See my project"
              icon="bi bi-arrow-right"
              darkMode={darkMode}
              handleClick={() => {
                redirect('project');
                handleNavSelected('project')
              }}
            />
          </div>
        </div>
        <div className="col-12 col-lg-5 d-none d-sm-flex gap-48">
          <div className="container-fluid d-flex">
            <img
              src={FigmaIcon}
              className="align-self-start"
              alt=""
              
            />
          </div>
          <div className="container-fluid d-flex">
            <img
              src={BootstrapIcon}
              className="align-self-end"
              alt=""
              
            />
          </div>
          <div className="container-fluid d-flex">
            <img
              src={ReactIcon}
              className="align-self-start"
              alt=""
              width='106'
            />
          </div>
        </div>
      </div>
    </section>
  );
}
