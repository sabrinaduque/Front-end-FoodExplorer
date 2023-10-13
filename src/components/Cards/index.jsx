import { Container, Edition } from "./styles";
import { Counter } from "../../components/Counter";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";
import { PiHeartBold, PiCaretRightBold, PiPencilSimpleBold } from "react-icons/pi";
import saladaRavanello from "../../assets/dishes/mainDishes/SaladaRavanello.png";
import { useState } from "react";

export function Cards() {
  const [user, setUser] = useState({ isAdmin: false });

  return (
    <Container>
      {user.isAdmin ? (
        <div className="card">
          <Edition to="/update">
            <PiPencilSimpleBold className="react-icon" />
          </Edition>

          <img src={saladaRavanello} alt="" />

          <Link to="/details"> Salada Ravanello  <PiCaretRightBold /> </Link>

          <p>Presunto de parma e rúcula em um pão com fermentação natural.</p>

          <span>R$ 49,97</span>
        </div>
      ) : (
        <div className="card">
          <Edition>
            <PiHeartBold className="react-icon" />
          </Edition>

          <img src={saladaRavanello} alt="" />

          <Link to="/details"> Salada Ravanello  <PiCaretRightBold /> </Link>

          <p>Presunto de parma e rúcula em um pão com fermentação natural.</p>

          <span>R$ 49,97</span>

          <div className="buttonsControllers">
            <Counter />
            <Button title={"incluir"} className="request" />
          </div>
        </div>
      )}
    </Container>
  )
}
