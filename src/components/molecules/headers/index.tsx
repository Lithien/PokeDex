import { ReactNode } from "react"
import ShadowBox from "../../atoms/shadowBoxes"
import Typography from "../../atoms/typography"

interface Props {
  label: string
  leftIcon: ReactNode
  rightIcon: ReactNode
}

const Header = ({ label, leftIcon, rightIcon }: Props) => {
  return (
    <ShadowBox mode="down">
      {leftIcon}
      <Typography type="h1" weight={"bold"}>
        {label}
      </Typography>
      {rightIcon}
    </ShadowBox>
  )
}

export default Header
