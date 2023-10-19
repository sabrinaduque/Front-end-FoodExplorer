import { Container, Form, Logo, LogoDesktop } from "./styles"
import { Link, useNavigate } from "react-router-dom"
import { Button } from "../../components/Button"
import { Input } from "../../components/Input"
import logo from "../../assets/logos/logoHeader.svg"
import { useState } from "react"
import { api } from "../../services/api"

export function SignUp() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  function handleSignup() {
    if(!name || !email || !password) {
      return alert("Preencha todos os campos!")
    }

    api.post("/users", { name, email, password})
    .then(() => {
      alert("Usuários cadastrado com sucesso!")
      navigate("/")
    })
    .catch(error => {
      if(error.response){
        alert(error.response.data.message)
      }else {
        alert("Não foi possível cadastrar o usuário!")
      }
    })
  }

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
          <Input 
            placeholder="Ex: Maria da Silva" 
            type="text" 
            onChange={e => setName(e.target.value)}
          />

          <span>Email</span>
          <Input 
            placeholder="Ex: exemplo@exemplo.com.br" 
            type="text" 
            onChange={e => setEmail(e.target.value)}
          />

          <span>Senha</span>
          <Input 
            placeholder="No mínimo 6 caracteres" 
            type="password" 
            onChange={e => setPassword(e.target.value)}
          />
        </div>

        <Button title="Criar conta" onClick={handleSignup} />

        <div className="text">
          <Link to="/"> Já tenho uma conta </Link>
        </div>
      </Form>
    </Container>
  )
}
