const Button = ({ onClick, children, leftIcon, rightIcon }) => (
  <button className="button" onClick={onClick}>
   {leftIcon} {children} {rightIcon}
  </button>
);
export default Button;
