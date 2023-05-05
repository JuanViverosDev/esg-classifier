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
    name: "Home",
  },
  {
    id: "products",
    path: "/products",
    name: "Products",
  },
  {
    id: "about",
    path: "/about",
    name: "About",
  },
];
