import { Navbar } from './components/Navbar';
import { ItemListContainer } from './components/ItemListContainer'
import './styles/styles.scss';



function App() {
     return (
          <div >
              <Navbar />
               <ItemListContainer nombre="hola soy una props"/>
          </div>
     ); 
}

export default App;