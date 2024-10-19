import { ReactNode } from "react"
import styled, { css } from "styled-components"
import XmarkIcon from "../../../assets/icons/xmark"

type IconPosition = "left" | "right"

interface Props {
  type: string
  icon?: ReactNode
  close?: boolean
  closeColor?: string
  children: ReactNode
  onClick?: () => void
}

const ButtonStyled = styled.button<{ type: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 10px;
  font-weight: lighter;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  background-color: ${({ theme, type }) => theme.getColorByType(type)};
  color: white;
`

const IconWrapper = styled.span<{ position: IconPosition }>`
  display: flex;
  align-items: center;

  /* Margen dinámico según la posición */
  ${({ position }) =>
    position === "left"
      ? css`
          margin-right: 8px;
        `
      : css`
          margin-left: 8px;
        `}
`

export const FilterButton = ({
  type,
  icon,
  close = false,
  closeColor = '1E1E1E',
  children,
  onClick,
}: Props) => {
  return (
    <ButtonStyled type={type} onClick={onClick}>
      {icon && <IconWrapper position="left">{icon}</IconWrapper>}
      {children}
      {close && <IconWrapper position="right" style={{ color: `#${closeColor}`}}>{<XmarkIcon  />}</IconWrapper>}
    </ButtonStyled>
  )
}
