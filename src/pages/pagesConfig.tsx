import About from "./about/About";
import Home from "./home/Home";
import Products from "./products/Products";

export const pagesConfig = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/products/:id",
    element: <Products />,
  },
  {
    path: "*",
    element: <h1>Not Found</h1>,
  },
];

export const navigationConfig = [
  {
    id: "home",
    path: "/",
    name: "Inicio",
  },
  // {
  //   id: "about",
  //   path: "/about",
  //   name: "Sobre nosotros",
  // },
  {
    id: "products",
    path: "/products",
    name: "Productos",
  },
];
