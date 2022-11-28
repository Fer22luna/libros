import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../api/products";
import { ItemContainer } from "../components/ItemContainer";

export const Category = () => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setProducts([]);
    setLoading(true);
    getProducts(categoryId)
      .then((items) => {
        setProducts(items);
        setLoading(false);
      })
      .catch((e) => console.log(e));
  }, [categoryId]);

  return (
    <>
      <main className="content">
      <h2><span >{categoryId}</span>{" "}</h2>
        <ItemContainer products={products} loading={loading} />
      </main>
    </>
  );
};
