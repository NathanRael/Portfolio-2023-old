import { useContext, useEffect } from "react";
import { useState } from "react";
import DataContext from "../context/DataContext";

export default function NavBar() {
  const { darkMode, setDarkMode, handleNavSelected, navlink, setNavLink, navLinks } = useContext(DataContext);
  
  
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

  const hashName = window.location.hash;

  useEffect(() => {
    handleNavSelected(hashName.slice(1));
  }, [hashName]);

  useEffect(() =>{
    document.querySelector('body').classList = darkMode ? 'bg-secondary' : 'bg-light';
  }, [darkMode]);

  const handleLanguageSelected = (id) => {
    setLanguage((prevItem) => {
      return prevItem.map((item) =>
        id === item.id
          ? { ...item, selected: true }
          : { ...item, selected: false }
      );
    });
  };

  // const handleNavSelected = (id) => {
  //   setNavLinks((prevNav) => {
  //     return prevNav.map((item) =>
  //       id === item.id ? { ...item, active: true } : { ...item, active: false }
  //     );
  //   });
  // };

  const languageElement = language.map((item) => (
    <Language
      key={item.name}
      name={item.name}
      selected={item.selected}
      handleSelect={handleLanguageSelected}
      darkMode={darkMode}
    />
  ));

  const navLinkElement = navLinks.map((nav) => (
    <NavLink
      key={nav.id}
      id={nav.id}
      name={nav.name}
      active={nav.active}
      handleNavSelected={handleNavSelected}
      darkMode={darkMode}
    />
  ));
  return (
    <nav
      className={`container-fluid py-12  _body px-72 position-fixed top-0 _navbar ${
        darkMode ? "text-light bg-secondary shadow" : "text-dark bg-light border-bottom shadow-sm "
      }`}
    >
      <div className="row align-items-center justify-content-between">
        <div className="col-3">
          <a
            href="#"
            className={`_subtitle ${
              darkMode ? "text-light bg-secondary" : "text-dark bg-light"
            } _no-deco`}
          >
            Natanael
          </a>
        </div>
        <div className="col-6">
          <div
            className={`container-fluid  d-flex justify-content-evenly align-items-center ${
              darkMode ? "text-light bg-secondary" : "text-dark bg-light"
            }`}
          >
            {navLinkElement}
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
              <DarkModeIcon
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

function NavLink({ id, active, name, handleNavSelected, darkMode }) {
  return (
    <a
      href={`#${id}`}
      className={`_no-deco ${
        active
          ? "text-primary"
          : darkMode
          ? "text-light bg-secondary"
          : "text-dark bg-light"
      } _lead `}
      onClick={() => handleNavSelected(id)}
    >
      {name}
    </a>
  );
}

function Language({ name, selected, handleSelect, darkMode }) {
  const id = name.toLowerCase();
  return (
    <div
      className={`container-fluid d-inline-flex ${
        darkMode ? "text-light" : "text-dark"
      }`}
    >
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
        className={` ${
          selected
            ? "_language text-primary"
            : darkMode
            ? "text-light"
            : "text-dark"
        }`}
      >
        {name}
      </label>
    </div>
  );
}

function DarkModeIcon({ darkMode = true, setDarkMode }) {
  return (
    <>
      <i
        className={`${darkMode ? "bi bi-moon" : "bi bi-sun"} _icon`}
        onClick={setDarkMode}
        type="button"
      ></i>
    </>
  );
}
