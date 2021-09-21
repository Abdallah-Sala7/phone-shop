import {  Link } from "react-router-dom";
import styled from "styled-components";

export const Section = styled.section`
    padding-top: 70px;
`

export const CarsCont = styled.div`
    margin-bottom: 30px;
    height: calc(100vh - 70px);
    max-width: 100vw;
    background-image: linear-gradient(45deg, var(--mainColor) , var(--bgToColor));
    position: relative;
`
export const CarsContainer =styled.div`
    display: flex;
    height: 100%;
`
export const ButtonsLink = styled(Link)`
    border-radius: 20px;
    display: inline-block;
    color: var(--mainColor);
    background-color: var(--textColor);
    width: 140px;
    height: 35px;
    margin: 20px 10px 0px 0;
    text-align: center;
    line-height: 30px;
    border: 1px solid var(--textColor);
    padding: 2px;
    transition: all 0.3s ease-in-out;
    &:hover{
        background-color: var(--mainColor);
        color: var(--textColor);
    }
    @media (max-width: 768px) { 
        width: 120px;
    }
    @media (max-width: 576px){
        width: 100px;
        height: 30px;
        line-height: 25px;
    }
`

export const Signup = styled(ButtonsLink)`
    margin-right:0;
    background-color: transparent;
    color: var(--textColor);
    border-color: var(--textColor);
    &:hover{
    background-color: var(--textColor);
    color: var(--mainColor);
}
`
export const CarouselItem = styled.div`
    width: 50%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`
export const CarouselImg = styled.img`
    max-width: 100%;
    opacity: 0.92;
`

export const CarouselCaption = styled.div`
    width: 50%;
    color: var(--textColor);
    line-height: 1.5;
    display: flex;
    flex-direction: column;
    justify-content: center;
`
export const CarouselCaptionP = styled.p`
    letter-spacing: 1px;
    @media (max-width: 768px) { 
        font-size: 13px;
        letter-spacing: 0px;
    }
`
export const CarouselCaptionH =styled.h5`
    font-size: 30px;
    text-transform: capitalize;
    font-family: sans-serif;
    @media (max-width: 768px) { 
        font-size: 23px;
    }
    @media (max-width: 576px){
        font-size: 20px;
    }
`
export const SpanIiconBottom = styled.span`
    display: flex;
    justify-content: center;
    position: absolute;
    bottom: -25px;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: var(--bgColor);
`

export const BottomI = styled.i`
    font-weight: 100;
    font-size: 50px; 
    color: var(--mainColor);   
`

export const Newest = styled.h3`
    font-weight: 300;
    font-size: 20px;
    margin: 10px 0;
    color: var(--titleColor);
`
export const SectionSlider = styled.div`
	display: flex;
    cursor: all-scroll;
    overflow: auto;
    align-items: center;
    flex-wrap: nowrap;
	margin-bottom: 30px;
	padding: 20px 0;
	border-radius: 10px;
    margin: auto;
    &::-webkit-scrollbar{
        display: none;
    }
`
export const Slider = styled.div`
	position: relative;
    margin-bottom: 35px;
`
const ProdSpan = styled.span`
	position: absolute;
    width: 50px;
    height: 50px;
    box-shadow: 0px 0px 4px 0px rgb(25 48 120);
    top: 50%;
    font-size: 25px;
    color: rgb(25, 48, 120);
    z-index: 2;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: 0.5s;
    @media (max-width: 768px) { 
        display: none;
    }
    &:hover{
        background-color: rgba(25, 49, 120, 0.8);
        color: var(--textColor);
    }
`
export const Left = styled(ProdSpan)`
	left: -25px;
    
`
export const Right = styled(ProdSpan)`
    right:-25px;
`
export const ProductSlider =styled.div`
    position: relative;
    margin:40px 0;
    &:hover ${Right} {
        transform: translateX(-25px);
    }
    &:hover ${Left} {
        transform: translateX(25px);
    }
`


export const Product = styled.div`
    background-color: var(--cardBG);
	min-width: 250px;
    height: 335px;
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    margin-right: 15px;
    overflow: hidden;
    position: relative;
    transition: 0.3s ease-in-out;
    &:first-of-type{
        margin-left: 15px;
    }
    &:hover{
        box-shadow: 0 0 5px rgb(0 0 0 / 30%);       
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
    display: inline-block;
    max-height: 23px;
    overflow: hidden;
    font-size: 18px;
    font-weight: 400;
    color: var(--titleColor);
`
export const CardText = styled.p`
	font-size: 18px;
    margin-bottom: 15px;
    color: #247dc3;
    font-family: sans-serif;
    font-weight: 600;
`

export const BtnShow = styled(Link)`
    border-radius: 4px;
    padding: .7rem;
    font-weight: 400;
    transition:all 0.3s ease-in-out;
    width: 84.033px;
    border: 1px solid var(--btnColor);
    color: var(--btnColor);
    &:hover{
        background-color:var(--btnColor);
        color: #fff;
    }
`

export const BtnAdd = styled.div`
    color:#fff;
    border-radius: 4px;
    padding: .7rem;
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
`
export const Btns = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0px 5px 15px;
`