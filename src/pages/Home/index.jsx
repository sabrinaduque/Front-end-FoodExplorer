import { Container, Content } from "./styles"
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { Carousel } from "../../components/Carousel"
import macarrons from "../../assets/macarrons.png"
import { useEffect, useState } from "react"
import { api } from "../../services/api"

const categorys = {
  dishes: "Pratos Principais",
  dessert: "Sobremesas",
  drinks: "Bebidas"
}

export function Home() {
  const [search, setSearch] = useState("")
  const [dishes, setDishes] = useState([])
  
  function getUniqueCategories() {
    return Object.keys(categorys).filter(category => dishes.find(dish => dish.category === category))
  }
  
  
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

        {getUniqueCategories().map(category => (
          <div key={category} className="cards">
            <span>{categorys[category]}</span>
            <Carousel cards={dishes.filter(dish => dish.category === category)} />
          </div>
        ))}
      </Content>
      <Footer />
    </Container>
  )
}
