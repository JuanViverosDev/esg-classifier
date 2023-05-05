import About from "./about/About";
import Home from "./home/Home";

export const pagesConfig = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
];

export const navigationConfig = [
  {
    id: "home",
    path: "/",
    name: "Home",
  },
  {
    id: "about",
    path: "/about",
    name: "About",
  },
];
