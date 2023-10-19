import { Container, Content, Logo, Pedidos, NewDish, Logout } from "./styles"
import { PiReceipt } from "react-icons/pi"
import { FiMenu, FiLogOut } from "react-icons/fi"
import logo from "../../assets/logos/logoHeader.svg"
import { TbRefresh } from "react-icons/tb";
import { Input } from "../Input"
import { Button } from "../Button"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { useAuth } from "../../hooks/auth"
import { useCart } from "../../hooks/cart"
export function Header({ setNewSearch }) {
  const [screenSm, setsScreenSm] = useState(window.innerWidth < 768)
  const { signOut, user } = useAuth()
  const { cart, handleResetCart } = useCart();
  const [search, setSearch] = useState("")

  const setValueSearch = (value) => {
    setSearch(value)
    setNewSearch(value)
  }

  useEffect(() => {
    function handleResize() {
      setsScreenSm(window.innerWidth < 768)
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <Container>
      <Content>
        <Link to="/menu">
          <FiMenu className="menu" />
        </Link>

        {user.isAdmin ? (
          <Logo>
            <div className="logo">
              <img src={logo} alt="" />
              <h1>food explorer</h1>
            </div>
            <div className="admin">
              <span>admin</span>
            </div>
          </Logo>
        ) : (
          <>
            <Logo>
              <div className="logo">
                <img src={logo} alt="" />
                <h1>food explorer</h1>
              </div>
            </Logo>
            <div className="pedidos">
              <Pedidos>
                <PiReceipt />
                <span>{cart.quantity}</span>
              </Pedidos>
            </div>
          </>
        )}

        {!screenSm && (
          <>
            <Input
              className="inputDesk"
              placeholder="Busque por pratos ou ingredientes"
              value={search}
              onChange={(e) => setValueSearch(e.target.value)}
            />
          </>
        )}
        {user.isAdmin ? (
          <NewDish to="/newDish"> Novo prato </NewDish>
        ) : (
          <div className="orders">
            <button className="icon" onClick={handleResetCart} ><TbRefresh /></button>
            <Button icon={PiReceipt} title={`Pedidos (${cart.quantity})`} />
          </div>
        )}

        <Logout onClick={signOut}>
          <FiLogOut className="reactIcon" />
        </Logout>
      </Content>
    </Container>
  )
}
