import { Container } from "./styles"
import { ButtonText } from "../../components/ButtonText"
import pageError from "../../assets/pageError.png"
import { useNavigate } from "react-router-dom"

export function Error() {
  const navigation = useNavigate()

  function handleBack() {
    navigation(-1)
  }
  return (
    <Container>
      <ButtonText onClick={handleBack} title="come back"/>
      <img src={pageError} alt="" />
    </Container>
  )
}