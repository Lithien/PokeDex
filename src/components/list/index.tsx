import usePokemonList from './hook/usePokemonList';

function PokemonList() {
  const { setSearchQuery, searchQuery, filteredPokemon, redirectToPokemon } = usePokemonList();

  return (
    <div>
      <h1 className="text-4xl font-bold text-red-500 text-center my-4">PokedexGo</h1>

      <div className="flex items-center justify-center my-4">
        <label htmlFor="search" className="mr-2">Buscar:</label>
        <input
          id="search"
          type="text"
          className="border border-gray-700 rounded p-2"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="flex flex-wrap justify-center">
        {filteredPokemon.map((pokemon, index) => (
          <div key={index} className="flex items-center justify-center w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-4">
            <div className="cursor-pointer border border-gray-700 rounded-lg p-2" onClick={() => redirectToPokemon(pokemon.url)}>
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`}
                alt={pokemon.name}
                className="w-24 h-24 mx-auto mb-2"
              />
              <p className="text-center text-gray-700">{pokemon.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PokemonList;

