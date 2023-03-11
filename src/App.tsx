import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { PokemonService } from './core/services/pokemon'
import TableList from './components/table'
import { TableResponse } from './core/types'


function App() {
  const [data, setData] = useState<TableResponse>()
  
  useEffect(() => {
    // PokemonService.getPokemonByName('ditto').then(response => console.log(response)).catch(e => console.log(e))
    PokemonService.getAllPokemons({ limit: 1000 })
    .then(response => setData(response))
    .catch(e => console.log(e))
  }, [])
  
  

  return (
    <div className="App">
      <TableList data={data} />
    </div>
  )
}

export default App
