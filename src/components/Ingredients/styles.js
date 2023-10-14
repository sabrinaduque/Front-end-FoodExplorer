import styled from "styled-components"

export const Container = styled.span`
  padding: 0.4rem 0.8rem;
  margin: 0 1.5rem 2rem 0;
  border-radius: 0.5rem;

  font-size: 1.4rem;
  font-family: "Poppins", sans-serif;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};
  color: ${({ theme }) => theme.COLORS.WHITE};
`
