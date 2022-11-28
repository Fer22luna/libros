
import { useEffect, useState } from "react";
import { addOrder } from "../api/orders";
import { updateManyProducts } from "../api/products";
import { useCartContext } from "../context/cartContext";


export const Cart = () => {

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const { getTotal, cart, emptyCart } = useCartContext();



  const createOrder = async () => {

    const items = cart.map(({ id, nombre, qty, precio }) => ({
      id,
      title: nombre,
      qty,
      price: precio,
    }));


    const order = {
      buyer: { name, phone, email },
      items,
      total: getTotal(),
    };

    const id = await addOrder(order);

    await updateManyProducts(items)

    emptyCart();


  };

  return (
    <div className="contentCart">
      {cart.map((product) => (
        <div
          key={product.id}
          style={{
            display: "flex",
            gap: 50,
            height: 100,
            alignItems: "center",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <img className="CartImg" src={product.imagen} alt="libros" />
          <div style={{ fontWeight: 600 }}>{product.nombre}</div>
          <div>Cantidad : {product.qty}</div>
        </div>
      ))}
      <span
        style={{
          marginBottom: 50,
          textAlign: "right",
          width: "100%",
          fontSize: 20,
          fontWeight: 600,
        }}
      >
        Subtotal :  ${getTotal()}
      </span>
      <div style={{ display: "grid", gap: 10 }}>
        <label>Nombre completo</label>
        <input
          onChange={(e) => setName(e.target.value)}
        />
        <label>Telefono</label>
        <input
          onChange={(e) => setPhone(e.target.value)}
        />
        <label>Email</label>
        <input
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button className="OrderButton" onClick={createOrder} > Finalizar Compra</button>
    </div>
  );
};


