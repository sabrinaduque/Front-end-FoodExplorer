import { Container, Content, NewDish } from "./styles"
import { useNavigate, useParams } from "react-router-dom"
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { ButtonText } from "../../components/ButtonText"
import { FiMinus, FiPlus } from "react-icons/fi"
import { Button } from "../../components/Button"
import { Ingredients } from "../../components/Ingredients"
import { PiCaretLeftBold, PiReceipt } from "react-icons/pi"
import { useEffect, useState } from "react"
import { api } from "../../services/api"
import { useAuth } from "../../hooks/auth"
import { useCart } from "../../hooks/cart"

export function Details() {
  const [data, setData] = useState(null)
  const params = useParams()
  const { user } = useAuth()
  const { handleAddDishToCart, cart } = useCart()
  const [quantity, setQuantity] = useState(1)
  const [lastQuantity, setLastQuantity] = useState(0)
  let finalQuantity = parseFloat(lastQuantity) + parseFloat(quantity)

  const imageURL = data && `${api.defaults.baseURL}files/${data.image}`
  const navigation = useNavigate()

  function handleBack() {
    navigation(-1)
  }

  const increase = () => {
    if (quantity > 19) {
      alert("Erro: A quantidade máxima é de 20 unidades")
      return;
    }
    setQuantity(count => count + 1);
  };

  const decrease = () => {
    if (quantity < 1) {
      alert("Erro: A quantidade mínima é 1 unidade")
      return;
    }
    setQuantity(count => count - 1);
  };

  useEffect(() => {
    if (cart.quantity) {
      setLastQuantity(cart.quantity);
    } else {
      setLastQuantity(0);
    }
  }, [cart])


  useEffect(() => {
    async function fetchDish() {
      const response = await api.get(`/dishes/${params.id}`)
      setData(response.data)
    }

    fetchDish()
  }, [])

  return (
    <Container>
      <Header />
      <Content>
        <ButtonText icon={PiCaretLeftBold} title="voltar" onClick={handleBack} />
        {
          data &&
          <div>
            <img src={imageURL} alt="Imagem do prato" />

            <div className="infos">
              <h2>{data.title}</h2>
              <p>
                {data.description}
              </p>

              <div className="ingredients">
                {
                  data.ingredients.map(ingredient => (
                    <Ingredients
                      key={String(ingredient.id)}
                      title={ingredient.name}
                    />
                  ))
                }
              </div>

              {user.isAdmin ? (
                <div className="confirm">
                  <NewDish to="/newDish"> Novo prato </NewDish>
                </div>
              ) : (
                <div className="confirm">
                  <div className="counter">
                    <ButtonText icon={FiMinus} onClick={decrease} />
                    <span>{quantity.toString().padStart(2, "0")}</span>
                    <ButtonText icon={FiPlus} onClick={increase} />
                  </div>
                  <Button
                    className="request"
                    icon={PiReceipt}
                    title={`pedir ∙ R$ ${(parseFloat(data.price) * quantity).toFixed(2).replace(".", ",")}`}
                    onClick={() => {
                      handleAddDishToCart(finalQuantity)
                    }}
                  />
                </div>
              )}
            </div>
          </div>
        }
      </Content>
      <Footer />
    </Container>
  )
}
