 import CartWidget from "../CartWidget/CartWidget.js"

 const NavBar = () => {
    return (
        <nav>
            <h3>TecnoNator</h3>
            <div>
                <button>Memoria Ram</button>
                <button>Microprocesador</button>
                <button>Teclado</button>
            </div>
            <CartWidget/>
        </nav>
    )
 }

 export default NavBar