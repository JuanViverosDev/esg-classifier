import { Button, TextField } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  GlobeAmericasIcon,
  UserGroupIcon,
  ScaleIcon,
} from "@heroicons/react/24/solid";

const Products = () => {
  const navigate = useNavigate();

  const find = new URLSearchParams(useLocation().search).get("find");
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);

  const handleSearch = () => {
    navigate({ pathname: `/products`, search: `?find=${search}` });
  };

  useEffect(() => {
    async function fetchData() {
      if (find) {
        await axios
          .get(`http://localhost:3001/api/${find}`)
          .then((res) => {
            setProducts(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }
    fetchData();
  }, [find]);

  return (
    <>
      {find ? (
        <>
          <div className="pt-40 pb-20 shadow gap-6 flex flex-col">
            <p className="md:text-5xl font-black text-center">
              Resultados para tu busqueda:
            </p>
            <p className="md:text-5xl font-black text-center">"{find}"</p>
          </div>
          {products?.[0] && (
            <div className="my-20 mx-20 p-10 rounded-3xl bg-yellow-300">
              <p className=" md:text-3xl font-bold mb-10">Producto destacado de la temporada:</p>
              <div className="flex p-4 justify-between bg-zinc-200 rounded-xl mb-5 items-center">
                <div className="flex gap-4">
                  <div className="flex flex-col gap-4">
                    <div>
                      <p className="md:text-2xl font-semibold">
                        {products?.[0]?.name}
                      </p>
                      <div className="md:text-xl font-medium flex gap-4">
                        <div className="flex items-center">
                          <GlobeAmericasIcon className="h-5 w-5 mr-1" />
                          <p className="">
                            {products?.[0]?.esgScore?.environment_score}
                          </p>
                        </div>
                        <div className="flex items-center">
                          <UserGroupIcon className="h-5 w-5 mr-1" />
                          <p className="">
                            {products?.[0]?.esgScore?.social_score}
                          </p>
                        </div>
                        <div className="flex items-center">
                          <ScaleIcon className="h-5 w-5 mr-1" />
                          <p className="">
                            {products?.[0]?.esgScore?.governance_score}
                          </p>
                        </div>
                      </div>
                    </div>
                    <p className="md:text-xl">{products?.[0]?.price}</p>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <button
                    className="bg-zinc-100 p-2 rounded-md"
                    onClick={() => window.open(product.url, "_blank")}
                  >
                    Comprar
                  </button>
                  <button
                    className="bg-zinc-100 p-2 rounded-md"
                    onClick={() => window.open(product.url, "_blank")}
                  >
                    Ver detalles
                  </button>
                </div>
              </div>
            </div>
          )}
          {products.map((product: any) => (
            <div className="flex p-4 justify-between bg-zinc-200 mx-20 rounded-xl mb-5 items-center">
              <div className="flex gap-4">
                <div className="flex flex-col gap-4">
                  <div>
                    <p className="md:text-2xl font-semibold">{product.name}</p>
                    <div className="md:text-xl font-medium flex gap-4">
                      <div className="flex items-center">
                        <GlobeAmericasIcon className="h-5 w-5 mr-1" />
                        <p className="">{product.esgScore.environment_score}</p>
                      </div>
                      <div className="flex items-center">
                        <UserGroupIcon className="h-5 w-5 mr-1" />
                        <p className="">{product.esgScore.social_score}</p>
                      </div>
                      <div className="flex items-center">
                        <ScaleIcon className="h-5 w-5 mr-1" />
                        <p className="">{product.esgScore.governance_score}</p>
                      </div>
                    </div>
                  </div>
                  <p className="md:text-xl">{product.price}</p>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <button
                  className="bg-zinc-100 p-2 rounded-md"
                  onClick={() => window.open(product.url, "_blank")}
                >
                  Comprar
                </button>
                <button
                  className="bg-zinc-100 p-2 rounded-md"
                  onClick={() => window.open(product.url, "_blank")}
                >
                  Ver detalles
                </button>
              </div>
            </div>
          ))}
        </>
      ) : (
        <div className="gap-5 flex flex-col h-screen items-center justify-center">
          <p className="md:text-7xl font-black">Prueba buscando algo</p>
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
      )}
    </>
  );
};

export default Products;
