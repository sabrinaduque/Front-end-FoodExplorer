import styled from "styled-components"
import { Link } from "react-router-dom"
import { DEVICE_BREAKPOINTS } from "../../styles/devicesBreakpoints"

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  font-family: "Poppins", sans-serif;
  display: grid;
  grid-template-rows: 10.5rem auto 7.7rem;
  grid-template-areas:
    "header"
    "content"
    "footer";
`

export const Content = styled.div`
  grid-area: content;
  padding: 2rem 5rem 3.3rem;

  > button {
    display: flex;
    width: fit-content;
    font-size: 2.4rem;
    color: ${({ theme }) => theme.COLORS.WHITE_100};
    background: none;
    border: none;
    align-items: center;
    font-family: "Poppins", sans-serif;
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 25.4rem;
      height: 25.4rem;
      padding: 1.6rem;
    }

    .infos {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2.4rem;

      h2 {
        color: ${({ theme }) => theme.COLORS.WHITE_100};
        font-size: 2.5rem;
        font-weight: 500;
      }

      > p {
        display: flex;
        color: ${({ theme }) => theme.COLORS.WHITE_100};
        font-size: 1.5rem;
        justify-content: center;
        text-align: center;
      }

      .ingredients {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
      }
    }

    .confirm {
      display: flex;
      margin: 2rem 0 0.2rem;

      span {
        font-size: 2.2rem;
      }

      .counter {
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
        width: 1.4rem;
        height: 1.4rem;
      }
    }
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    margin: 2.4rem 12.1rem;

    > div {
      height: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;

      img {
        width: 39rem;
        height: 39rem;
        margin-right: 4.7rem;
      }

      .infos {
        align-items: flex-start;
        gap: 2.4rem;

        h2 {
          font-size: 4rem;
        }

        > p {
          font-size: 2.4rem;
          text-align: start;
        }

        .ingredients {
          width: 100%;
          gap: 1.2rem;
          justify-content: flex-start;
        }

        .confirm {
          display: flex;
          margin: 2.4rem 0 0;

          .request {
            > svg {
              display: none;
            }
          }
        }
      }
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
    margin: 1.4rem 2rem;
    padding: 2rem 5rem 3.3rem;

    > div {
      display: flex;
      flex-direction: column;
      align-items: center;

      .infos {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2.4rem;

        > p {
          display: flex;
          font-size: 1.5rem;
          justify-content: center;
          text-align: center;
        }
      }
    }
  }
`
export const NewDish = styled(Link)`
  background-color: ${({ theme }) => theme.COLORS.RED};
  color: ${({ theme }) => theme.COLORS.WHITE};
  align-items: center;
  justify-content: center;
  height: 4.8rem;
  border: 0;
  border-radius: 0.5rem;
  display: flex;
  width: 25.5rem;
  font-weight: 500;
  font-size: 1.4rem;

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    width: fit-content;
    padding: 2.4rem;
  }
`
