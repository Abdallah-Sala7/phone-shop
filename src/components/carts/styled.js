import styled from "styled-components";

export const CartSection = styled.section`
    position: relative;
    padding-bottom: 30px;
`
export const CartTotal = styled.h3`
    text-transform: uppercase;
    margin-bottom: 10px;
    color: #607d8b;
    font-size: 25px;
    letter-spacing: 1px;
`
export const CardsCont = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin-bottom: 25px;
`
export const CartCard = styled.div`
    width: 250px;
    height: 340px;
    display: flex;
    flex-direction: column;
    box-shadow: 0px 0px 5px 0px rgb(0 0 0 / 30%);
    border-radius: 8px;
    margin-bottom: 20px;
    position: relative;
    margin: 10px;
    background-color: var(--cardBG);
    @media (max-width: 992px) {
        width: 220px;
        height: 300px;
    }
`
export const CardImg = styled.img`
    height: 140px;
    max-width: 100%;
    margin: auto;
    object-fit: cover;
    @media (max-width: 992px) {
        height: 110px;
    }
`

export const CardText = styled.p`
    font-size: 17px;
    margin-bottom: 5px;
    font-weight: 400;
    color: var(--titleColor);
    @media (max-width: 992px) {
        font-size: 15px;        
    }
`
export const CardBody = styled.div`
    padding: 0 20px 0;
    height: 120px;
    display: block;
    text-align: left;
    @media (max-width: 992px) {
        height:105px;        
    }
`
export const CardTitle = styled.h3`
    margin-bottom: 10px;
    font-size: 20px;
    display: inline-block;
    max-height: 23px;
    overflow: hidden;
    color: #607d8b;
    @media (max-width: 992px) {
        margin-bottom: 5px;
        font-size: 17px;        
    }
`
export const CardButton = styled.button`
    position: absolute;
    top: 5px;
    right: 5px;
    width: 30px;
    height: 30px;
    color: #dc3545;
    border: 1px solid #dc35459e;
    outline: none;
    border-radius: 50%;
    background-color: var(--cardBG);
    cursor: pointer;
    font-size: 18px;
    padding: 5px;
    transition: all .5s ease-in-out;
    &:hover{
        transform: scale(1.15);
    }
`
export const CartButtonIcon = styled.i`
    font-weight: 300;
`

export const ButtonPay = styled.button`
    width: 300px;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ff8b15;
    text-transform: uppercase;
    font-size: 18px;
    font-weight: bold;
    color: #ff8b15;
    background-color: transparent;
    border-radius: 20px;
    cursor: pointer;
    transition:all .5s ease-in-out;
    box-shadow:0 0 #ff8b15 inset;
    &:hover{
        color: #fff;
        box-shadow:-300px 0 #ff8b15 inset,600px 0 0 8px #ff8b15 inset;
    }
`
// ......... poUp

export const CartPouUp = styled.div`
    display: none;
    overflow: hidden;
`
export const PopUpTitle = styled.h2`
    font-size: 30px;
    color: #ff8b15;
`
export const PobUpDiv = styled.div`
    width: 90%;
    height: 150px;
    color: #fff;
    background-color: #ffa5001c;
    margin-top: 33px;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 575px){
        font-size: 17px;
    }
`