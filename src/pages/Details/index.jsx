import { Container, Content } from "./styles"
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"
import { Ingredients } from "../../components/Ingredients"
import { Counter } from "../../components/Counter"
import { PiCaretLeftBold, PiReceipt } from 'react-icons/pi'
import saladaRavanello from "../../assets/dishes/mainDishes/SaladaRavanello.png"
import { useState } from "react"

export function Details() {
  const [user, setUser] = useState({ isAdmin: true })

  return (
    <Container>
      <Header />
      <Content>
        <ButtonText
          icon={PiCaretLeftBold}
          title={"voltar"}
        />

        <div className="infos">
          <img src={saladaRavanello} alt="" />
          <h2>Salada Ravanello</h2>
          <span>
            Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.
          </span>

          <div className="ingredients">
            <Ingredients title="alface" />
            <Ingredients title="cebola" />
            <Ingredients title="pão naan" />
            <Ingredients title="pepino" />
            <Ingredients title="rabanete" />
            <Ingredients title="tomate" />
          </div>
        </div>
        {
          user.isAdmin ?
            <div className="confirm">
              <Button
                title={"Editar prato"}
              />
            </div>
            :
            <div className="confirm">
              <Counter />
              <Button
                icon={PiReceipt}
                title={"pedir ∙ R$ 25,00"}
              />
            </div>
        }

      </Content>

      <Footer />
    </Container>
  )
}