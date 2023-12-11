import BootstrapIcon from "../assets/bootstrap.png";
import FigmaIcon from "../assets/figma.png";
import ReactIcon from "../assets/react.png";
import JsIcon from "../assets/javascript.png";
import CssIcon from "../assets/css.png";
import HtmlIcon from "../assets/html.png";
import JQuerIcon from "../assets/jquery.png";

export default function Skill() {
  return (
    <section className="mt-184" id="skill">
      <h1 className="text-light _title-2 mb-40">
        My current <span className="text-primary">Skills</span>
      </h1>
      <div className="container-fluid">
        <div className="row row-col-4 row-gap-40 justify-content-center">
          <div className="col-3 ">
            <SkillItem
                image={HtmlIcon}
                name='Html'
            />
          </div>    
          <div className="col-3 ">
            <SkillItem
                image={CssIcon}
                name='Css'
            />
          </div>    
          <div className="col-3 ">
            <SkillItem
                image={JsIcon}
                name='Javascript'
            />
          </div>    
          <div className="col-3 ">
            <SkillItem
                image={JQuerIcon}
                name='JQuery'
            />
          </div>    
          <div className="col-3 ">
            <SkillItem
                image={BootstrapIcon}
                name='Bootstrap'
            />
          </div>    
          <div className="col-3 ">
            <SkillItem
                image={ReactIcon}
                name='React js'
            />
          </div>    
          <div className="col-3 ">
            <SkillItem
                image={FigmaIcon}
                name='Figma'
            />
          </div>    
        </div>
      </div>
    </section>
  );
}

function SkillItem({image, name}) {
  return (
    <div className="container-fluid d-flex flex-column align-items-center row-gap-16">
      <div className="d-flex justify-content-center align-items-center _skillImage">
        <img src={image} alt="" width="80" height="80" />
      </div>
      <div
        className="text-light rounded-2 text-center _body px-8"
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
