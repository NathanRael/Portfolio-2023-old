import { useContext, useEffect } from "react";
import { IconButton } from "./Buttons";
import { useState } from "react";
import DataContext from "../context/DataContext";
import { motion } from "framer-motion";
export default function NavBar() {
  const {
    darkMode,
    setDarkMode,
    language,
    setLanguage,
    displayNav,
    setDisplayNav,
  } = useContext(DataContext);

  const allLinks = ["Home", "About", "Project", "Skill", "Contact"];
  useEffect(() => {
    document.body.style.overflow = displayNav ? "hidden" : "auto";
  }, [displayNav]);

  useEffect(() => {
    document.querySelector("body").classList = darkMode
      ? "bg-secondary"
      : "bg-light";
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

  const languageElement = language.map((item) => (
    <Language
      key={item.name}
      name={item.name}
      selected={item.selected}
      handleSelect={handleLanguageSelected}
      darkMode={darkMode}
    />
  ));

  return (
    <nav
      className={`container-fluid py-12  _body px-16 px-md-72 position-fixed top-0 _navbar ${
        darkMode
          ? "text-light bg-secondary shadow"
          : "text-dark bg-light border-bottom shadow-sm "
      }`}
    >
      <div className="row align-items-center justify-content-between">
        <div className="col-5 col-lg-3">
          <a
            href="#"
            className={`_subtitle ${
              darkMode ? "text-light bg-secondary" : "text-dark bg-light"
            } _no-deco`}
          >
            R.Natanaël
          </a>
        </div>
        <div
          className={` d-none d-lg-block  col-12 col-lg-6 ${
            darkMode ? "bg-secondary" : "text-dark"
          }`}
        >
          <div
            className={`container-fluid  d-flex justify-content-center justify-content-lg-evenly align-items-center flex-column flex-lg-row 
            row-gap-32 
            ${darkMode ? "text-light bg-secondary" : "text-dark bg-light"}`}
          >
            {allLinks.map((item) => (
              <li className="_no-deco" key={"link-" + item}>
                <a
                  href={`#${item}`}
                  className={`_no-deco _lead  ${
                    darkMode ? "_text-light " : "_text-dark"
                  } _navLink`}
                >
                  {item}
                </a>
              </li>
            ))}
          </div>
        </div>
        {displayNav ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: displayNav ? 1 : 0 }}
            transition={{ duration: 0.8 }}
            className={`container-fluid  d-flex justify-content-center  align-items-center flex-column 
                      row-gap-32 _navLink
                      ${
                        darkMode
                          ? "text-light bg-secondary"
                          : "text-dark bg-light"
                      }`}
          >
            <div className="position-absolute top-0 end-0 p-16">
              <IconButton
                icon="bi bi-x-lg"
                handleClick={() => setDisplayNav(false)}
              />
            </div>
            {allLinks.map((item) => (
              <li className="_no-deco" key={"link-" + item}>
                <a
                  href={`#${item}`}
                  className={`_no-deco _subtitle  ${
                    darkMode ? "text-light " : "text-dark"
                  } `}
                >   
                  {item}
                </a>
              </li>
            ))}
          </motion.div>
        ) : (
          <div
            className={`col-2 d-${!displayNav ? "block" : "none"} d-lg-none `}
          >
            <IconButton
              icon="bi bi-list"
              handleClick={() => {
                setDisplayNav(true);
              }}
            />
          </div>
        )}
        <div className="col-5 col-lg-3 text-end ">
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

function Language({ name, selected, handleSelect, darkMode }) {
  const id = name.toLowerCase();
  return (
    <motion.div
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
        style={{
          visibility : "hidden",
        }}
        // className={` ${
        //   selected
        //     ? "_language text-primary"
        //     : darkMode
        //     ? "text-dark"
        //     : "text-dark"
        // }`}
      >
        {name}
      </label>
    </motion.div>
  );
}

function DarkModeIcon({ darkMode = true, setDarkMode }) {
  return (
    <>
      <motion.i
        className={`${darkMode ? "bi bi-moon" : "bi bi-sun"} _icon`}
        onClick={setDarkMode}
        type="button"
      ></motion.i>
    </>
  );
}
