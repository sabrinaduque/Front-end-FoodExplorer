import { Container, Content, Logo, Pedidos, NewDish } from "./styles"

import { PiReceipt } from "react-icons/pi"
import { FiMenu, FiSearch, FiLogOut } from "react-icons/fi"
import logo from "../../assets/logos/logoHeader.svg"

import { Input } from "../Input"
import { Button } from "../Button"

import { Link } from "react-router-dom"
import { useEffect, useState } from "react"

export function Header() {
  const [user, setUser] = useState({ isAdmin: false })
  const [screenSm, setsScreenSm] = useState(window.innerWidth < 768)

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
                <span>0</span>
              </Pedidos>
            </div>
          </>
        )}

        {!screenSm && (
          <>
            <Input
              className="inputDesk"
              placeholder="Busque por pratos ou ingredientes"
              icon={FiSearch}
            />
          </>
        )}
        {user.isAdmin ? (
          <NewDish to="/new"> Novo prato </NewDish>
        ) : (
          <Button icon={PiReceipt} title={"Pedidos (0)"} />
        )}

        <Link>
          <FiLogOut className="reactIcon" />
        </Link>
      </Content>
    </Container>
  )
}
