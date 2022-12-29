import './App.css'
import Header from './components/header/header'
import Total from './components/total/total'
import Filtro from './components/filtros/filtro'
import Ventas from './components/ventas/ventas'
import { DataProvider } from './context/dataProvider'

function App() {
  return (
    <DataProvider>
      <div className="boldApp">
        <Header />
        <div className='container-app'>
          <Total />
          <Filtro />
        </div>
        <div>
          <Ventas />
        </div>
      </div>
    </DataProvider>
  )
}

export default App
