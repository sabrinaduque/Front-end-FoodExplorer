import styled from "styled-components"

export const Container = styled.textarea`
  width: 100%;
  height: 15rem;
  margin-bottom: 2.4rem;
  border-radius: 1rem;
  padding: 1.6rem;

  border: none;
  resize: none;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
  color: ${({ theme }) => theme.COLORS.WHITE};

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_200};
  }
`
