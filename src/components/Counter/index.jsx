import { Container } from "./styles"
import { ButtonText } from "../ButtonText"
import { FiMinus, FiPlus } from "react-icons/fi"
import { useState } from "react"

export function Counter() {
  const [quantity, setQuantity] = useState(0)

  const increase = () => {
    if (quantity >= 10) {
      alert("Erro: A quantidade máxima é de 10 unidades")
      return
    }
    setQuantity((count) => count + 1)
  }

  const decrease = () => {
    if (quantity < 2) {
      alert("Erro: A quantidade mínima é 1 unidade")
      return
    }
    setQuantity((count) => count - 1)
  }

  return (
    <Container>
      <ButtonText icon={FiMinus} onClick={decrease} />
      <span>{quantity.toString().padStart(2, "0")}</span>
      <ButtonText icon={FiPlus} onClick={increase} />
    </Container>
  )
}
