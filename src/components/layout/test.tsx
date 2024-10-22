import PokemonBackground from "../molecules/pokemonBack"

const PokeTest = () => { 
  const types = [
    {
      "slot": 1,
      "type": {
        "name": "electric",
        "url": "https://pokeapi.co/api/v2/type/13/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/13/"
      }
    }
  ]

  const handleBackClick = () => {
    console.log('Back button clicked')
  }
  return (
    <div style={{ padding: '40px' }}>
      <PokemonBackground
        number="001"
        image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
        types={types}
        onBackClick={handleBackClick}
      />
    </div>
  )
}

export default PokeTest