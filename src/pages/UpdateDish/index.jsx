import { Container, Form, Image, Section } from "./styles"
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { IngredientsItens } from "../../components/IngredientsItens"
import { Button } from "../../components/Button"
import { Input } from "../../components/Input"
import { Textarea } from "../../components/Textarea"
import { PiUploadSimple, PiCaretLeftBold } from "react-icons/pi"
import { Link } from "react-router-dom"

export function UpdateDish() {
  return (
    <Container>
      <Header />
      <Form>
        <header>
          <Link to="/">
            <PiCaretLeftBold />
            voltar
          </Link>
          <h1>Editar Prato</h1>
        </header>

        <div className="firstColumn">
          <Image>
            <span>Imagem do prato</span>
            <div>
              <label htmlFor="dish" className="label">
                <PiUploadSimple className="react-icon" />
                Selecione a imagem
                <Input id="dish" type="file" />
              </label>
            </div>
          </Image>

          <div className="input-wrapper">
            <label htmlFor="name" className="label">
              {" "}
              Nome{" "}
            </label>
            <Input id="name" type="text" placeholder="Ex.: Salada Ceasar" />
          </div>

          <div className="input-wrapper">
            <label htmlFor="category" className="label">
              {" "}
              Categoria{" "}
            </label>
            <div className="dishCategory">
              <select id="category">
                <option value="default" disabled>
                  Selecione a categoria
                </option>
                <option value="dishes">Pratos</option>
                <option value="drinks">Bebidas</option>
                <option value="dessert">Sobremesas</option>
              </select>
            </div>
          </div>
        </div>

        <div className="secondColumn">
          <div className="input-wrapper">
            <label htmlFor="dishIngredients" className="label">
              {" "}
              Ingredientes{" "}
            </label>
            <Section id="dishIngredients">
              <div className="ingredients">
                <IngredientsItens value="React" />
                <IngredientsItens isNew placeholder="Novo marcador" />
              </div>
            </Section>
          </div>

          <div className="input-wrapper">
            <label htmlFor="price" className="label">
              {" "}
              Preço{" "}
            </label>
            <Input id="price" type="text" placeholder="R$ 00,00" />
          </div>
        </div>

        <div className="input-wrapper">
          <label htmlFor="description" className="label">
            {" "}
            Descrição{" "}
          </label>
          <Textarea
            id="description"
            type="text"
            placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
          />
        </div>

        <div className="buttons">
          <Button className="delete" title={"Excluir prato"} />
          <Button className="save" title={"Salvar alterações"} />
        </div>
      </Form>
      <Footer />
    </Container>
  )
}
