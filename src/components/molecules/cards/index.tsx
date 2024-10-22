import styled from 'styled-components'
import { CardBoxes } from '../../atoms/cardBoxes'
import { PokemonType } from '../../../core/types'
import PokemonTypes from '../types'

interface Props {
  name?: string
  number?: string
  imageUrl?: string
  types?: PokemonType[]
}

const Card = ({ imageUrl }: Props) => {
  return (
    <CardBoxes>
      <h2>Pokemons</h2>
      <img width={80} src={imageUrl} />
    </CardBoxes>
  )
}

const DetailCard = ({ number, types = [], imageUrl, name }: Props) => {
  const DivInfo = styled.div`
    display: flex;
    flex-direction: column;

    h1 {
      margin: 5px 0;
      font-size: 24px;
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
        <h1>{name}</h1>
        <PokemonTypes types={types} />
      </DivInfo>
      <PokemonImage src={imageUrl} />
    </CardBoxes>
  )
}

const DetailVerticalCard = ({ number, name, imageUrl, types = [] }: Props) => {
  const Wrapper = styled(CardBoxes)`
    position: relative;
  `
  const DivInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    span {
      font-size: 14px;
      position: absolute;
      top: 10px;
      left: 20px;
    }
    
    h1 {
      text-transform: capitalize;
      margin: 10px 0 5px 0;
      font-size: 24px;
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
    <Wrapper mode='vertical'>
      <DivInfo>
        <span>#{number}</span>
        <h1>{name}</h1>
        <PokemonTypes types={types} />
      </DivInfo>
      <PokemonImage src={imageUrl} />
    </Wrapper>
  )
}

export { Card, DetailCard, DetailVerticalCard }
