import { createContext, useContext, useState } from "react";
import navlink from '../components/navlink.js';

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [navLinks, setNavLinks] = useState(navlink);
  const [darkMode, setDarkMode] = useState(true);
  const redirect = (link)=>{
    window.location.hash = '#' + link;
  }

  const handleNavSelected = (id) => {
    setNavLinks((prevNav) => {
      return prevNav.map((item) =>
        id === item.id ? { ...item, active: true } : { ...item, active: false }
      );
    });
  };

  return (
    <DataContext.Provider
      value={{
        darkMode,
        setDarkMode,
        redirect,
        handleNavSelected,
        navLinks,
        setNavLinks,
        navlink,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
