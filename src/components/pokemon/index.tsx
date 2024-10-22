import { useParams } from 'react-router-dom';
import usePokemon from './hook/usePokemon';
import styled from 'styled-components';
import Header from '../molecules/headers';
import PokeballIcon from '../../assets/icons/pokeball';
import { Stats, Wrapper } from '../organisms/stats';
import Evolutions from '../organisms/evolution';
import ChevronLeft from '../../assets/icons/chevron-left';
import PokemonBackground from '../molecules/pokemonBack';
import { Description } from '../molecules/others';

const PokemonDetail = () => {
  const { pokemonId } = useParams()
  const { pokemon } = usePokemon(pokemonId)

  if (!pokemon) {
    return <div>Loading...</div>;
  }
  const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background: #fff;
  width: 100%;
  margin: auto;
`

  const StatStyled = styled(Stats)`
    width: 600px;
    @media (width <= 768px) {
      width: 100%;    
    }

  ${Wrapper} {
    > div > div{
        flex: 0 0 50%;
    }
  }
`
const onClickCallBack = () => {
  
}


  return (
    <Card>
      <Header label={pokemon.name} leftIcon={<ChevronLeft />} rightIcon={<PokeballIcon />} />
      <PokemonBackground onBackClick={onClickCallBack} number={pokemon.id} types={pokemon.types} />
      <Description id={pokemon.id} name={pokemon.name} />
      {/* info */}
      {/* stats */}
      <StatStyled stats={pokemon.stats} />
      <Evolutions id={pokemon.id} types={pokemon.types} />
    </Card>
  );
}

export default PokemonDetail
