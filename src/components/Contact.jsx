import { MdButton } from "./Buttons";
export default function Contact() {
  return (
    <section className="mt-184 text-light" id="contact">
      <h1 className="_title-2 mb-40">
        Feel free to <span className="text-primary">contact</span> me
      </h1>
      <MdButton
        name="ralaivoavy.natanael@gmail.com"
        icon="bi bi-envelope-at"
        inverseIcon={true}
      />

      <div className="container-fluid _body mt-32">
        <i className="bi bi-filetype-pdf _icon me-8"></i>
        <a href="#">Natanael-Ralaivoavy-resume.pdf</a>
      </div>
    </section>
  );
}
