import { Route, Routes } from 'react-router-dom'
import Header from './components/layout/header'
import PokemonList from './components/list'
import PokemonDetail from './components/pokemon'


function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/list' element={<PokemonList />} />
        <Route path='/list/pokemon/:pokemonId' element={<PokemonDetail />} />
      </Routes>
    </>
  )
}

export default App
