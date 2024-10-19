import { ReactNode } from "react"
import styled from "styled-components"

interface Props {
  color: string
  width: string
  height: string
  radius: string
  children: ReactNode
  vertical?: boolean
}

const StyledBox = styled.div<Props>`
    background-color: ${props => props.color};
    width: ${props => props.width};
    height: ${props => props.height};
    border-radius: ${props => props.radius};
    box-shadow:  0 5px 3px -1px rgb(0 0 0 / 38%);
    display: flex;
    align-items: center;
    flex-direction: ${props => props.vertical ? 'column' : 'row'};
    justify-content: space-between;
    padding: 20px;
    color: #FFF;
  `

const Boxes = ({vertical = false, ...props}: Props) => (
  <StyledBox vertical={vertical} {...props}>
    {props.children}
  </StyledBox>
)

export default Boxes
