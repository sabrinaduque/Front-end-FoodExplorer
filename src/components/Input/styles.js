import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
  color: ${({ theme }) => theme.COLORS.GRAY_200};

  border-radius: 0.8rem;

  > input {
    height: 56px;
    width: 100%;
    padding: 12px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;
    border: 0;

    &:placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_200};
      font-size: 1.6rem;
    }
  }

  > svg {
    margin-left: 1.6rem;
  }
`