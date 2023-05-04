import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./@components/Navbar";
import Home from "./pages/home/Home";
import routesConfig from "./configs/navigationConfigs/routesConfig";

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          {routesConfig.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
