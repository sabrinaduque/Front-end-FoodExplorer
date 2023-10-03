import { Container, Logo } from "./styles";
import logo from '../../assets/logos/logoFooter.svg';

export function Footer() {
  return (
    <Container>
      <Logo >
        <img src={logo} alt="" />
        <h1>food explorer</h1>
      </Logo>

      <span>
        © 2023 - Todos os direitos reservados.
      </span>
    </Container>
  )
}