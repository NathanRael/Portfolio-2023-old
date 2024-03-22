import { IconButton } from "./Buttons";
import DataContext from "../context/DataContext";
import { useContext } from "react";

export default function Footer() {
  const { darkMode } = useContext(DataContext);
  const year = new Date().getFullYear();
  return (
    <section className={`container-fluid row-gap-24 flex-column flex-sm-row m-0 p-0 mb-24 d-flex justify-content-between align-items-center mt-184 ${darkMode ? 'text-light bg-secondary' : 'text-dark bg-light'}`}>
      <div className="d-flex column-gap-24">
        <IconButton icon="bi bi-facebook" href="https://www.facebook.com/profile.php?id=100087957505977" />
        <IconButton icon="bi bi-github" href="https://github.com/nathanrael"/>
      </div>
      <div className={`_body ${darkMode ? 'text-light' : ''}`}>© Natanael RALAIVOAVY, {year}</div>
    </section>
  );
}
