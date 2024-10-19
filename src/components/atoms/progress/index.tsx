import styled from 'styled-components';
import Typography from '../typography';
import { useEffect, useState } from 'react';

interface CircleProps {
  progress: number
  percentage?: boolean
  color: string
  label?: string
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80px;
`

const CircleWrapper = styled.div`
  width: 80px;
  height: 80px;
`;

const CircularProgress = styled.div<{ progress: number; color: string }>`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: conic-gradient(
    ${({ color, progress }) => `${color} ${progress * 3.6}deg`}, 
    black ${({ progress }) => progress * 3.6}deg 360deg
  );
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotate(180deg);
  transition: background .1s ease;
`;

const InnerCircle = styled.div`
  position: absolute;
  width: 80%;
  height: 80%;
  background-color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  transform: rotate(180deg);

  h1 {
    font-size: 24px;
  }
`;

const Label = styled.div`
  margin-top: 10px;
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  text-transform: capitalize;
  padding: 0 10px;
`

const CircleProgress = ({ progress, color, label, percentage = false }: CircleProps) => {
  const [animatedProgress, setAnimatedProgress] = useState(0)

  useEffect(() => {
    const animationDuration = 500
    const stepTime = animationDuration / progress
    let currentProgress = 0

    const interval = setInterval(() => {
      if (currentProgress < progress) {
        currentProgress += 1
        setAnimatedProgress(currentProgress)
      } else {
        clearInterval(interval);
      }
    }, stepTime)

    return () => clearInterval(interval)
  }, [progress])

  return (
    <Wrapper>
      <CircleWrapper>
        <CircularProgress progress={animatedProgress} color={color}>
          <InnerCircle>
            <Typography type='h1' color={color} weight='bold'>
              {animatedProgress}{percentage && '%'}
            </Typography>
          </InnerCircle>
        </CircularProgress>
      </CircleWrapper>
      {label && <Label>{label}</Label>}
    </Wrapper>
  );
}

export default CircleProgress;
