import styled from 'styled-components'
import CardBoxes from '../../atoms/cardBoxes'
import GrassIcon from '../../../assets/icons/grass_icon'
import PoisonIcon from '../../../assets/icons/poison_icon'

interface Props {
  number: string
}

const Card = ({ number }: Props) => {
  return (
    <CardBoxes>
      <h2>Pokemons</h2>
      <img width={80} src={`https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/${number}.png`} />
    </CardBoxes>
  )
}

const DetailCard = ({ number }: Props) => {
  const DivInfo = styled.div`
    display: flex;
    flex-direction: column;

    h1 {
      margin: 5px 0;
      font-size: 24px;
    }

    .types {
      display: flex;
      gap: 20px;
      margin-top: 8px;
      justify-content: center;
      align-items: center;
    }
  `

  const PokemonImage = styled.img`
    width: 150px;
    height: auto;
    position: relative;
    right: -30px;
    z-index: 0;
  `
  return (
    <CardBoxes>
      <DivInfo>
        <span>#{number}</span>
        <h1>Bulbasaur</h1>
        <div className="types">
          <GrassIcon />
          <PoisonIcon />
        </div>
      </DivInfo>
      <PokemonImage src={`https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/${number}.png`} />
    </CardBoxes>
  )
}

const DetailVerticalCard = ({ number }: Props) => {
  const DivInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    span {
      font-size: 14px;
      position: absolute;
      top: 50px;
      left: 61px;
    }

    h1 {
      margin: 10px 0 5px 0;
      font-size: 24px;
    }

    .types {
      display: flex;
      gap: 20px;
      justify-content: center;
      align-items: center;
    }
  `

  const PokemonImage = styled.img`
    width: 150px;
    height: auto;
    position: relative;
    bottom: -10px;
    z-index: 0;
  `

  return (
    <CardBoxes mode='vertical'>
      <DivInfo>
        <span>#{number}</span>
        <h1>Bulbasaur</h1>
        <div className="types">
          <GrassIcon />
          <PoisonIcon />
        </div>
      </DivInfo>
      <PokemonImage src={`https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/${number}.png`} />
    </CardBoxes>
  )
}

export { Card, DetailCard, DetailVerticalCard }
