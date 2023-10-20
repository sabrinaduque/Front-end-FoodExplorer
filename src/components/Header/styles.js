import styled from "styled-components"
import { Link } from "react-router-dom"
import { DEVICE_BREAKPOINTS } from "../../styles/devicesBreakpoints"

export const Container = styled.header`
  grid-area: header;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 10.4rem;
  position: sticky;
  top: 0px;
  z-index: 2;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 3.2rem;

  input:focus {
    border: 1px solid #82f3ff;
    box-shadow: 0 0 10px #82f3ff;
    border-radius: 0.8rem;
  }

  .menu {
    cursor: pointer;
    width: 2.4rem;
    height: 2.8rem;
    color: ${({ theme }) => theme.COLORS.WHITE};

    display: flex;
    align-items: center;
    align-content: center;
  }

  .reactIcon {
    display: none;
  }
  .pedidos {
    display: flex;
    gap: 1.5rem;

    .mobalIconReset {
      display: flex;
      align-items: center;
      border: none;
      width: fit-content;
      background: none;

      > svg {
        width: 2.5rem;
        height: 2.5rem;
        color: ${({ theme }) => theme.COLORS.WHITE};
      }
    }
  }

  .orders {
    display: none;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    width: 100%;
    padding: 0 clamp(2rem, 6vw, 12.3rem);

    .menu {
      display: none;
    }

    .pedidos {
      display: none;
    }

    .orders {
      display: flex;
      align-items: center;

      > button {
        width: clamp(14rem, 37vw, 16rem);
        padding: 0.1rem 1rem;
        background: none;
      }

      .icon {
        display: flex;
        align-items: center;
        border: none;
        width: fit-content;
        > svg {
          width: 2rem;
          height: 2rem;
          color: ${({ theme }) => theme.COLORS.WHITE};
        }
      }

      > svg {
        display: block;
        width: 5rem;
        height: 5rem;
      }
    }
  }
`

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  h1 {
    font-size: 2.1rem;
  }

  span {
    font-size: 1.2rem;
    color: ${({ theme }) => theme.COLORS.BLUE_100};
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    display: flex;
    align-items: center;
  }

  .logo {
    gap: 0.8rem;
    display: flex;
    align-items: center;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    display: flex;
    flex-direction: column;
    align-items: end;
    gap: 0;

    h1 {
      width: 14.6rem;
    }
  }
`

export const Pedidos = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-top: 0.4rem;

  > svg {
    width: 3.5rem;
    height: 3.2rem;
  }

  > span {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 1.5rem;
    left: 1.8rem;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.COLORS.RED};
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    display: none;
  }
`

export const NewDish = styled(Link)`
  display: none;

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    background-color: ${({ theme }) => theme.COLORS.RED};
    color: ${({ theme }) => theme.COLORS.WHITE};
    display: flex;
    align-items: center;
    justify-content: center;
    height: 4.8rem;
    border: 0;
    border-radius: 0.5rem;
    display: flex;
    width: clamp(32rem, 37vw, 21.6rem);
    padding: 0.1rem 1rem;

    font-weight: 500;
    font-size: 1.4rem;
  }
`

export const Logout = styled(Link)`
  display: none;

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    display: flex;
    .reactIcon {
      display: initial;
      cursor: pointer;
      width: 3.2rem;
      height: 3.2rem;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }

    .reactIcon:hover {
      color: ${({ theme }) => theme.COLORS.WHITE_100};
      cursor: pointer;
    }
  }
`
