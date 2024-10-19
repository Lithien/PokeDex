import { ReactNode } from "react"
import styled from "styled-components"

interface Props {
  color: string
  children: ReactNode
}

const CustomButton = (props: Props) => {
  const ButtonStyled = styled.button<Props>`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0px 20px;
    font-weight: 500;
    border: none;
    border-radius: 20px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    background-color: ${props => props.color};
    color: white;
  `

  return <ButtonStyled {...props} />
}

export default CustomButton
