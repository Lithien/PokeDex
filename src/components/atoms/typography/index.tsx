import { ReactNode } from 'react'
import styled from 'styled-components'

type TypographyTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div'
interface Props {
  type: TypographyTag
  weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 'bold' | 'light'
  color?: string
  children: ReactNode
}

const StyledTypography = styled(({ as: Component = 'div', ...props }) => <Component {...props} />)`
  font-weight: ${({ weight }) => weight || 400};
  color: ${({ color }) => (color ? `${color}` : '#000')};
  text-transform: capitalize;
`

const Typography = ({ type, children, ...props }: Props) => (
  <StyledTypography as={type} {...props}>
    {children}
  </StyledTypography>
)

export default Typography
