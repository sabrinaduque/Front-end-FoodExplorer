import styled from "styled-components";
import { Link } from "react-router-dom";
import { DEVICE_BREAKPOINTS } from "../../styles/devicesBreakpoints";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;

  .card {
    position: relative;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    border: 0.2rem solid #000204;
    border-radius: 0.8rem;
    display: flex;
    width: 33.4rem;
    height: 29.2rem;
    padding: 2rem 1.4rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.2rem;
    margin: 2.4rem 0;

    a {
      font-size: 1.4rem;
      font-weight: 500;
      color: ${({ theme }) => theme.COLORS.WHITE_100};
      display: flex;
      align-items: center;
    }

    img {
      width: 8.8rem;
      height: 8.8rem;
    }

    > p {
      display: none;
    }

    > span {
      color: ${({ theme }) => theme.COLORS.BLUE_100};
      font-size: 1.6rem;
    }

    button {
      display: flex;
      flex-direction: row-reverse;
      font-size: 1.4rem;

      svg {
        width: 1.2rem;
      }
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    width: 22rem;
    .card {
      > p {
        display: flex;
        text-align: center;
        font-family: Roboto;
        font-size: 1.4rem;
        font-weight: 400;
        color: ${({ theme }) => theme.COLORS.GRAY_100};
      }
    }

    .buttonsControllers {
      display: flex;
      gap: 1.6rem;

      span {
        font-size: 2rem;
      }

      svg {
        width: 24px;
        height: 24px;
      }

      .request {
        height: 3.5rem;
      }
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.XL}) {
    width: 30.7rem;
    .card {
      display: flex;
      height: 46.2rem;
      padding: 2.4rem;

      img {
        width: 17.6rem;
        height: 17.6rem;
      }

      > span {
        font-size: 3.2rem;
      }

      a {
        font-size: 2.4rem;
        font-weight: 500;
        color: ${({ theme }) => theme.COLORS.WHITE_100};
      }

      .buttonsControllers {
        span {
          font-size: 2.9rem;
        }

        .request {
          height: initial;
        }
      }
    }
  }
`

export const Edition = styled(Link)`
  position: absolute;
  right: 1.6rem;
  top: 1.6rem;
  background: none;
  border: none;
  color: ${({ theme }) => theme.COLORS.WHITE_100};

  svg.react-icon {
    width: 2.4rem;
    height: 2.4rem;
  }
`
