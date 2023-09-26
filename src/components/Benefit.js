import React from "react";
import "./Allcss.css";

const Benefit = ({ setTab }) => {
    
 
  
return (
  <>
    <span className="tt" onClick={() => setTab(0)}> We Provide Following Benefits </span>
    <span className="tt2" onClick={() => setTab(1)}>  How to not get cheated on Cloud Kitchen? </span>
  </>
);
};

export default Benefit;
