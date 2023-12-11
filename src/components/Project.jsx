import ChatImage from "../assets/chatScrennShoot.png";
import MovieImage from "../assets/roomScreenCapture.png";
import { IconButton } from "./Buttons";

export default function Project() {
  return (
    <section className="container-fluid mt-184 " id="project">
      <h1 className="_title-2 text-light mb-40">
        My personnal <span className="text-primary">project</span>
      </h1>
      <div className="container-fluid">
        <div className="row justify-content-center">
        <div className="col-6">
            <Card
              image={MovieImage}
              title="Movie website"
              description="A modern movie website  wich can  simplify your life 
                in terms of searching new anime and watch the trailer."
            />
          </div>
          <div className="col-6">
            <Card
              image={ChatImage}
              title="ChatBot  website"
              description="A chatBot website that can help you in different topics ."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Card({ image, title, description, handleHover, handleClick }) {
  const cardImageStyle = {

  }
  return (
    <div className="_projectCard d-flex flex-column align-items-center">
      <div className="card  p-8 bg-secondary border-light rounded-4">
        <img
          src={image}
          className="card-img-top rounded-3 "
          alt=""
          type="button"
          height="319px"
          style={cardImageStyle}
          
        />
        <div className="container-fluid position-absolute top-50 start-50 translate-middle" style={{width : 'max-content'}}>
        <IconButton
            icon="bi bi-eye"
          />
        </div>
      </div>
      <div className="container-fluid m-0 mt-16   p-0">
        <h1 className="card-title _subtitle text-altlight">{title}</h1>
        <p className="card-text _lead text-altlight">{description}</p>
      </div>
    </div>
  );
}
