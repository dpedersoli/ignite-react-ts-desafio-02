import styled from "styled-components";

export const Background = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${props => props.theme['gray-200']};
  width: 16rem;
  height: 19.375rem;
  border-top-left-radius: 10px;
  border-top-right-radius: 40px;
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 10px;

  img {
    width: 7.5rem;
    height: 7.5rem;
    margin-top: -1.2rem;
  }

  .tags{
    display: flex;
    gap: 0.25rem;

    .tag{
      display: flex;
      align-items: center;

      background-color: ${props => props.theme['yellow-200']};
      color: ${props => props.theme['yellow-800']};

      text-transform: uppercase;
      font-size: 0.625rem;
      font-weight: 700;

      height: 1.3125rem;
      border-radius: 8px;

      margin-top: 0.75rem;
      padding: 0 0.5rem;
    }
  }

  .title{
    font-size: 1.25rem;
    font-family: 'Baloo 2', sans-serif;
    margin-top: 1rem;
  }

  .description{
    color: ${props => props.theme['gray-600']};
    text-align: center;
    font-size: 0.875rem;
    margin: 0.5rem 1.25rem;
  }
`

export const Bottom = styled.section`
  display: flex;
  align-items: center;

  .coin{
    font-size: 0.875rem;

    .price{
      font-family: 'Baloo 2', sans-serif;
      font-size: 1.5rem;
    }
  }
`

export const Actions = styled.section`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  margin-left: 1.4375rem;
  width: 3rem;
  height: 1.5rem;
  border-radius: 4px;

  font-size: 1rem;

  background-color: ${props => props.theme['gray-400']};

  button{
    background-color: ${props => props.theme['gray-400']};
    color: ${props => props.theme['purple-500']};
    cursor: pointer;
    border: none;
    width: 100%;
  }
`

export const Cart = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  margin-left: 0.5rem;
  width: 1.5rem;
  height: 1.5rem;
  color: ${props => props.theme['white']};
  background-color: ${props => props.theme['purple-800']};
  border-radius: 4px;
  border: none;

  &:hover{
    background-color: ${props => props.theme['purple-500']};
  }
`