import Header from "./components/Header";
import Footer from "./components/Footer";
import Benefit from "./components/Benefit";
import Page from "./components/Page";
import Page2 from "./components/Page2";
import Main from "./components/Main";

import { useState } from "react";

const Mainpage = () => {
  const [tab, setTab] = useState(0);
  return (
    <>
      <Header />
      <Main />
      <Benefit setTab={setTab} />

      {tab === 0 ? <Page /> : <Page2 />}

      <Footer />
    </>
  );
};

export default Mainpage;
