import styled from 'styled-components'
import PokemonTypes from '../types'
import { PokemonType } from '../../../core/types'
import ChevronLeft from '../../../assets/icons/chevron-left'

interface Props {
  number: number
  types: PokemonType[]
  onBackClick?: () => void
}

const PokemonBackground = ({ number, types, onBackClick }: Props) => {

  const CardContainer = styled.div`
    position: relative;
    width: 500px;
    height: 500px;
    background: url('/assets/background.png') no-repeat center center/cover;
    border-radius: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    padding: 16px;
    text-align: center;

    @media (width <= 768px) { 
      width: 100%;
      height: auto;
    }
`

  const BackButton = styled.button`
    position: absolute;
    top: 16px;
    left: 16px;
    background-color: rgba(0, 0, 0, 0.7);
    border: none;
    border-radius: 50%;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: white;
    font-size: 18px;
    @media (width <= 768px) {
      display: none;
    }
`

  const PokemonNumber = styled.div`
    position: absolute;
    top: 16px;
    right: 16px;
    background-color: rgba(0, 0, 0, 0.7);
    color: #fff;
    padding: 4px 8px;
    border-radius: 10px;
    font-weight: bold;
`

  const PokemonImage = styled.img`
    width: 100%;
    max-width: 260px;
    margin: 100px auto 20px auto;
    display: block;
`

  return (
    <CardContainer>
      {onBackClick && (
        <BackButton onClick={onBackClick}>
          <ChevronLeft />
        </BackButton>
      )}
      <PokemonNumber>{number}</PokemonNumber>
      <PokemonImage src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${number}.png`} alt="Pokémon" />
      <PokemonTypes types={types} size='30'/>
    </CardContainer>
  )
}

export default PokemonBackground
