import { Container, Form, Image, Section } from "./styles"
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { IngredientsItens } from "../../components/IngredientsItens"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"
import { Input } from "../../components/Input"
import { Textarea } from "../../components/Textarea"
import { PiUploadSimple, PiCaretLeftBold } from "react-icons/pi"
import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { useAuth } from "../../hooks/auth"
import { api } from "../../services/api"

export function UpdateDish() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState("")
  const [category, setCategory] = useState("")
  const [ingredients, setIngredients] = useState([])
  const [newIngredient, setNewIngredient] = useState("")
  const [loading, setLoading] = useState(false);
  const [loadingDelete, setLoadingDelete] = useState(false);
  const [data, setData] = useState(null)
  const { user } = useAuth()
  const params = useParams()
  const navigation = useNavigate()

  function handleBack() {
    navigation(-1)
  }

  const [image, setImage] = useState()

  function handleChangeImage(event) {
    const file = event.target.files[0]
    setImage(file)
  }

  function handleAddIngredient() {
    if (newIngredient.length < 3) {
      return alert(
        "Erro: Você está tentando inserir um nome de ingrediente inválido!"
      )
    } else {
      setIngredients((prevState) => [...prevState, newIngredient])
      setNewIngredient("")
    }
  }

  function handleRemoveIngredient(deleted) {
    setIngredients((prevState) =>
      prevState.filter((ingredient) => ingredient !== deleted)
    )
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
        rule: newIngredient,
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

  async function handleUpdateDish() {
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

    await api.put(`/dishes/${params.id}`, formData, config)

    setLoading(false);
    handleBack()
  }

  useEffect(() => {
    async function fetchDish() {
      const response = await api.get(`/dishes/${params.id}`)
      setData(response.data)

      const { title, description, category, price, ingredients } = response.data
      setTitle(title)
      setDescription(description)
      setCategory(category)
      setPrice(price)
      setIngredients(ingredients.map((ingredient) => ingredient.name))
    }

    fetchDish()
  }, [])

  async function handleRemoveDish() {
    const isConfirm = confirm("Tem certeza que deseja remover este item?")

    if (isConfirm) {
      await api.delete(`/dishes/${params.id}`)
      handleBack()
    } else {
      return
    }
  }

  return (
    <Container>
      <Header />
      {user.isAdmin && data &&
        <Form autoComplete="off">
          <header>
            <ButtonText icon={PiCaretLeftBold} title="voltar" onClick={handleBack} />
            <h1>Editar Prato</h1>
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
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className="input-wrapper">
              <label htmlFor="category" className="label">
                Categoria
              </label>
              <div className="dishCategory">
                <select id="category" value={category} onChange={e => setCategory(e.target.value)}>
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
                Ingredientes
              </label>

              <Section id="dishIngredients">
                <div className="ingredients">
                  {ingredients.map((ingredient, index) => (
                    <IngredientsItens
                      key={String(index)}
                      value={ingredient}
                      onClick={() => handleRemoveIngredient(ingredient)}
                    />
                  ))}

                  <IngredientsItens
                    isNew
                    placeholder="Adicionar"
                    onChange={e => setNewIngredient(e.target.value)}
                    value={newIngredient}
                    onClick={handleAddIngredient}
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
                value={price}
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
              defaultValue={description}
              onChange={e => setDescription(e.target.value)}
            />
          </div>

          <div className="configButtons">
            <Button
              className="delete"
              title={loadingDelete ? "Excluindo prato" : "Excluir prato"}
              onClick={handleRemoveDish}
              disabled={loadingDelete}
            />

            <Button
              className="save"
              title={loading ? "Salvando alterações" : "Salvar alterações"}
              onClick={handleUpdateDish}
              disabled={loadingDelete}
            />
          </div>
        </Form>
      }
      <Footer />
    </Container>
  )
}
