import NavBar from "./componentes/NavBar/NavBar";
import "bulma/css/bulma.css"
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";

function App(){
    return(
        <div>
            <NavBar/>
            <ItemListContainer greeting={"Bienvenido a BPM STORE"}/>    
        </div>
        
    )
}

export default App;
