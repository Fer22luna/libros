import "./Button.scss"

const Button = ({ onClick, label, children, disabled }) => (
  <button className="AllButtons" onClick={onClick} disabled={disabled}>
  {label || children} 
  </button>
);
export default Button;
