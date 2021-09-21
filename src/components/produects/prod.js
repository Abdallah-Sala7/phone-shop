import React, { Component } from "react";
import { GetById } from "../apis/prodapi";
import { connect } from "react-redux";
import {addToCart} from '../store/actions/actions.js'
import { ProdDetils,DetailP,DetailsBody,DetailsIcon,DetailsButton 
    ,DetailsButtonIcon,DetailsDiv,DetailsSpan,DetilsImgCont,ImgeDetils,ProdTitle,ProdInput, TotalTitle} from "./styled";

class Prod extends Component {
    state ={
        product:{},
        quntity:0
    }

    componentDidMount(){
        const id = this.props.match.params.id
        GetById(parseInt(id)).then(product =>{
            this.setState({product})
        })
    }

    handelQuntity =(e) =>{
        if(e.target.value < 0 )
            return ;
        this.setState({quntity:e.target.value})
    }

    addProdToCart = (prodItem) =>{
        this.props.addToCart(prodItem,this.state.quntity)
        this.setState({quntity:0})
    }
    
    render(){
        const prodItem = this.state.product;
        const quntity = this.state.quntity;
        return (
            <ProdDetils>
                <div className="container">
                    <ProdTitle>{prodItem.name}</ProdTitle>

                    <DetailsDiv>
                        <DetilsImgCont>
                            <ImgeDetils src={prodItem.image} alt='prodects imge'/>
                        </DetilsImgCont>
                        <DetailsBody>
                            <DetailP>
                                <DetailsIcon className="fas fa-money-check-alt"></DetailsIcon>
                                <DetailsSpan>
                                    {prodItem.price} EGP
                                </DetailsSpan>
                            </DetailP>
                            <DetailP>
                                <DetailsIcon className="fas fa-camera"></DetailsIcon>
                                <DetailsSpan>
                                    {prodItem.camera}
                                </DetailsSpan>
                            </DetailP>
                            <DetailP>
                                <DetailsIcon className="fas fa-database"></DetailsIcon>
                                <DetailsSpan>
                                    {prodItem.rom}
                                </DetailsSpan>
                            </DetailP>
                            <DetailP>
                                <DetailsIcon className="fas fa-memory"></DetailsIcon>
                                <DetailsSpan>
                                    {prodItem.ram}
                                </DetailsSpan>
                            </DetailP>
                            <DetailP>
                                <DetailsIcon className="fas fa-battery-full"></DetailsIcon>
                                <DetailsSpan>
                                    {prodItem.battery}
                                </DetailsSpan>
                            </DetailP>
                            <DetailP>
                                <DetailsIcon className="fas fa-mobile-alt"></DetailsIcon>
                                <DetailsSpan>
                                    {prodItem.screen}
                                </DetailsSpan>
                            </DetailP>


                        
                        </DetailsBody>
                    </DetailsDiv>
                    <ProdInput type='number' value={quntity} onChange={this.handelQuntity}/>
                    <TotalTitle>total : {quntity * prodItem.price} EGP</TotalTitle>
                    <DetailsButton onClick={()=>this.addProdToCart(prodItem)}>
                        Add to Cart
                        <DetailsButtonIcon className="fas fa-cart-plus"></DetailsButtonIcon>
                    </DetailsButton>
                </div>
            </ProdDetils>
        )      
    }
 
}
export default connect(null,{addToCart}) (Prod);