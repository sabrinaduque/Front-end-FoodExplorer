import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  border-radius: 1.0rem;
  padding-right: 1.6rem;

  border: ${({ theme, $isnew }) => $isnew ? `1px dashed ${theme.COLORS.GRAY_400}` : "none"};
  background-color: ${({ theme, $isnew }) => $isnew ? "transparent" : theme.COLORS.GRAY_300};
  color: ${({ theme }) => theme.COLORS.GRAY_400};

  > button {
    border: none;
    background: none;
  }

  .button-delete {
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  .button-add {
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  > input {
    height: 4.8rem;
    width: 100%;
    padding: 1rem 1.6rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;
    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_400};
    }
  }
`