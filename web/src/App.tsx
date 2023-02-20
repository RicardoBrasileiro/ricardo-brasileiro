import React from "react";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";

import { AppContainer, GlobalStyle } from "./styles";

const App: React.FC = (): JSX.Element => {
  return (
    <AppContainer>
      <GlobalStyle />
      <About />
      <Projects />
      <Skills />
      <Contact />
      {/* <Footer /> */}
    </AppContainer>
  );
};

export default App;
