import { useState  } from "react";
import Button from "./Button";

const Counter = ({ stock, onAdd }) => {

  const [contador, setContador] = useState(0);

  const handleAdd = () => {
    if(contador < stock){
    setContador(contador + 1);
    console.log(contador)
    }
  };

  const handleSubstract = () => {
    if(contador > 0) setContador(contador - 1);
  };

  return (
    <div className="grid" >
      <Button onClick={() => handleAdd()}> + </Button>
      <span>{contador}</span>
      <Button onClick={() => handleSubstract()}> - </Button>
      <Button onClick={() => {
       if(contador) onAdd()     
        }}> Add to cart </Button>
    </div>
  );
};

export default Counter;
