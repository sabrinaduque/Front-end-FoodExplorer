import { Container, Content } from "./styles"
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { Carousel } from "../../components/Carousel"
import macarrons from "../../assets/macarrons.png"

export function Home() {
  return (
    <Container>
      <Header />
      <Content>
        <div className="introducion">
          <div className="macarrons">
            <img src={macarrons} alt="" />
          </div>

          <div className="text">
            <h2>Sabores inigualáveis</h2>
            <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
          </div>
        </div>

        <div className="cards">
          <span>Pratos principais</span>
          <Carousel />
        </div>

        <div className="cards">
          <span>Sobremesas</span>
          <Carousel />
        </div>

        <div className="cards">
          <span>Drinks</span>
          <Carousel />
        </div>
      </Content>
      <Footer />
    </Container>
  )
}
