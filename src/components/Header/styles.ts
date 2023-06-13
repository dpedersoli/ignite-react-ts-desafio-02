import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
`

export const HeaderRightSide = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  
  .location{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
    
    height: 2.375rem;
    width: 10rem;
    
    font-size: 0,875rem;
    background-color: ${props => props.theme['purple-200']};
    color: ${props => props.theme['purple-500']};
    border-radius: 4px;
    
    p{
      color: ${props => props.theme['purple-800']};
    }
  }

  button{
    background-color: ${props => props.theme['yellow-200']};
    height: 2.375rem;
    width: 2.375rem;
    border: 1px solid transparent;
    border-radius: 4px;

    display: flex;
    align-items: center;
    justify-content: center;

    position: relative;

    cursor: pointer;

      span{
        position: absolute;
        right: -0.5rem;
        top: -0.5rem;

        border-radius: 100%;
        width: 1rem;
        height: 1rem;

        background-color: ${props => props.theme['yellow-800']};
        color: ${props => props.theme['white']};
        font-size: 0.75rem;

        display: flex;
        align-items: center;
        justify-content: center;
      }

      &:hover{
        opacity: 0.7;
      }
  }
`