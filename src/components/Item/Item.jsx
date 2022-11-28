import { useNavigate } from "react-router-dom";
import "./Item.scss";
import { useCartContext } from "../../context/cartContext";
import { FaShoppingCart } from "react-icons/fa";


const Item = ({id,precio,imagen,nombre,autor,categoria}) => {
  const navigate = useNavigate();
  const {addProduct} = useCartContext();

  return (
    <div className="card" onClick={() => navigate(`/product/${id}`)}>
      <div className="card__top">
        <img src={imagen} alt="libros" />
      </div>
      <div className="card__content">
        <span className="card__nombre">{nombre}</span>
        <span className="card__autor">{autor}</span>
        <span className="card__category">{categoria}</span>
        <span className="card__precio">${precio}</span>
        <button className="AddButton" 
        onClick={(e) => {e.stopPropagation();
          addProduct({id,nombre,precio,autor,categoria,imagen},1)
        
        }}>
          <FaShoppingCart/> Add to cart</button>
        <button className="DetailButton">Ver Detalle</button>
      </div>
    </div>
  );
};

export default Item;
