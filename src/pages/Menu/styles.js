import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 11.4rem auto 7.7rem;
  grid-template-areas:
    "header"
    "content"
    "footer";

  > header {
    grid-area: header;
    width: 100%;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    display: flex;
    align-items: center;
    gap: 1.4rem;
    padding: 0 2.8rem;

    svg {
      font-size: 2.3rem;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }

    span {
      font-size: 2.1rem;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }

    a {
      background: none;
      border: none;
      display: flex;
      align-items: center;
    }
  }
`

export const Content = styled.div`
  grid-area: content;
  padding: 3.6rem 2.8rem 0;

  button, a {
    padding: 1rem;
    width: 100%;
    margin-top: 3.6rem;

    display: flex;
    align-items: center;

    background: none;
    border: none;

    font-size: 2.4rem;
    font-family: "Poppins", sans-serif;

    color: ${({ theme }) => theme.COLORS.WHITE_100};
    border-bottom: 0.2rem solid #0d1d25;
  }
`
