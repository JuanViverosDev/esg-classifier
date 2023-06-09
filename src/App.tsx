import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./@components/Navbar";
import routesConfig from "./configs/navigationConfigs/routesConfig";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
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
