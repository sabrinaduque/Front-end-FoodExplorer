import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/devicesBreakpoints";

export const Container = styled.div`
  max-width: 93vw;
  flex: none;
  position: relative;
  ::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.XL}) {
    max-width: 100vw;
  }
`

export const CarouselContainer = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  gap: 1.6rem;

  .buttons {
    button {
      background: none;
      border: none;
      cursor: pointer;
      color: white;
      width: 2.0rem;
      height: 29.5rem;
    }

    .reactIconLeft {
      display: flex;
      position: absolute;
      left: -2px;
      top: 21px;
      align-items: center;
      width: 20.0rem;
      background: linear-gradient(to right, #000a0f, rgba(0, 7, 10, 0.5), transparent);
    }

    .reactIconRight {
      display: flex;
      position: absolute;
      right: -54px;
      top: 21px;
      align-items: center;
      width: 16.8rem;
      background: linear-gradient(to left, transparent, #000a0f, #00070a, transparent
      );
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    .buttons {
      .reactIconLeft {
        left: -2px;
        top: 21px;
      }

      .reactIconRight {
        right: -59px;
        top: 21px;
      }
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.XL}) {
    gap: 4.7rem;
    justify-content: center;
    .buttons {
      button {
        width: 2.0rem;
        height: 46.4rem;
      }

      .reactIconLeft {
        left: -13px;
        top: 23px;
      }

      .reactIconRight {
        right: -69px;
        top: 23px;
      }
    }
  }
`

export const Card = styled.div`
  width: 52%;

  @media (min-width: ${DEVICE_BREAKPOINTS.XL}) {
    width: 20%;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    width: 30%;
  }
`
