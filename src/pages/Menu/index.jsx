import { Container, Content } from "./styles"
import { AiOutlineClose } from "react-icons/ai"
import { Input } from "../../components/Input"
import { Footer } from "../../components/Footer"
import { FiSearch } from "react-icons/fi"
import { useState } from "react"
import { Link } from "react-router-dom"

export function Menu() {
  const [user, setUser] = useState({ isAdmin: false })

  return (
    <Container>
      <header>
        <Link to="/">
          <AiOutlineClose />
        </Link>
        <span>Menu</span>
      </header>

      <Content>
        <Input
          placeholder="Busque por pratos ou ingredientes"
          icon={FiSearch}
        />
        {user.isAdmin ? (
          <>
            <Link to="/new">Novo prato</Link>
            <Link to="/">Sair</Link>
          </>
        ) : (
          <Link to="/">Sair</Link>
        )}
      </Content>
      <Footer />
    </Container>
  )
}
