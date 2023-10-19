import styled from "styled-components"
import { DEVICE_BREAKPOINTS } from "../../styles/devicesBreakpoints";

export const Container = styled.button`
  display: flex;
  width: fit-content;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.COLORS.WHITE_100};
  background: none;
  border: none;
  align-items: center;
  font-family: 'Poppins', sans-serif; 

  svg {
    width: 2.5rem;
    height: 2.5rem;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    font-size: 2.4rem;
    font-weight: 700;
  }
`