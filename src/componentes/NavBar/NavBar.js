import CartWidget from "../CartWidget/CartWidget";

function NavBar(){
    return(
        <nav>
            <h3>BPM Store</h3>
            <div>
                <button>Inicio</button>
                <button>Nosotros</button>
                <button>Productos</button>
                <button>Contacto</button>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar;
