import { Container, Content } from "./styles"
import { AiOutlineClose } from "react-icons/ai"
import { Input } from "../../components/Input"
import { Footer } from "../../components/Footer"
import { FiSearch } from "react-icons/fi"
import { useAuth } from "../../hooks/auth"
import { ButtonText } from "../../components/ButtonText"
import { Link, useNavigate } from "react-router-dom"

export function Menu() {
  const { signOut, user } = useAuth()
  const navigation = useNavigate()

  function handleBack() {
    navigation(-1)
  }

  function handleSignOut() {
    navigation("/")
    signOut()
  }

  return (
    <Container>
      <header>
        <ButtonText icon={AiOutlineClose} onClick={handleBack} />
        <span>Menu</span>
      </header>

      <Content>
        <Input
          placeholder="Busque por pratos ou ingredientes"
          icon={FiSearch}
        />
        {user.isAdmin ? (
          <>
            <Link to="/newDish">Novo prato</Link>
            <ButtonText
              onClick={handleSignOut}
              title="Sair"
            />
          </>
        ) : (
          <ButtonText
            onClick={handleSignOut}
            title="Sair"
          />
        )}
      </Content>
      <Footer />
    </Container>
  )
}
