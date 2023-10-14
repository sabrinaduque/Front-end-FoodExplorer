import styled from "styled-components"

export const Container = styled.span`
  width: fit-content;
  padding: 0.4rem 0.8rem;
  font-family: "Poppins", sans-serif;
  color: ${({ theme }) => theme.COLORS.WHITE};
  display: flex;
  align-items: center;
  gap: 1rem;

  span {
    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  svg {
    width: 2.7rem;
    height: 2.7rem;
  }
`
