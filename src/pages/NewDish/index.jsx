import { Container, Form, Image, Section } from "./styles"
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { IngredientsItens } from "../../components/IngredientsItens"
import { ButtonText } from "../../components/ButtonText"
import { useNavigate } from "react-router-dom"
import { Button } from "../../components/Button"
import { Input } from "../../components/Input"
import { Textarea } from "../../components/Textarea"
import { PiUploadSimple, PiCaretLeftBold } from "react-icons/pi"
import { useState } from "react"
import { api } from "../../services/api"
import { useAuth } from "../../hooks/auth";

export function NewDish() {
  const [title, setTitle] = useState("")
  const [category, setCategory] = useState("")
  const [price, setPrice] = useState("")
  const [description, setDescription] = useState("")
  const [image, setImage] = useState(null);
  const [ingredients, setIngredients] = useState([])
  const [newIngredients, setNewIngredients] = useState("")
  const [loading, setLoading] = useState(false);
  const { user } = useAuth()

  const navigation = useNavigate()

  function handleBack() {
    navigation(-1)
  }


  function handleChangeImage(event) {
    const file = event.target.files[0]
    setImage(file)
  }

  function handleAddIngredients() {
    setIngredients((prevState) => [...prevState, newIngredients])
    setNewIngredients("")
  }

  function handleRemoveIngredients(deleted) {
    setIngredients(prevState => prevState.filter(ingredient => ingredient !== deleted))
  }

  function identifyFormError() {
    const fields = {
      image: {
        rule: !image,
        errorMessage: "Você não inseriu uma imagem para o prato!"
      },
      title: {
        rule: !title,
        errorMessage: "Você não inseriu um nome para o prato!"
      },
      ingredients: {
        rule: ingredients.length < 1,
        errorMessage: "Adicione pelo menos um ingrediente!"
      },
      newIngredient: {
        rule: newIngredients,
        errorMessage: "Você deixou um ingrediente no campo para adicionar, mas não clicou em adicionar. Clique no sinal de + para adicionar!"
      },
      category: {
        rule: !category,
        errorMessage: "Você não selecionou a categoria do prato!"
      },
      price: {
        rule: !price,
        errorMessage: "Você não adicionou o valor do prato!"
      },
      description: {
        rule: !description,
        errorMessage: "Você não inseriu a descrição do prato!"
      },
    }

    for (const value of Object.values(fields)) {
      if (value.rule) {
        return value.errorMessage
      }
    }

    return ""
  }

  async function handleNewDish() {
    const errorMessage = identifyFormError()

    if (errorMessage) {
      alert(errorMessage)
      return
    }
    setLoading(true)

    const data = {
      title,
      description,
      category,
      price,
      ingredients
    }

    const formData = new FormData();

    formData.append("data", JSON.stringify(data))
    formData.append("image", image)
    ingredients.map(ingredient => (
      formData.append("ingredients", ingredient)
    ))

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      }
    }

    await api.post("/dishes", formData, config)

    setLoading(false);
    handleBack()
  }

  return (
    <Container>
      <Header />   
      {
        user.isAdmin &&
        <Form autoComplete="off">
          <header>
            <ButtonText icon={PiCaretLeftBold} title="voltar" onClick={handleBack} />
            <h1>Novo Prato</h1>
          </header>

          <div className="firstColumn">
            <Image>
              <span>Imagem do prato</span>
              <div>
                <label htmlFor="dish" className="label">
                  <PiUploadSimple className="react-icon" />
                  Selecione a imagem
                  <Input
                    id="dish"
                    type="file"
                    onChange={handleChangeImage}
                  />
                </label>
              </div>
            </Image>

            <div className="input-wrapper">
              <label htmlFor="name" className="label">
                Nome
              </label>

              <Input
                id="name"
                type="text"
                placeholder="Ex.: Salada Ceasar"
                onChange={e => setTitle(e.target.value)}
              />
            </div>

            <div className="input-wrapper">
              <label htmlFor="category" className="label">
                Categoria
              </label>

              <div className="dishCategory">
                <select id="category" defaultValue={'default'} onChange={e => setCategory(e.target.value)}>
                  <option value="default" disabled> Refeição </option>
                  <option value="dishes"> Pratos Principais </option>
                  <option value="drinks"> Bebidas </option>
                  <option value="dessert"> Sobremesas </option>
                </select>
              </div>
            </div>
          </div>

          <div className="secondColumn">
            <div className="input-wrapper">
              <label htmlFor="dishIngredients" className="label">
                Ingredientes
              </label>

              <Section id="dishIngredients">
                <div className="ingredients">
                  {
                    ingredients.map((ingredient, index) => (
                      <IngredientsItens
                        key={String(index)}
                        value={ingredient}
                        onClick={() => handleRemoveIngredients(ingredient)}
                      />
                    ))
                  }

                  <IngredientsItens
                    isNew
                    placeholder="Novo marcador"
                    onChange={(e) => setNewIngredients(e.target.value)}
                    value={newIngredients}
                    onClick={handleAddIngredients}
                  />
                </div>
              </Section>
            </div>

            <div className="input-wrapper">
              <label htmlFor="price" className="label">
                Preço
              </label>
              <Input
                id="price"
                type="text"
                placeholder="R$ 00,00"
                onChange={e => setPrice(e.target.value)}
              />
            </div>
          </div>

          <div className="input-wrapper">
            <label htmlFor="description" className="label">
              Descrição
            </label>

            <Textarea
              id="description"
              type="text"
              placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
              onChange={e => setDescription(e.target.value)}
            />
          </div>

          <div className="button">
            <Button
              title={loading ? "Salvando alterações" : "Salvar alterações"}
              onClick={handleNewDish}
              disabled={loading}
            />
          </div>

        </Form>
      }
      <Footer />
    </Container>
  )
}
