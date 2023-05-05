import React from "react";
import TextField from "@mui/material/TextField";
import imageHome from "./assets/Saly-44.svg"

const Home = () => {
  return (
    <div className="h-screen overflow-y-hidden">
      <div className="md:grid md:grid-cols-2 h-full items-center mx-20 gap-20">
        <div className="gap-5 flex flex-col">
          <p className="md:text-2xl font-semibold">Bienvenid@ a ESG Classifier</p>
          <p className="md:text-8xl font-black">
            ¿Que quieres
            <br /> buscar hoy?
          </p>
          <TextField label="Buscar" variant="outlined" />
        </div>
        <img src={imageHome} alt="home" className="w-full" />
      </div>
    </div>
  );
};

export default Home;
