import { PokemonType, Species } from '../../../core/types'
import styled from 'styled-components'
import Typography from '../../atoms/typography'
import ShadowBox from '../../atoms/shadowBoxes'
import { getEnvolves } from '../../../utils'
import { DetailVerticalCard } from '../../molecules/cards'
import { useEffect, useState } from 'react'
import { PokemonService } from '../../../core/services/pokemon'

interface Props {
    id: number
    types: PokemonType[]
}

const Evolutions = ({ types, id }: Props) => {
    const [evolutionsMap, setEvolutionsMap] = useState<Species[]>([])

    useEffect(() => {
        fetchEvolutions()
    }, [id])

    const fetchEvolutions = async () => {
        try {
            const response = await PokemonService.getPokemonSpecies(id)
            const chain = response.evolution_chain.url.split('/').filter(Boolean).pop()
            const evolutionResponse = await PokemonService.getEvolutionChain(chain)
            setEvolutionsMap(getEnvolves(evolutionResponse))
        } catch (error) {
            console.error('Error fetching evolutions:', error)
        }
    }


    const Wrapper = styled(ShadowBox)`
        height: auto;
        flex-direction: column;
        align-items: center;

        @media (width <= 768px) { 
            width: 100%;
            padding-bottom: 20px;
        }
    `

    const TitleStyled = styled(Typography)`
        font-size: 24px;
        width: 100%;
        text-align: left;
    `

    const EvolutionWrapper = styled.div`
        display: flex;
        flex-direction: row;
        gap: 5rem;

        @media (width <= 768px) {
            flex-direction: column;
            gap: 0;
        }
        
        >div {
            margin: 25px 0;
            position: relative;

            h1 {
                font-size: 20px;
            }
        }
    `
    return (
        <Wrapper mode='down'>
            <TitleStyled type='h3' weight='bold'>Evolutions</TitleStyled>
            <EvolutionWrapper>
                {evolutionsMap.map(evolution => (
                    <DetailVerticalCard types={types} key={evolution.number} name={evolution.name} imageUrl={evolution.imageUrl} number={evolution.number} />
                ))}
            </EvolutionWrapper>
        </Wrapper>
    )
}

export default Evolutions
