import { Container, Content } from "./styles"
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { Carousel } from "../../components/Carousel"
import macarrons from "../../assets/macarrons.png"
import { useEffect, useState } from "react"
import { api } from "../../services/api"

export function Home() {
  const [search, setSearch] = useState("")
  const [dishes, setDishes] = useState([])

  useEffect(() => {
    async function fetchDishes() {
      const response = await api.get(`/dishes?title=${search}`)
      setDishes(response.data)
    }

    fetchDishes()
  }, [search])

  return (
    <Container>
      <Header setNewSearch={setSearch} />
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
          <Carousel cards={dishes.filter(dish => dish.category == "dishes")} />
        </div>

        <div className="cards">
          <span>Sobremesas</span>
          <Carousel cards={dishes.filter(dish => dish.category == "dessert")} />
        </div>

        <div className="cards">
          <span>Drinks</span>
          <Carousel cards={dishes.filter(dish => dish.category == "drinks")} />
        </div>
      </Content>
      <Footer />
    </Container>
  )
}
