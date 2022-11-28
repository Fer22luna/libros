import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProduct } from "../api/products";
import { useCartContext } from "../context/cartContext";
import { Counter } from "../components/Counter";


export const Detail = () => {
  const { productId } = useParams();
  const { addProduct } = useCartContext();
  const [product, setProduct] = useState({});



  useEffect(() => {
    getProduct(productId).then((data) => {
      setProduct(data);
    });
  }, [productId]);

  const handleAdd = (qty) => {
    addProduct(product, qty);
  };

  if (!Object.keys(product).length) {
    return <div>Loading...</div>;
  }
  return (

    <div className="detail-content">
      <img className="img-contain" src={product?.imagen} alt="foto-libro" />
      <div className="individual">
        <span className="individual__nombre">{product?.nombre}</span>
        <div className="individual__autor">{product?.autor}</div>
        <span className="individual__categoria">{product?.categoria}</span>
        <span className="individual__precio">$ {product?.precio?.toLocaleString()}</span>
        <span className="detail__info-stock">
          ¡Quedan solo {product?.stock} disponibles!
        </span>
        <Counter stock={product?.stock} onAdd={handleAdd} />
      </div>
    </div>
  );
};
