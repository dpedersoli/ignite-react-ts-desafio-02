import styled from "styled-components";

export const Main = styled.section`
  display: flex;
  justify-content: space-between;

  margin-top: 5.75rem;
  height: 34rem;

  img{
    width: 29.75rem;
    height: 22.5rem;
  }
`

export const MainText = styled.div`
  display: flex;
  flex-direction: column;

  width: 36.75rem;
`

export const TitleAndSubtitle = styled.div`
  margin-bottom: 4.125rem;
  line-height: 4rem;

  h3{
    font-family: 'Baloo 2', sans-serif;
    font-size: 3rem;
  }

  h4{
    font-size: 1.25rem;
    font-weight: normal;
    line-height: 1.8rem;
    margin-top: 1rem;
  }
`

export const Qualities = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;

    span{
      width: 2rem;
      height: 2rem;
      border-radius: 100%;

      display: flex;
      align-items: center;
      justify-content: center;
    }

    div{
      display: flex;
      align-items: center;
      gap: 0.75rem;
      width: 50%;
    }

    .firstQuality{
      margin-bottom: 1.25rem;

        span{
          background-color: ${props => props.theme['yellow-800']};
        }
    }

    .secondQuality{
      margin-bottom: 1.25rem;

        span{
            background-color: ${props => props.theme['gray-700']};
        }
    }

    .thirdQuality span{
      background-color: ${props => props.theme['yellow-500']};
    }

    .fourthQuality span{
      background-color: ${props => props.theme['purple-500']};
    }
`