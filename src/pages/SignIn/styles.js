import styled from "styled-components"
import { DEVICE_BREAKPOINTS } from "../../styles/devicesBreakpoints"

export const Container = styled.div`
  width: 100%;
  margin-top: 12rem;
  padding: 0 4.7rem;

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    display: flex;
    align-items: center;
  }
`

export const Form = styled.form`
  max-width: 340px;
  margin: 30px auto 0;

  > div:nth-child(4) {
    margin-top: 24px;
  }

  .inputs {
    margin-bottom: 3.2rem;
    span {
      font-family: Roboto;
      font-size: 1.6rem;
      font-weight: 400;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
      display: block;
      margin: 3.2rem 0 1.6rem;
    }
  }

  .text {
    display: flex;
    justify-content: center;
    a {
      font-size: 1.4rem;
      font-weight: 500;
      color: ${({ theme }) => theme.COLORS.WHITE_100};
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    max-width: 476px;
    height: 621px;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    padding: 64px;
    border-radius: 16px;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    width: clamp(250px, 100vh, 476px);

    margin-right: 108px;
  }
`

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  h1 {
    font-size: 3.7rem;
  }

  h2 {
    display: none;
  }

  .logo {
    gap: 0.8rem;
    display: flex;
    margin-bottom: 2.1rem;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    justify-content: center;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    h2 {
      display: initial;
      font-size: 3.7rem;
    }

    h1 {
      display: none;
    }

    img {
      display: none;
    }
  }
`

export const LogoDesktop = styled.div`
  display: none;

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    display: flex;
    margin-left: 1rem;

    .logo {
      gap: 0.8rem;
      display: flex;
      margin-bottom: 2.1rem;

      h1 {
        font-size: 4.2rem;
      }

      img {
        width: 4.9rem;
        height: 4.7rem;
      }
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.XL}) {
    margin-left: 15.3rem;
  }
`
