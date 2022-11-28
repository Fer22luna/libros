import { useEffect, useState } from "react";
import { Item } from "../Item";
import { Loader } from "../Loader/Loader";
import { getProducts } from "../../api/products";
import { useParams } from "react-router-dom";




const ItemContainer = ({ products }) => {
  const { categoryId } = useParams(); 
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setProductos([])
    setLoading(true);
    getProducts(categoryId)
      .then((items) => { setProductos(items); setLoading(false); })
      .catch((e) => console.log(e));
  }, [categoryId]);
  return (
    <div className="products">
      {loading ? <Loader /> : null}
      {products.map((producto) => {
        return <Item key={producto.id} {...producto} />;
      })}
    </div>
  );
};

export default ItemContainer;
