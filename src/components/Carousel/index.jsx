import { Container, CarouselContainer, Card } from "./styles"
import { Cards } from "../../components/Cards"
import arrowLeft from "../../assets/svg/arrowLeft.svg"
import arrowRight from "../../assets/svg/arrowRight.svg"
import { useRef } from "react"
import { isBrowser } from 'react-device-detect'

export function Carousel() {
  const carouselContainer = useRef(null)

  const handleLeftClick = (e) => {
    e.preventDefault()
    carouselContainer.current.scrollLeft -= carouselContainer.current.offsetWidth
  }

  const handleRigthClick = (e) => {
    e.preventDefault()
    carouselContainer.current.scrollLeft += carouselContainer.current.offsetWidth
  }

  return (
    <Container>
      <CarouselContainer ref={carouselContainer}>
        <Card>
          <Cards />
        </Card>
        <Card>
          <Cards />
        </Card>
        <Card>
          <Cards />
        </Card>
        <Card>
          <Cards />
        </Card>
        <Card>
          <Cards />
        </Card>

        {
          isBrowser &&
          <div className="buttons">
            <button onClick={handleLeftClick} className="reactIconLeft">
              <img src={arrowLeft} alt="" />
            </button>

            <button onClick={handleRigthClick} className="reactIconRight">
              <img src={arrowRight} alt="" />
            </button>
          </div>
        }

      </CarouselContainer>
    </Container >
  )
}