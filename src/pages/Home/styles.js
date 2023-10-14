import styled from "styled-components"
import { DEVICE_BREAKPOINTS } from "../../styles/devicesBreakpoints"

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  font-family: "Poppins", sans-serif;
`

export const Content = styled.div`
  grid-area: content;
  padding-left: 2.4rem;

  .cards {
    > span {
      font-size: 1.8rem;
    }
  }

  .introducion {
    height: 12rem;
    border-radius: 0.2rem;
    background: linear-gradient(180deg, #091e26 0%, #00131c 100%);
    position: relative;
    margin: 4.4rem 1.5rem 6.2rem 0;

    .macarrons {
      position: absolute;
      top: -29px;
      left: -35px;

      img {
        width: 19.1rem;
        height: 14.9rem;
        animation: Sliderigth 800ms 500ms backwards;
      }
    }

    .text {
      padding: 3.6rem 0 2.2rem 14rem;
      display: flex;
      flex-direction: column;
      gap: 0.3rem;
      animation: Sliderigth 800ms 500ms backwards;

      h2 {
        font-size: 1.6rem;
        font-weight: 400;
      }

      p {
        font-size: 1.1rem;
        font-weight: 400;
      }
    }
  }

  @keyframes Sliderigth {
    from {
      opacity: 0;
      transform: translateX(38rem);
    }

    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    padding: 3.2rem 7rem;

    .introducion {
      height: 160px;
      position: relative;

      .macarrons {
        position: absolute;
        width: 19.1rem;
        height: 14.9rem;
        top: -76px;
        left: -54px;

        img {
          width: 304px;
          height: 236px;
        }
      }
      .text {
        display: flex;
        align-items: flex-end;
        justify-content: center;
        padding-right: 2rem;

        h2 {
          font-size: 3.5rem;
          font-weight: 500;
        }

        p {
          font-family: Roboto;
          font-size: 1.4rem;
        }
      }
    }

    .cards {
      > span {
        font-size: 2.4rem;
      }
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    .introducion {
      border-radius: 0.2rem;
      background: linear-gradient(180deg, #091e26 0%, #00131c 100%);
      position: relative;
      margin: 4.4rem 1.5rem 6.2rem 0;

      .macarrons {
        position: absolute;
        width: 19.1rem;
        height: 14.9rem;
        top: -76px;
        left: -54px;

        img {
          width: 368px;
          height: 237px;
        }
      }
      .text {
        display: flex;
        height: 100%;
        flex-direction: column;
        gap: 0.3rem;
        justify-content: center;
        align-items: center;

        h2 {
          font-size: 40px;
          font-weight: 500;
        }

        p {
          font-family: Roboto;
          font-size: 1.6rem;
        }
      }
    }

    .cards {
      > span {
        font-size: 3.2rem;
      }
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.XL}) {
    padding: 4.3rem 12.6rem;
    .introducion {
      height: 26rem;
      border-radius: 0.2rem;
      background: linear-gradient(180deg, #091e26 0%, #00131c 100%);
      position: relative;
      margin: 4.4rem 1.5rem 6.2rem 0;

      .macarrons {
        position: absolute;
        width: 19.1rem;
        height: 14.9rem;
        top: -76px;
        left: -54px;

        img {
          width: 588px;
          height: 336px;
        }
      }
    }
  }
`
