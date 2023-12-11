import { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";

export default function NavBar() {
  const [language, setLanguage] = useState([
    {
      id: "en",
      name: "En",
      selected: true,
    },
    {
      id: "fr",
      name: "Fr",
      selected: false,
    },
  ]);


  const handleLanguageSelected = (id) => {
    setLanguage((prevItem) => {
      return prevItem.map((item) =>
        id === item.id
          ? { ...item, selected: true }
          : { ...item, selected: false }
      );
    });
  };

  const location = window.location;
  const [darkMode, setDarkMode] = useState(true);

  const languageElement = language.map((item) => (
    <Language
      name={item.name}
      selected={item.selected}
      handleSelect={handleLanguageSelected}
    />
  ));

  return (
    <nav className="container-fluid py-12  text-light _body px-72 position-fixed top-0 _navbar">
      <div className="row align-items-center justify-content-between">
        <div className="col-3">
          <a href="#" className="_subtitle text-light _no-deco">
            Natanael
          </a>
        </div>
        <div className="col-6">
          <div className="container-fluid  d-flex justify-content-evenly align-items-center ">
            <NavLink id="home" active={true} name="Home" />
            <NavLink id="about" active={false} name="About" />
            <NavLink id="project" active={false} name="Project" />
            <NavLink id="skill" active={false} name="Skill" />
            <NavLink id="contact" active={false} name="Contact" />
          </div>
        </div>
        <div className="col-3 text-end ">
          <div className="container-fluid d-flex align-items-center flex-row">
            <div
              className="container-fluid d-inline-flex "
              style={{ maxWidth: "max-content" }}
            >
              {languageElement}
            </div>
            <div
              className="container-fluid"
              style={{ maxWidth: "max-content" }}
            >
                <DarkMode
                    darkMode={darkMode}
                    setDarkMode={() => setDarkMode((isDark) => !isDark)}
                />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ id, active, name }) {
  return (
    <a
      href={`#${id}`}
      className={`_no-deco ${active ? "text-primary" : "text-light"} _lead `}
    >
      {name}
    </a>
  );
}

function Language({ name, selected, handleSelect }) {
  const id = name.toLowerCase();
  return (
    <div className="container-fluid d-inline-flex text-light ">
      <input
        type="radio"
        className="btn-check"
        name="language"
        id={id}
        onChange={() => handleSelect(id)}
      />
      <label
        type="button"
        htmlFor={id}
        className={selected ? "_language text-primary" : "text-light"}
      >
        {name}
      </label>
    </div>
  );
}

function DarkMode({ darkMode = true, setDarkMode }) {
  return (
    <>
      <i 
      className={`${darkMode ? "bi bi-moon" : "bi bi-sun"} _icon`}
      onClick={setDarkMode}
      type='button'
      ></i>
    </>
  );
}
