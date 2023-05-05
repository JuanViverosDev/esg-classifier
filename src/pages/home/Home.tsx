import TextField from "@mui/material/TextField";
import imageHome from "./assets/Saly-44.svg";
import { useState } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");

  const handleSearch = () => {
    navigate({ pathname: `/products`, search: `?find=${search}` });
  };

  return (
    <div className="h-screen overflow-y-hidden">
      <div className="md:grid md:grid-cols-2 h-full items-center mx-20 gap-20">
        <div className="gap-5 flex flex-col">
          <p className="md:text-2xl font-semibold">
            Bienvenid@ a ESG Classifier
          </p>
          <p className="md:text-8xl font-black">
            ¿Que quieres
            <br /> buscar hoy?
          </p>
          <form className="flex gap-4" onSubmit={handleSearch}>
            <TextField
              label="Escribe un producto"
              variant="outlined"
              value={search}
              fullWidth
              onChange={(e) => setSearch(e.target.value)}
            />
            <Button variant="contained" color="primary" onClick={handleSearch}>
              Buscar
            </Button>
          </form>
        </div>
        <img src={imageHome} alt="home" className="w-full" />
      </div>
    </div>
  );
};

export default Home;
