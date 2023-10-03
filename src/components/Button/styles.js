import styled from "styled-components"

export const Container = styled.button`
  background-color: ${({ theme }) => theme.COLORS.RED};
  color: ${({ theme }) => theme.COLORS.WHITE};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 4.8rem;
  border: 0;
  gap: 0.8rem;
  border-radius: 0.5rem;

  font-weight: 500;
  font-size: 1.4rem;
`