import React from "react";
import Navbar from "./components/organisms/Global/Navbar";
import About from "./sections/About";
import Skills from "./sections/Skills";

import { AppContainer } from "./styles";

const App: React.FC = (): JSX.Element => {
  return (
    <AppContainer>
      <Navbar />
      <About />
      <Skills />
    </AppContainer>
  );
};

export default App;
