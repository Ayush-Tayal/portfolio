import React, { useMemo } from "react";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { ThemeProvider as ScThemeProvider } from "styled-components";
import "./App.css";
import { ThemeModeProvider, useThemeMode, createAppTheme, GlobalStyle } from "./theme";
import Layout from "./Components/Layout/Layout";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Skills from "./Components/Skills/Skills";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Experience from "./Components/Experience/Experience";
import Projects from "./Components/Projects/Project";
import Publication from "./Components/Publication/Publication";
import Education from "./Components/Education/Education";
import Footer from "./Components/Footer/Footer";

const ThemedApp = ({ children }) => {
  const { resolvedMode } = useThemeMode();
  const theme = useMemo(() => createAppTheme(resolvedMode), [resolvedMode]);

  return (
    <MuiThemeProvider theme={theme}>
      <ScThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
      </ScThemeProvider>
    </MuiThemeProvider>
  );
};

function App() {
  return (
    <ThemeModeProvider>
      <ThemedApp>
        <div className="App">
          <Navbar />
          <Layout>
            <Home />
            <About />
            <Skills />
            <Experience />
            <Education />
            <Projects />
            <Publication />
            <Contact />
            <Footer />
          </Layout>
        </div>
      </ThemedApp>
    </ThemeModeProvider>
  );
}

export default App;
