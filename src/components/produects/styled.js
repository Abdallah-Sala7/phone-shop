import styled from "styled-components";
import { Link } from "react-router-dom";
export const CardsCont = styled.div`
    display: flex;
	margin-bottom: 30px;
    flex-wrap: wrap;
    justify-content: center;
`

export const Card = styled.div`
    background-color: var(--cardBG);
    min-width: 260px;
    height: 335px;
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    margin-right: 15px;
    margin-bottom:15px;
    overflow: hidden;
    transition: 0.3s ease-in-out;
    &:hover{
        box-shadow: 0 0 5px rgb(0 0 0 / 30%);       
    }
    @media (max-width: 992px){
        min-width: 225px;
        height: 320px;
    }
`
export const CardImgCont = styled.div`
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ProductImg = styled.img`
	height: 120px;
    max-width: 100%;
    margin: auto;
    object-fit: cover;
`
export const ProductCardBody = styled.div`
    padding: 15px 5px 0;
    text-align: center;
`
export const Title = styled.h3`
    margin-bottom: 15px;
    font-size: 20px;
    font-weight: bold;
    color: var(--titleColor);
    @media (max-width: 992px){
        margin-bottom: 10px;
        font-size: 18px;
    }
`
export const CardText = styled.p`
	font-size: 18px;
    margin-bottom: 15px;
    color: #247dc3;
    font-family: sans-serif;
    font-weight: 600;
    @media (max-width: 992px){
        margin-bottom:10px;
    }
`
export const BtnShow = styled(Link)`
    border-radius: 4px;
    padding: .75rem;
    font-weight: 400;
    height: 45px;
    transition:all 0.3s ease-in-out;
    width: 84.033px;
    border: 1px solid var(--btnColor);
    color: var(--btnColor);
    &:hover{
        background-color:var(--btnColor);
        color: #fff;
    }
    @media (max-width: 992px){
        height: 40px;
        padding: .6rem;
        font-size: 16px;
        width: 72px;
    }
`

export const BtnAdd = styled.div`
    height: 45px;
    color:#fff;
    border-radius: 4px;
    padding: .75rem;
    font-weight: 400;
    width: 135.967px;
    transition:all 0.3s ease-in-out;
    font-size: 17px;
    border: 1px solid var(--btnColor);
    background-color: var(--btnColor);
    cursor: pointer;
    &:hover{
        background-color: var(--cardBG);
        color: var(--btnColor);
    }
    @media (max-width: 992px){
        height: 40px;
        padding: .6rem;
        font-size: 16px;
        width: 118px;
    }
`
export const Btns = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0px 5px 15px;
`
//.......

export const ProdDetils = styled.section`
    padding-bottom: 30px;
    background-color: var(--cardBG);
`
export const DetailsDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
`
export const ProdTitle = styled.h2`
    font-size: 30px;
    margin-bottom: 40px;
    text-align: center;
    color: #ff8b15;
`
export const DetilsImgCont = styled.div`
    width: 50%;
    @media (max-width: 768px){
        width: 100%; 
    }`

export const ImgeDetils = styled.img`
    max-height: 400px;
    display: block;
    margin: auto;
    max-width: 100%;
`
export const DetailsBody =styled.div`
    display: flex;
    padding: 20px 10px;
    width: 50%;
    flex-wrap: wrap;
    @media (max-width: 768px){
        width: 100%; 
    }
`


export const DetailP = styled.p`
    margin-bottom: 20px;
    color: var(--detPColor);
    display: flex;
    align-items: center;
    width: 50%;
`
export const DetailsIcon = styled.i`{
    font-size: 25px;
    margin-right: 10px;
    opacity: 0.85;
    width: 45px;`
export const DetailsSpan =styled.span`
    color: var(--titleColor);
    font-size: 16px;
`
export const ProdInput = styled.input`
    width: 50%;
    padding: 8px;
    margin-top: 50px;
    margin-bottom: 15px;
    border: 1px solid #ff8b15;
    border-radius: 10px;
    color: var(--titleColor);
    outline: none;
    background-color: var(--cardBG);
`

export const TotalTitle = styled.h3`
    display: inline-block;
    width: 50%;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 27px;
    color: var(--titleColor);
    @media(max-width: 576px){
        font-size: 22px; 
        letter-spacing: 0;
    }
`
export const DetailsButtonIcon = styled.i`
    position: absolute;
    right: 10px;
    color: var(--cardBG);
    transition: .3s all ease-in;
`
export const DetailsButton =styled.button`
    display: block;
    margin:25px auto 0;
    width: 300px;
    padding: 10px 2px;
    border-radius: 1.3rem;
    cursor: pointer;
    border: 1px solid #ff8b15;
    font-size: 17px;
    font-weight: bold;
    color: #ff8b15;
    background-color: var(--cardBG);
    transition: .3s ease-in-out;
    position: relative;
    &:hover{
        box-shadow: inset 258px 0px #ff8b15;
        color: #fff;
    }
    &:hover ${DetailsButtonIcon}{
        color: #ff8b15;
    }
`