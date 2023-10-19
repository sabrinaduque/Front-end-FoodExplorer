import { Container, Edition } from "./styles"
import { ButtonText } from "../ButtonText"
import { FiMinus, FiPlus } from "react-icons/fi"
import { Button } from "../../components/Button"
import { Link } from "react-router-dom"
import { PiCaretRightBold, PiPencilSimpleBold, } from "react-icons/pi"
import imagePlaceholder from "../../assets/image-not-found.png"
import { useEffect, useState } from "react"
import { api } from "../../services/api"
import { useAuth } from "../../hooks/auth"
import { useCart } from "../../hooks/cart"

export function Cards(data) {
  const dish = data.data
  const { user } = useAuth()
  const { handleAddDishToCart, cart } = useCart()
  const imageURL = dish.image ? `${api.defaults.baseURL}files/${dish.image}` : imagePlaceholder
  const [quantity, setQuantity] = useState(0)
  const [lastQuantity, setLastQuantity] = useState(0)
  let finalQuantity = parseInt(lastQuantity) + parseInt(quantity)

  const increase = () => {
    if (quantity > 19) {
      alert("Erro: A quantidade máxima é de 20 unidades")
      return;
    }
    setQuantity(count => count + 1);
  }

  const decrease = () => {
    if (quantity < 1) {
      alert("Erro: A quantidade mínima é 1 unidade")
      return;
    }
    setQuantity(count => count - 1);
  }

  useEffect(() => {
    if (cart.quantity) {
      setLastQuantity(cart.quantity);
    } else {
      setLastQuantity(0);
    }
  }, [cart])

  return (
    <Container>
      {user.isAdmin ? (
        <div className="card">
          <Edition to={`/update/${dish.id}`}>
            <PiPencilSimpleBold className="react-icon" />
          </Edition>

          <img src={imageURL} alt="Imagem do prato" />

          <Link to={`/details/${dish.id}`}>
            {dish.title} <PiCaretRightBold />
          </Link>

          <p>{dish.description}</p>

          <span>R$ {dish.price}</span>
        </div>
      ) : (
        <div className="card">
          <img src={imageURL} alt="" />

          <Link to={`/details/${dish.id}`}>
            {dish.title} <PiCaretRightBold />
          </Link>

          <p>{dish.description}</p>

          <span>R$ {dish.price}</span>

          <div className="buttonsControllers">
            <div className="counter">
              <ButtonText icon={FiMinus} onClick={decrease} />
              <span>{quantity.toString().padStart(2, "0")}</span>
              <ButtonText icon={FiPlus} onClick={increase} />
            </div>
            <Button
              title={"incluir"}
              className="request"
              onClick={() => {
                handleAddDishToCart(finalQuantity)
              }}
            />
          </div>
        </div>
      )}
    </Container>
  )
}
