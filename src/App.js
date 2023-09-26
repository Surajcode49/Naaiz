import Header from "./components/Header";
import Footer from "./components/Footer";
import Benefit from "./components/Benefit";
import Page from "./components/Page";
import Page2 from "./components/Page2";
import Main from "./components/Main";
import Login from "./components/Login"
import Mainpage from "./Mainpage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";


const App = () => {
  const [tab, setTab] = useState(0);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path ="Mainpage" element={<Mainpage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
