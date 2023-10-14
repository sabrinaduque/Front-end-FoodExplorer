import { Container, Form, Logo, LogoDesktop } from "./styles"
import { Link } from "react-router-dom"
import { Button } from "../../components/Button"
import { Input } from "../../components/Input"
import logo from "../../assets/logos/logoHeader.svg"

export function SignUp() {
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
            <h2>Crie sua conta</h2>
          </div>
        </Logo>

        <div className="inputs">
          <span>Seu nome</span>
          <Input placeholder="Ex: Maria da Silva" type="text" />

          <span>Email</span>
          <Input placeholder="Ex: exemplo@exemplo.com.br" type="text" />

          <span>Senha</span>
          <Input placeholder="No mínimo 6 caracteres" type="password" />
        </div>

        <Button title="Criar conta" />

        <div className="text">
          <Link to="/register"> Criar Conta </Link>
        </div>
      </Form>
    </Container>
  )
}
