import { Link, NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";

const links = ["Ingles", "Autoayuda", "Ciencia ficcion"];

export const Navbar = () => {
  return (
    <header className="header">
      <Link to="/">
        <img
          src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtARl66StdwcO8_oAiMjCkJ2JVgl3jaDSEnw&usqp=CAU"}
          className="header__logo" alt="logo"
        />
      </Link>
      <div className="header__nav">
        {links.map((elemento) => {
          return (
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "#4C3575" : "#000000",
                fontSize: isActive ? 16 : 15,
                textDecoration: isActive ? "underline #CA82FF" : "none",
              })}
              to={`/category/${elemento}`}
              key={elemento}
            >
              {elemento}
            </NavLink>
          );
        })}
      </div>
      <div>
        <Link to="/cart">
          <CartWidget/>
        </Link>
      </div>
    </header>
  );
};

