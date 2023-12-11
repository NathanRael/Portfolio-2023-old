import { IconButton } from "./Buttons";

export default function Footer() {
  return (
    <section className="container-fluid m-0 p-0 mb-24 d-flex justify-content-between align-items-center mt-184">
      <div className="d-flex column-gap-24">
        <IconButton icon="bi bi-facebook" href="https://github.com/nathanrael"/>
        <IconButton icon=" bi bi-github" href="https://github.com/nathanrael"/>
      </div>
      <div className="_body text-light">© Natanael ralaivoavy, 2023</div>
    </section>
  );
}
