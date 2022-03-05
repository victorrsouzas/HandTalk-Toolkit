import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./Pages/Home";
import NavBar from "./Components/NavBar";
import { CssBaseline } from '@mui/material';
import Footer from "./Components/Footer";
import Loading from "./Components/Loading";

export interface IAppProps { }

const App: React.FunctionComponent<IAppProps> = (props) => {

  return (
    <>
      <BrowserRouter>
        <CssBaseline>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Footer />
        </CssBaseline>
      </BrowserRouter>
    </>
  );
};

export default App;
