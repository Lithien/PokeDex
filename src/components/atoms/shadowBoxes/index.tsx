import styled from "styled-components"

interface Props {
  mode: 'up' | 'down'
}
const ShadowBox = styled.div<Props>`
    background-color: #FFF;
    border-radius: ${(props) => props.mode === 'up' ? '15px 15px 0 0' : '0 0 15px 15px'};
    box-shadow: ${(props => props.mode === 'up' ? '0 -5px 5px -2px rgb(0 0 0 / 28%)' : '0 5px 5px -2px rgb(0 0 0 / 28%)')};
    height: 66px;
    text-align: center;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
  `

export default ShadowBox
