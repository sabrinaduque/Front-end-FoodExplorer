import styled from "styled-components"

export const Container = styled.button`
  display: flex;
  width: fit-content;
  font-size: 2.2rem;
  color: ${({ theme }) => theme.COLORS.WHITE_100};
  background: none;
  border: none;
  align-items: center;
  font-family: 'Poppins', sans-serif; 

  svg {
    width: 2.5rem;
    height: 2.5rem;
  }
`