import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Navbar = styled.nav`
    height: 70px;
    position: fixed;
    width: 100%;
    background-image: linear-gradient(45deg, var(--mainColor), var(--bgToColor));
    z-index: 1111;
`
export const NavCont = styled.div`
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
`
export const NavMinu = styled.div`
    font-size: 35px;
    cursor: pointer;
    color: var(--textColor);
    display: none;
    font-family: "Font Awesome 5 Pro";
    font-weight: 900;
    &:before{
        content:"\f036";
    }
    @media (max-width: 768px) { 
        display: block;
    }
`

export const BrandA = styled.a`
    font-size: 35px;
    text-decoration: none;
    font-family: cursive;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: var(--navActive);
`

export const NavLinkI = styled.i`
    display: none;
    font-size: 30px;
    font-weight: 300;
    width:50px;
    text-align:center;
    @media (max-width: 768px) { 
        display: block;
    }
`

export const CartIconD = styled.div`
    width: 120px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 768px) { 
        width: 25px;
    }
`

export const IconShopLink =styled(NavLink)`
    position: relative;
    font-size: 20px;
    color: #fff;
    font-weight: 500;
    transition:all 0.3s ease-in-out;
    &:hover{
        color: var(--textColor);
    }
    
`

export const Badge = styled.span`
    position: absolute;
    width: 20px;
    height: 20px;
    background-color: #dc3545;
    color: #fff;
    border-radius: 50%;
    padding: 3px 0;
    font-weight: bold;
    top: -17px;
    left: 12px;
    font-size: 12px;
    z-index: -1;
    text-align: center;
`

export const NavbarNav = styled.div`
    display: flex;
    width: 40%;
    transition: all 0.3s ease-in-out;
    justify-content: space-between;
    @media (max-width: 768px) { 
        position: absolute;
        height: 100vh;
        left: 0;
        width: 300px;
        top: 70px;
        flex-direction: column;
        background-color: #f5f5f5;
        padding: 20px;
        justify-content: start;
        background-image: linear-gradient(
            109deg
            ,var(--mainColor),var(--bgToColor));
        transform: translateX(-300px);
    }

`

export const ANavLink = styled(NavLink)`
    display: flex;
    text-decoration: none;
    color: #fff;
    transition: all .3s ease-in-out;
    &:hover{
        color: var(--textColor);
    }
    @media (max-width: 768px) { 
        margin-bottom: 30px;
        align-items: baseline;
        justify-content: space-between;
    }
    
`
export const NavLinkSpan =styled.span`
    font-size: 25px;
    font-weight: bold;
    @media (max-width: 768px) { 
        width: 70%;
        font-size: 25px;
    }
    @media (max-width: 992px){
        font-size:22px;
    }
`
export const NavbarPopUp = styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
    background: #000000de;
    top: 70px;
    left: 0;
    transform: scale(00);
    z-index: 11;
    transition: all .3s ease-in-out;
`

export const DarkMood = styled.span`
    width: 40px;
    height: 40px;
    background-color: var(--spaColor);
    color: var(--dColor);
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: .3s ease-in-out;
    &:hover{
        transform: rotate(360deg);
    }
    &:after{
        content: '\f186';
        font-family: "Font Awesome 5 Pro";
    }
    @media (max-width: 768px) { 
        width: 50px;
        height: 50px;
        position: fixed;
        font-size: 22px;
        bottom: 25px;
        right: 35px;
    }
`