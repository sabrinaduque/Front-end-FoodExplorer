import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
  color: ${({ theme }) => theme.COLORS.GRAY_200};

  border-radius: 0.8rem;

  > input {
    height: 4.8rem;
    width: 100%;
    padding: 1.2rem;

    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;
    border: 0;

    &:placeholder {
      font-size: 1.6rem;
      color: ${({ theme }) => theme.COLORS.GRAY_200};
    }
  }

  input:focus {
    border: 1px solid #82F3FF;
    box-shadow: 0 0 10px #82F3FF;
    border-radius: 0.8rem;
  }
`
