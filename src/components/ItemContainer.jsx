import { useEffect, useState } from "react";
import Item from "./Item";
import { getProducts } from "../api/products";
import { Loader } from "./Loader";
import {useParams} from "react-router-dom";

const ItemContainer = () => {
  const {categoryId} = useParams(); // Como se que el parametro se llama cateogryId lo desestruturalizamso
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setProductos([])
    setLoading(true);
    getProducts(categoryId)
      .then((items) =>{ setProductos(items); setLoading(false); })
      .catch((e) => console.log(e));
  }, [categoryId]); // Aca  vemos los cambios de ruta, viendo cuando cambia el categoryId  luego renderizo

  return (
    <div className="products">
      {loading ? <Loader /> : null}
      {productos.map((producto) => {
        return (
          <Item
            key={producto.id}
            id={producto.id}
            nombre={producto.nombre}
            autor={producto.autor}
            categoria={producto.categoria}
            precio={producto.precio}
            imagen={producto.imagen}
          />
        );
      })}
    </div>
  );
};

export default ItemContainer;
