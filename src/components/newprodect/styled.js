import styled from "styled-components";
import { Link } from "react-router-dom";
export const NewProductsCont =styled.div`
	display: flex;
	margin-bottom: 30px;
    flex-wrap: wrap;
    justify-content: center;
`

export const NewProduct = styled.div`
    background-color: var(--cardBG);
	width: 270px;
    height: 345px;
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    margin-right: 15px;
    margin-bottom: 15px;
    overflow: hidden;
    position: relative;
    transition: 0.3s ease-in-out;
    padding: 0 10px;
    &:hover{
        box-shadow: 0 0 5px rgb(0 0 0 / 30%);       
    }
    @media (max-width: 992px){
        width: 225px;
        height: 320px;
    }
`

export const NewProductImgCont = styled.div`
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const NewProductImg = styled.img`
	max-height: 150px;
    max-width: 100%;
    margin: auto;
    object-fit: cover;
`
export const NewProductBody = styled.div`
    padding-top: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`
export const NewProductTitle = styled.h3`
    margin-bottom: 5px;
    font-size: 13px;
    font-weight: 400;
    color: var(--titleColor);
    height: 45px;
`
export const NewProductP = styled.p`
	font-size: 20px;
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
    width:100%;
`
/* new prod-details */

export const NewProdSection = styled.section`
    padding-bottom: 30px;
    background-color: var(--cardBG);
`
export const NewProdSectionTitle = styled.h3`
    font-size: 30px;
    margin-bottom: 40px;
    text-align: center;
    color: #ff8b15;
`
export const NewProdDetails =styled.div`
    display: flex;
    flex-wrap: wrap;
`

export const ImgCont = styled.div`
    width: 50%;
    @media (max-width: 768px){
        width: 100%;
    }
`
export const NewImg = styled.img`
    max-height: 400px;
    display: block;
    margin: auto;
    max-width: 90%;
    @media (max-width: 768px){
        max-height:300px;
    }
`
export const Newproddetailsbody = styled.div`
    width: 50%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: flex-start;
    @media (max-width: 768px){
        width: 100%;
    }
`
export const NewProdPrice = styled.h3`
    text-align: left;
    margin-bottom: 20px;
    color: #247dc3;
    letter-spacing: 2px;
    font-size: 27px;
    width: 100%;
    
`
export const NewProdTitle = styled.h2`
    font-size: 25px;
    color: #607d8b;
    width: 100%;
    margin: 30px 0;
    @media (max-width: 768px){
        margin: 10px 0;
    }
`
export const NewProdDesc = styled.p`
    line-height: 1.5;
    letter-spacing: 1px;
    font-size: 17px;
    color: #385664;
`
export const NewProdInput = styled.input`
    width: 50%;
    padding: 8px;
    margin-top: 50px;
    margin-bottom: 15px;
    border: 1px solid #fd772dcf;
    color: var(--titleColor);
    border-radius: 10px;
    outline: none;
    background-color: var(--cardBG);
`
export const DetailsButtonIcon = styled.i`
    position: absolute;
    right: 10px;
    color: var(--cardBG);
    transition: .3s all ease-in;
`
export const ButtonDetails = styled.button`
    display: block;
    margin: auto;
    width: 300px;
    padding: 10px 2px;
    border-radius: 1.3rem;
    cursor: pointer;
    border: 1px solid #fd772d;
    font-size: 17px;
    font-weight: bold;
    color: #fd772d;
    background-color: var(--cardBG);
    margin-top: 25px;
    transition: .3s ease-in-out;
    position: relative;
    &:hover{
        box-shadow: inset 258px 0px #fd772d;
        color: #fff;
    }
    &:hover ${DetailsButtonIcon}{
        color: #fd772d;
    }
`
export const NewProdTotal = styled.h3`
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
