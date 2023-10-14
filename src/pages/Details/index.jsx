import { Container, Content, NewDish } from "./styles"
import { Link } from "react-router-dom"
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { Button } from "../../components/Button"
import { Ingredients } from "../../components/Ingredients"
import { Counter } from "../../components/Counter"
import { PiCaretLeftBold, PiReceipt } from "react-icons/pi"
import saladaRavanello from "../../assets/dishes/mainDishes/SaladaRavanello.png"
import { useState } from "react"

export function Details() {
  const [user, setUser] = useState({ isAdmin: true })

  return (
    <Container>
      <Header />
      <Content>
        <Link to="/">
          <PiCaretLeftBold />
          voltar
        </Link>

        <div>
          <img src={saladaRavanello} alt="" />

          <div className="infos">
            <h2>Salada Ravanello</h2>
            <p>
              Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.
            </p>

            <div className="ingredients">
              <Ingredients title="alface" />
              <Ingredients title="cebola" />
              <Ingredients title="pão naan" />
              <Ingredients title="pepino" />
              <Ingredients title="rabanete" />
              <Ingredients title="tomate" />
            </div>

            {user.isAdmin ? (
              <div className="confirm">
                <NewDish to="/new"> Novo prato </NewDish>
              </div>
            ) : (
              <div className="confirm">
                <Counter />
                <Button
                  className="request"
                  icon={PiReceipt}
                  title={"pedir ∙ R$ 25,00"}
                />
              </div>
            )}
          </div>
        </div>
      </Content>
      <Footer />
    </Container>
  )
}
