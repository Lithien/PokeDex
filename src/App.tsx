import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/layout/header'
import PokemonList from './components/list'
import PokemonDetail from './components/pokemon'


function App() {

  return (
    <>
      <Header />
      <div className='container mx-auto'>
        <Routes>
          <Route path='/list' element={<PokemonList />} />
          <Route path='/list/pokemon/:pokemonId' element={<PokemonDetail />} />
        </Routes>
      </div>
    </>
  )
}

export default App
