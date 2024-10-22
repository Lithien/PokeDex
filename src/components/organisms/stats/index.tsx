import styled from "styled-components";
import { PokemonStat } from "../../../core/types";
import { formatStatName, getStatColor } from "../../../utils";
import CircleProgress from "../../atoms/progress";
import ShadowBox from "../../atoms/shadowBoxes";
import Typography from "../../atoms/typography";

interface Props {
  stats: PokemonStat[];
}

export const Wrapper = styled(ShadowBox)`
  width: 370px;
  height: auto;
  flex-direction: column;
  align-items: flex-start;
`

const StatWrapper = styled.div`
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
    padding: 20px;

    >div {
      flex: 0 0 40%;
    }
  `

const TitleStyled = styled(Typography)`
  font-size: 24px;
`

export const Stats = ({ stats, className }: Props & { className?: string }) => (
  <Wrapper className={className} mode="down">
    <TitleStyled type="h1" weight="bold">Stats</TitleStyled>
    <StatWrapper>
      {stats.map(stat => (
        <CircleProgress
          key={stat.stat.name}
          color={getStatColor(stat.stat.name)}
          progress={stat.base_stat}
          label={formatStatName(stat.stat.name)}
        />
      ))}
    </StatWrapper>
  </Wrapper>
)
