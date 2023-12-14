import BootstrapIcon from "../assets/bootstrap.png";
import FigmaIcon from "../assets/figma.png";
import ReactIcon from "../assets/react.png";
import { BigButton } from "./Buttons";

export default function Hero() {
  return (
    <section className="container-fluid mt-200" id="home">
      <div className="row ">
        <div className="col-7 d-flex flex-column row-gap-40">
          <div className="container-fluid text-light row-gap-16">
            <p className="_lead">Web developper & designer</p>
            <h1 className="_title text-light">
              Let's <span className="text-primary">Design</span> and
              <span className="text-primary"> Develop</span> a visual appealing
              website
            </h1>
          </div>
          <div className="container-fluid">
            <BigButton name="See my project" icon="bi bi-arrow-right" />
          </div>
        </div>
        <div className="col-5 d-flex gap-48">
          <div className="container d-flex">
            <img
              src={FigmaIcon}
              className="img-fluid align-self-start"
              alt=""
            />
          </div>
          <div className="container d-flex">
            <img
              src={BootstrapIcon}
              className="img-fluid align-self-end"
              alt=""
            />
          </div>
          <div className="container d-flex">
            <img
              src={ReactIcon}
              className="img-fluid align-self-start"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}
