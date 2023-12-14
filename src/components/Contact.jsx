import { MdButton } from "./Buttons";
import DataContext from "../context/DataContext";
import { useContext } from "react";
import myCv from '../assets/myCV.png';

export default function Contact() {
  const { darkMode } = useContext(DataContext);
  return (
    <section className={`mt-184 ${darkMode ? 'text-light bg-secondary' : 'text-dark bg-light'}`} id="contact">
      <h1 className={`_title-2 mb-40 ${darkMode ? 'text-light' : ''}`}>
        Feel free to <span className="text-primary">contact</span> me
      </h1>
      <MdButton
        name="ralaivoavy.natanael@gmail.com"
        icon="bi bi-envelope-at"
        inverseIcon={true}
        handleClick={() => {window.location.href = 'mailto:ralaivoavy.natanel@gmail.com'}}
      />

      <div className={`container-fluid _body mt-32 ${darkMode ? 'text-light' : ''}`}>
        <i className="bi bi-filetype-pdf _icon me-8"></i>
        <a href={myCv} target="_blank">Natanael-Ralaivoavy-resume.png</a>
      </div>
    </section>
  );
}
