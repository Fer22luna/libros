import  {CartWidget}  from "./CartWidget";


export const Navbar = () => {
    return  <header className="header">
    <img src={"https://cdn-icons-png.flaticon.com/512/8146/8146805.png"} className="header__logo" alt="Logo"/>
    <ul class="header__lista">
        <li><a href="">Ficcion</a></li>
        <li><a href="">Manga</a></li>
        <li><a href="">Comics</a></li>
        <li><a href="">Ingles</a></li>
    </ul>
    <div className="header__icons"><CartWidget/><a href="">Carrito</a></div>
    
</header>
}

export default Navbar;



