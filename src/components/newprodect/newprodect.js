import React, { Component } from "react";
import { connect } from "react-redux";
import { GetNewProduct,GetNewProductById } from "../apis/prodapi";
import { addToCart } from "../store/actions/actions";
import {NewProduct,NewProductBody,NewProductImg,NewProductImgCont,NewProductP,NewProductTitle,NewProductsCont, Btns, BtnShow, BtnAdd} from './styled.js'

class NewProductes extends Component {
  state = {
    newproductes:[],
    product:{}
  }

  componentDidMount(){
    GetNewProduct().then(newproductes =>{
      this.setState({newproductes})
    })
  }


  addToCart =(prodItem)=>{
    this.props.addToCart(prodItem,1)
  }
  
  changeId = (id) =>{
    GetNewProductById(id).then(product =>{
      this.setState({product})
    })
  }
 
  render(){
    let prodItem = this.state.product 
    return (
      
      <section className="container">
        <NewProductsCont>
           
          {this.state.newproductes.map(item => {
            return(
                <NewProduct key={item.id}>
                  <NewProductImgCont>
                    <NewProductImg src={item.image}></NewProductImg>
                  </NewProductImgCont>
                  <NewProductBody>
                    <NewProductTitle>{item.title}</NewProductTitle>
                    <NewProductP>{item.price} EGP</NewProductP>
                    <Btns>
                      <BtnAdd onClick={()=>this.addToCart(prodItem)} onMouseDown={()=>this.changeId(item.id)}> Add To Cart</BtnAdd>
                      <BtnShow to={"/NewProd/"+item.id}> Show </BtnShow>
                    </Btns>
                  </NewProductBody>
                </NewProduct>
            )
          })}
        </NewProductsCont>
      </section>
    )
  }
}

export default connect(null,{addToCart})(NewProductes)