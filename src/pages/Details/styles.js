import styled from "styled-components";

export const Container = styled.div `
  width: 100%;
  height: 100vh;
  font-family: 'Poppins', sans-serif; 
  display: grid;
  grid-template-rows: 10.5rem auto 7.7rem;
  grid-template-areas: 
  "header"
  "content"
  "footer";
`

export const Content = styled.div `
  grid-area: content;
  padding: 2rem 5rem 3.3rem;

  .infos{
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 25.4rem;
      height: 25.4rem;
      padding: 1.6rem;
    }

    h2 {
      color: ${({ theme }) => theme.COLORS.WHITE_100};
      font-size: 2.5rem;
      font-weight: 500;
    }

    > span {
      display: flex;
      color: ${({ theme }) => theme.COLORS.WHITE_100};
      font-size: 1.5rem;
      justify-content: center;
      text-align: center;
      padding: 2.3rem 0;
    }

    .ingredients {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
    }
  }

  .confirm {
    display: flex;
    margin: 4rem 0 0.2rem;
  }
`