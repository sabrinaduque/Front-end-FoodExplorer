import { Container, Form, Logo, LogoDesktop } from "./styles"
import { Button } from "../../components/Button"
import { Input } from "../../components/Input"
import { Link } from "react-router-dom"
import logo from "../../assets/logos/logoHeader.svg"

export function SignIn() {
  return (
    <Container>
      <LogoDesktop>
        <div className="logo">
          <img src={logo} alt="" />
          <h1>food explorer</h1>
        </div>
      </LogoDesktop>

      <Form>
        <Logo>
          <div className="logo">
            <img src={logo} alt="" />
            <h1>food explorer</h1>
            <h2>Faça login</h2>
          </div>
        </Logo>
        <div className="inputs">
          <span>Email</span>
          <Input placeholder="Ex: exemplo@exemplo.com.br" type="text" />

          <span>Senha</span>
          <Input placeholder="No mínimo 6 caracteres" type="password" />
        </div>

        <Button title="Entrar" />

        <div className="text">
          <Link to="/register"> Criar Conta </Link>
        </div>
      </Form>
    </Container>
  )
}
