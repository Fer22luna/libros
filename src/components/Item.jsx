import { useNavigate } from "react-router-dom";
//import Button from "./Button";

const Item = (props) => {
  const navigate = useNavigate();
  return (
    <div className="card" onClick={() => navigate(`/product/${props.id}`)}>
      <div className="card__top">
        <img src={props.imagen} alt="libros" />
      </div>
      <div className="card__content">
        <span className="card__name">{props.nombre}</span>
        <span className="card__name">{props.autor}</span>
        <span className="card__category">{props.categoria}</span>
        <span className="card__precio">${props.precio}</span>
       {/* <Button>Add to cart</Button>*/}
      </div>
    </div>
  );
};

export default Item;
