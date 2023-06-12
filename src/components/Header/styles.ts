import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
`

export const RightSide = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: ${props => props.theme['yellow-800']};
  
  div{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
    
    height: 2.375rem;
    width: 10rem;
    
    font-size: 0,875rem;
    background-color: ${props => props.theme['purple-200']};
    color: ${props => props.theme['purple-500']};
    border-radius: 8px;
    
    p{
      color: ${props => props.theme['purple-800']};
    }
    
  }
`