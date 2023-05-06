import { useLocation } from "react-router-dom";

const products = [
  {
    name: "Coca Cola",
    image:
      "https://www.coca-cola.com.mx/content/dam/GO/CokeZone/Products/COCA-COLA-600ML.png",
    description: "Refresco de cola",
    price: 15,
    category: "Bebidas",
  },
  {
    name: "Pepsi",
    image:
      "https://www.pepsi.com/es-xl/uploads/sites/2/2020/09/pepsi-regular-2l.png",
    description: "Refresco de cola",
    price: 15,
    category: "Bebidas",
  },
];

const Products = () => {
  const { find } = useLocation().search as any;

  return (
    <>
      <div className="pt-40 pb-20 shadow gap-6 flex flex-col">
        <p className="md:text-5xl font-black text-center">
          Resultados para tu busqueda:
        </p>
        <p className="md:text-5xl font-black text-center">"{find}"</p>
      </div>
      <div className="bg-zinc-200">
        {products.map((product) => (
          <div className="flex gap-4 p-4">
            <img src={product.image} alt={product.name} className="w-40" />
            <div className="flex flex-col">
              <p className="md:text-2xl font-semibold">{product.name}</p>
              <p className="md:text-xl">{product.description}</p>
              <p className="md:text-xl">${product.price}</p>

              <button className="bg-zinc-100 p-2 rounded-md">
                Agregar al carrito
              </button>

              <button className="bg-zinc-100 p-2 rounded-md">
                Comprar ahora
              </button>

              <button className="bg-zinc-100 p-2 rounded-md">
                Ver detalles
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;
