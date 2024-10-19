import { ReactNode } from "react"
import Boxes from "../boxes"

interface Props {
  mode?: 'vertical' | 'horizontal'
  children?: ReactNode
}
const CardBoxes = ({ mode = 'horizontal', children }: Props) => {
  return (
    mode === 'horizontal' ? (
      <Boxes color="#1E1E1E" height="140px" width="270px" radius="15px">{children}</Boxes>
    ) : (
      <Boxes vertical color="#1E1E1E" height="220px" width="180px" radius="15px">{children}</Boxes>
    )
  )
}

export default CardBoxes
