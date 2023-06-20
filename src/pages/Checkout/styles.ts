import styled from "styled-components";

export const CheckoutContent = styled.main`
  display: flex;
  gap: 2rem;

  margin-top: 2.5rem;
`

export const LeftSection = styled.section`
  display: flex; //TIRAR?
  flex-direction: column; //TIRAR?

    h4 {
      font-size: 1.125rem;
      font-family: 'Baloo 2', sans-serif;
    }
`

export const LeftUpSection = styled.div`
  margin-top: 0.9375rem;
  margin-bottom: 0.75rem;
  padding: 2.5rem;

  background-color: ${props => props.theme['gray-200']};

  
    .header{
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    p{ 
      font-size: 0.8rem;
      margin: 0.2rem 0 0 1.85rem ;
    }
`

export const LeftDownSection = styled.div`
  background-color: ${props => props.theme['gray-200']};
`

export const Actions = styled.section`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  margin-left: 1.4375rem;
  width: 3.3rem;
  height: 1.8rem;
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