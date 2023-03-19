import { useParams } from 'react-router-dom';
import CarouselSprites from './components/carousel';
import usePokemon from './hook/usePokemon';


const PokemonDetail = () => {
  const { pokemonId } = useParams()
  const { pokemon } = usePokemon(pokemonId)

  if (!pokemon) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col md:flex-row items-center justify-center border border-gray-400 rounded-lg shadow-lg p-6 my-4 mx-2">
      <div className="flex-none">
        <CarouselSprites sprites={pokemon.sprites} />
      </div>

      <div className="flex-1 ml-6">
        <h2 className="text-2xl font-bold text-red-500 mb-2">{pokemon.name}</h2>

        <div className="my-4">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Número de Pokédex:</h3>
          <p className="text-xl text-center">{pokemon.id}</p>
        </div>

        <div className="my-4">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Tipo:</h3>
          <ul className="list-disc list-inside">
            {pokemon.types.map((type, index) => (
              <li key={index} className="text-lg">{type.type.name}</li>
            ))}
          </ul>
        </div>

        <div className="my-4">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Habilidades:</h3>
          <ul className="list-disc list-inside">
            {pokemon.abilities.map((ability, index) => (
              <li key={index} className="text-lg">{ability.ability.name}</li>
            ))}
          </ul>
        </div>

        <div className="my-4">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Estadísticas:</h3>
          <ul className="list-disc list-inside">
            {pokemon.stats.map((stat, index) => (
              <li key={index} className="text-lg">{stat.stat.name}: {stat.base_stat}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>

  );
}

export default PokemonDetail
