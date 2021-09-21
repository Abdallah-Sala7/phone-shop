import React, { Component } from "react";
import { GetNewProductById } from "../apis/prodapi";
import { connect } from "react-redux";
import {addToCart} from '../store/actions/actions.js'
import {NewProdDetails,NewProdDesc,NewImg,NewProdInput,NewProdPrice,NewProdSection,NewProdSectionTitle,NewProdTitle,NewProdTotal,Newproddetailsbody, ImgCont, ButtonDetails} from './styled'
import { DetailsButtonIcon } from "../produects/styled";
class NewProd extends Component {
    state ={
        product:{},
        quntity:0
    }

    componentDidMount(){
        const id = this.props.match.params.id
        GetNewProductById(parseInt(id)).then(product =>{
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
            <NewProdSection>
                <div className="container">
                    <NewProdSectionTitle>{prodItem.category}</NewProdSectionTitle>
                    <NewProdDetails>
                        <ImgCont>
                            <NewImg src={prodItem.image} alt='prodects imge'/>
                        </ImgCont>
                        <Newproddetailsbody>
                            <NewProdTitle>{prodItem.title}</NewProdTitle>
                            <NewProdPrice>Price : {prodItem.price} EGP </NewProdPrice>
                            <NewProdDesc>{prodItem.description}</NewProdDesc>
                        </Newproddetailsbody>
                    </NewProdDetails>
                    <NewProdInput type='number' value={quntity} onChange={this.handelQuntity} />
                    <NewProdTotal>total : {quntity * prodItem.price} EGP</NewProdTotal>
                    <ButtonDetails onClick={()=>this.addProdToCart(prodItem)}>
                        Add to Cart
                        <DetailsButtonIcon className="fas fa-cart-plus"></DetailsButtonIcon>
                    </ButtonDetails>
                </div>
            </NewProdSection>
        )      
    }
 
}
export default connect(null,{addToCart}) (NewProd);