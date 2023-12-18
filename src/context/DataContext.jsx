import { createContext, useContext, useEffect, useState } from "react";
import PortfolioData from "../functions/portfolioData.js";
import useWindowSize from "../hook/useWindowSize";
const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true);
  const {width, height} = useWindowSize();
  const redirect = (link) => {
    window.location.hash = "#" + link;
  };
  const [currentLang, setCurrentLang] = useState(new PortfolioData().load("lang") || 'en');
  const [displayNav, setDisplayNav] = useState(false);
  const data = new PortfolioData();

  const [language, setLanguage] = useState([]);


  const saveCurrentLang = () => {
    let lang;
    language.map((item) => (item.selected ? (lang = item.id) : ""));
    data.save("lang", lang || "en");
  };

  useEffect(() => {
    setLanguage([
      {
        id: "en",
        name: "En",
        selected: currentLang === "en" ? true : false,
      },
      {
        id: "fr",
        name: "Fr",
        selected: currentLang === "fr" ? true : false,
      },
    ]);
  }, []);

  useEffect(() => {
    saveCurrentLang();
  }, [language]);

  return (
    <DataContext.Provider
      value={{
        darkMode,
        setDarkMode,
        redirect,
        language,
        setLanguage,
        width,
        height,
        displayNav,
        setDisplayNav
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
