import { ReactNode } from "react"
import ShadowBox from "../../atoms/shadowBoxes"
import Typography from "../../atoms/typography"
import styled from "styled-components"

interface Props {
  label: string
  leftIcon?: ReactNode
  rightIcon?: ReactNode
}

const StyledBox = styled(ShadowBox)`
  width: 100%;
`

const Header = ({ label, leftIcon, rightIcon }: Props) => (
  <StyledBox mode="down">
    {leftIcon}
    <Typography type="h1" weight={"bold"}>
      {label}
    </Typography>
    {rightIcon}
  </StyledBox>
)

export default Header
