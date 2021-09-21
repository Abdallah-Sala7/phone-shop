import React, { Component } from "react";
import CartIcon from "./carticon";
import {NavCont,NavLinkSpan,NavMinu,Navbar,NavbarNav,NavbarPopUp,ANavLink,
  CartIconD, NavLinkI,DarkMood,BrandA,IconShopLink} from './styled.js'

class Nav extends Component {

  togelMode=()=>{
    document.querySelector("body").classList.toggle('dark')
  }

  render(){
    return (
      <Navbar>

        <NavCont className="container">
        <NavMinu className="minu" onClick={this.openNav}>
        </NavMinu>

        <h2>
          <BrandA to="/">TowStore</BrandA>
        </h2>

        <NavbarNav className="navbar-nav">            
          <ANavLink exact to="/">
            <NavLinkI className="fas fa-home-alt"></NavLinkI>
            <NavLinkSpan>
              Home
            </NavLinkSpan>
          </ANavLink>
        
          <ANavLink to="/productes">
            <NavLinkI className="fas fa-mobile"></NavLinkI>
            <NavLinkSpan>
              Mobile
            </NavLinkSpan> 
          </ANavLink>

          <ANavLink to="/newproductes">
            <NavLinkI className="fas fa-box-open"></NavLinkI>
            <NavLinkSpan>
             Products
            </NavLinkSpan> 
          </ANavLink>
        </NavbarNav>

        <CartIconD>
          <IconShopLink to="/carts">
            <CartIcon />
          </IconShopLink>
          <DarkMood className="dark-mood" onClick={this.togelMode}></DarkMood>
        </CartIconD>
        
        <NavbarPopUp className="pop-up" onClick={this.openNav}></NavbarPopUp>

        </NavCont>
      </Navbar>
    )
  }
  openNav=()=>{
    const open = document.querySelector(".navbar-nav"),
          pooUp = document.querySelector('.pop-up'),
          minu = document.querySelector('.minu');

    open.classList.toggle('active')
    pooUp.classList.toggle('active')
    minu.classList.toggle('active') 
  }    
}

export default Nav;
