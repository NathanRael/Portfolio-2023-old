import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Project from "./components/Project";
import Skill from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Circle from "./components/Circle";

import { DataProvider } from "./context/DataContext";

/**
 * - Adding Responsive
 * - Adding interaction : show eye when hovering project card
 *
 */

export default function App() {
  return (
    <>
      <DataProvider>
        <div className="container-fluid p-0">
          <Circle />
          <NavBar />
        </div>
        <main className="container-fluid px-64">
          <Hero />
          <About />
          <Project />
          <Skill />
          <Contact />
          <Footer />
        </main>
      </DataProvider>
    </>
  );
}
