import { UserLayout } from "../components/UserLayout";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProduct } from "../api/products";
import Counter from "../components/Counter";

export const Detail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    getProduct(productId).then((data) => {
      setProduct(data);
    });
  }, [productId]);

  return (
    <>
      <div className="detail-content">
        
        <div className="img-contain">
          <img src={product?.imagen} alt="foto-libro" />
        </div>

        <div className="individual">
          <div className="individual__nombre">{product?.nombre}</div>
          <div className="individual__autor">{product?.autor}</div>
          <div className="individual__categoria">{product?.categoria}</div>
          <div className="individual__precio">${product.precio}</div>
          <Counter stock={5}/>
        </div>
      </div>
    </>


  );
};
