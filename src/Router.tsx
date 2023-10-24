import React from "react";
import { BrowserRouter, Routes } from "react-router-dom";



const Router = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
