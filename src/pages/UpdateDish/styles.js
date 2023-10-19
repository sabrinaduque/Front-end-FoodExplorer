import styled from "styled-components"
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

export const Form = styled.form`
  grid-area: content;
  padding: 1.1rem 3.2rem 5.3rem;

  header {
    a {
      display: flex;
      width: fit-content;
      font-size: 1.6rem;
      color: ${({ theme }) => theme.COLORS.WHITE_100};
      background: none;
      border: none;
      align-items: center;
      font-family: "Poppins", sans-serif;
    }
    svg {
      width: 2.2rem;
      height: 2.2rem;
    }
    h1 {
      margin: 2.4rem 0;
    }
  }

  .configButtons {
    display: flex;
    gap: 3.2rem;
    .save {
      background-color: ${({ theme }) => theme.COLORS.PINK};
    }
  }

  .input-wrapper {
    display: flex;
    flex-direction: column;

    .label {
      font-family: Roboto;
      font-size: 1.6rem;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
      margin: 2.4rem 0 1.6rem;
    }
  }

  .dishCategory select {
    border-radius: 0.5rem;
    border: none;

    height: 4.8rem;
    width: 100%;
    padding: 1.2rem;

    font-size: 1.6rem;
    line-height: 2.6rem;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    padding: 4rem 12.3rem;
    .firstColumn {
      display: grid;
      grid-template-columns: 22.9rem auto 36.4rem;
      gap: 3.2rem;
    }

    .secondColumn {
      display: grid;
      grid-template-columns: 83.7rem auto;
      gap: 3.2rem;
      margin: 3.2rem 0;
    }

    .configButtons {
      display: flex;
      gap: 3.2rem;

      .delete {
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
      }

      .save {
        background-color: ${({ theme }) => theme.COLORS.PINK};
      }
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    padding: 4rem 8rem;

    header {
      a {
        font-weight: 700;
        font-size: 2.4rem;

        svg {
          width: 2.4rem;
          height: 2.4rem;
        }
      }
    }
    .firstColumn {
      display: grid;
      grid-template-columns: 22.9rem auto 15rem;
      gap: 3.2rem;
    }

    .secondColumn {
      display: grid;
      grid-template-columns: auto 25.1rem;
      gap: 3.2rem;
      margin: 3.2rem 0;
    }
    .configButtons {
      display: flex;
      gap: 3.2rem;
      justify-content: flex-end;

      .delete {
        width: fit-content;
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
      }

      .save {
        width: fit-content;
        background-color: ${({ theme }) => theme.COLORS.PINK};
      }
    }
  }
`

export const Image = styled.div`
  display: flex;
  gap: 1.6rem;
  flex-direction: column;
  margin-top: 2.4rem;

  > span {
    display: flex;
    font-family: Roboto;
    font-size: 1.6rem;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    display: block;
  }
  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
    height: 4.8rem;
    border-radius: 0.8rem;

    svg.react-icon {
      width: 24px;
      height: 24px;
      margin: -0.4rem 0.8rem;
      align-items: center;
    }

    input[type="file"] {
      display: none;
    }
  }
`

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.COLORS.BACKGROUND_600};
  border-radius: 8px;
  padding: 0.8rem;
  align-items: start;
  justify-content: center;
  gap: 1.6rem;

  .ingredients {
    height: 32px;
    border-radius: 8px;
    display: flex;
    gap: 1.6rem;
  }
`
