import { createContext, useContext, useState } from 'react'
import './App.css'
import Header from './components/header/header'
import Total from './components/total/total'
import Filtro from './components/filtros/filtro'
import Ventas from './components/ventas/ventas'
import { FilterProvider } from './context/filterProvider'

function App() {
  const [filter, setFilter] = useState<string>('');
  const handleFilterChange = (newFilter: string) => {
    setFilter(newFilter);
  }

  return (
    <FilterProvider>
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
    </FilterProvider>
  )
}

export default App
