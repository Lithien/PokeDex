import usePokemonList from './hook/usePokemonList';

function PokemonList() {
  const { setSearchQuery, searchQuery, filteredPokemon, redirectToPokemon, getPokemons, pokemonList } = usePokemonList();

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

      <div className="flex flex-wrap justify-start">
        {filteredPokemon.map((pokemon) => (
          <div key={window.crypto.randomUUID()} className="flex items-start justify-center w-1/12 xs:w-1/2 p-2 min-w-fit">
            <div onClick={() => redirectToPokemon(pokemon.url)} className="cursor-pointer border border-gray-300 rounded-lg p-2">
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split('/')[6]}.png`}
                alt={pokemon.name}
                className="w-24 h-24 mx-auto mb-2"
                id={`pokemon_${pokemon.url.split('/')[6]}`}
                onMouseOver={e => e.currentTarget.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${pokemon.url.split('/')[6]}.png`}
                onMouseOut={e => e.currentTarget.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split('/')[6]}.png`}
              />
              <p className="text-center text-gray-300" style={{ textTransform: 'capitalize' }}>{pokemon.name.split('-')[0]}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <a
          onClick={() => getPokemons(pokemonList.previous)}
          className="flex items-center justify-center px-4 h-10 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer"
        >
          Previous
        </a>

        <a
          onClick={() => getPokemons(pokemonList.next)}
          className="flex items-center justify-center px-4 h-10 ml-3 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer"
        >
          Next
        </a>
      </div>
    </div>
  );
}

export default PokemonList;

