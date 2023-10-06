import { useParams } from 'react-router-dom';
import CarouselSprites from './components/carousel';
import usePokemon from './hook/usePokemon';


const PokemonDetail = () => {
  const { pokemonId } = useParams()
  const { pokemon, calcStat, stats } = usePokemon(pokemonId)

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
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Pokedex Nº:</h3>
          <p className="text-xl text-center">{pokemon.id}</p>
        </div>

        <div className="my-4">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Type:</h3>
          <ul className="list-disc list-inside">
            {pokemon.types.map((type, index) => (
              <span
                className={`bg-green-100 text-gray-300 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:text-green-300 uppercase ${type.type.name}-type`}
              >
                {type.type.name}
              </span>
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
          {stats.map((stat) => (
            <>
              <div className="mb-1 text-base font-medium dark:text-white capitalize">{stat.stat.name}</div>
              <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                <div className="bg-green-600 text-xs font-medium text-green-100 text-center p-0.5 leading-none rounded-full" style={{ width: calcStat(stat.base_stat, stat.max_stat ?? 0) }}>{stat.base_stat}</div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>

  );
}

export default PokemonDetail
