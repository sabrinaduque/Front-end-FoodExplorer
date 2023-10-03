import { Container, Content, Logo, Pedidos } from "./styles";
// import { FiSearch, FiLogOut, FiUser, FiShoppingBag, FiHeart } from 'react-icons/fi';
import { PiReceipt } from 'react-icons/pi';

import logo from '../../assets/logos/logoHeader.svg';
import { useState } from "react";

export function Header() {
  const [user, setUser] = useState({ isAdmin: false })
  
  function mobileMenu() {
    document.getElementById('menu').classList.toggle('active')
    document.getElementById('nav-menu').classList.toggle('active')
  }

  return (
    <Container>
      <Content>
        <div className="menu" id="menu" onClick={mobileMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        {
          user.isAdmin ?
            <Logo>
              <div className="logo">
                <img src={logo} alt="" />
                <h1>food explorer</h1>
                <span>admin</span>
              </div>
            </Logo>

            :
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
        }
      </Content >
    </Container >
  )
}