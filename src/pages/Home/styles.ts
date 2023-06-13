import styled from "styled-components";

export const MainHeader = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: 5.75rem;

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

  h2{
    font-family: 'Baloo 2', sans-serif;
    font-size: 3rem;
  }

  p{
    font-size: 1.25rem;
    line-height: 1.8rem;
    margin-top: 1rem;
  }
`

//VER SE TEM COMO FAZER UM LOOP NO CSS PRA NÃO TER QUE REPETIR ALGUMAS PROPS
export const Qualities = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  .firstQuality{
    display: flex;
    gap: 0.75rem;
    width: 50%;

      span{
        background-color: ${props => props.theme['yellow-800']};
      }
  }

  .secondQuality{
    display: flex;
    gap: 0.75rem;
    width: 50%;

    span{
        background-color: ${props => props.theme['yellow-800']};
    }
  }

  .thirdQuality{
    display: flex;
    gap: 0.75rem;
    width: 50%;

    span{
        background-color: ${props => props.theme['yellow-800']};
    }
  }

  .fourthQuality{
    display: flex;
    gap: 0.75rem;
    width: 50%;

    span{
        background-color: ${props => props.theme['yellow-800']};
    }
  }
`
