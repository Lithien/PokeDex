import { useParams } from 'react-router-dom';
import usePokemon from './hook/usePokemon';

const PokemonDetail = () => {
  const { pokemonId } = useParams()
  const { pokemon } = usePokemon(pokemonId)

  if (!pokemon) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1 className="text-4xl font-bold text-red-500 text-center my-4">{pokemon.name}</h1>

      <div className="flex items-center justify-center my-4">
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
          alt={pokemon.name}
          className="w-64 h-64 mx-auto mb-4"
        />
      </div>

      <div className="flex flex-wrap justify-center my-4">
        <div className="border border-gray-700 rounded-lg p-4 w-full md:w-1/2 lg:w-1/3 xl:w-1/4 mx-4 my-2">
          <h2 className="text-xl font-bold text-gray-700 mb-2">Número de Pokédex</h2>
          <p className="text-lg text-center">{pokemon.id}</p>
        </div>

        <div className="border border-gray-700 rounded-lg p-4 w-full md:w-1/2 lg:w-1/3 xl:w-1/4 mx-4 my-2">
          <h2 className="text-xl font-bold text-gray-700 mb-2">Tipo</h2>
          <ul className="list-disc list-inside">
            {pokemon.types.map((type, index) => (
              <li key={index}>{type.type.name}</li>
            ))}
          </ul>
        </div>

        <div className="border border-gray-700 rounded-lg p-4 w-full md:w-1/2 lg:w-1/3 xl:w-1/4 mx-4 my-2">
          <h2 className="text-xl font-bold text-gray-700 mb-2">Habilidades</h2>
          <ul className="list-disc list-inside">
            {pokemon.abilities.map((ability, index) => (
              <li key={index}>{ability.ability.name}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex flex-wrap justify-center my-4">
        <div className="border border-gray-700 rounded-lg p-4 w-full md:w-1/2 lg:w-1/3 xl:w-1/4 mx-4 my-2">
          <h2 className="text-xl font-bold text-gray-700 mb-2">Estadísticas</h2>
          <ul className="list-disc list-inside">
            {pokemon.stats.map((stat, index) => (
              <li key={index}>{stat.stat.name}: {stat.base_stat}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PokemonDetail
