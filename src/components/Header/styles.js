import styled from "styled-components"

export const Container = styled.header`
  grid-area: header;
  display: flex;
  position: sticky;
  top: 0px;
  z-index: 999;
  width: 100%;
  height: 10.4rem;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
`
export const Content = styled.div`
  display: flex;
  align-items: center;

  .bar {
    display: block;
    width: 2.5rem;
    height: 0.3rem;
    margin: 0.5rem auto;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
  }

`

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 4rem ;
  
  h1 {
    font-size: 2.1rem;
  }

  span {
    font-size: 1.2rem;
    color: ${({ theme }) => theme.COLORS.BLUE_100};
    font-family: 'Roboto', sans-serif;
    font-weight: 400; 
    display: flex;
    align-items: center;
  }

  .logo {
    gap: 0.8rem;
    display: flex;
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
`