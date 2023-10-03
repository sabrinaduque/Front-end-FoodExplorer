import styled from "styled-components"

export const Container = styled.footer`
  grid-area: footer;
  height: 7.7rem;
  width: 100%;

  display: flex;
  align-items: center;
  padding: 2.4rem 2.7rem;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
  color: ${({ theme }) => theme.COLORS.GRAY_300};

  span {
    width: 100%;
    font-size: 1.2rem;
    text-align: center;
    font-family: 'DM Sans', sans-serif;
  }
`

export const Logo = styled.div`
  width: 100%;
  display: flex;
  gap: 0.8rem;

  h1 {
    font-size: 1.5rem;
  }
`