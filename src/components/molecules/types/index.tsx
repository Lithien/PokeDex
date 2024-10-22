import styled from "styled-components"
import { getTypes } from "../../../utils"
import { PokemonType } from "../../../core/types"

interface Props {
  types: PokemonType[]
  size?: string
}

const Types = styled.div<{width: string}>`
  display: flex;
  gap: 18px;
  justify-content: center;
  align-items: center;
  svg {
    width: ${({ width }) => `${width}px`}
  }
`

const PokemonTypes = ({types, size = '23'}: Props) => (
  <Types width={size}>
    {getTypes(types)}
  </Types>
)

export default PokemonTypes
