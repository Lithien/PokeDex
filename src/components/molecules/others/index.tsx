import styled from "styled-components"
import Typography from "../../atoms/typography"
import useOthers from "./hook/useOthers"

interface Props {
  id: number
  name: string
}

interface PropsCat {
  description: string
  name: string
}
const Category = ({ description, name }: PropsCat) => {
  const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 20px;
  `
  return (
    <Wrapper>
      <Typography type="span" weight={"bold"}>{name}</Typography>
      <Typography type="span" weight={"light"}>{description}</Typography>
    </Wrapper>
  )
}

const Description = ({ id, name }: Props) => {
  const { specie } = useOthers({ id })
  console.log(specie)

  const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    padding: 20px;
  `

  return (
    <Wrapper>
      <Typography type="h2" weight={"bold"}>{name}</Typography>
      {specie && <Typography type="span" weight={"light"}>{specie[0].flavor_text ?? ''}</Typography>}
    </Wrapper>
  )
}


export { Category, Description }
