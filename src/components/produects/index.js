import React, { Component } from "react";
import { GetAll,GetById} from "../apis/prodapi";
import { connect } from "react-redux";
import { addToCart} from "../store/actions/actions";
import {Card,CardImgCont,CardText,CardsCont,Title,BtnAdd,BtnShow,ProductCardBody,Btns,ProductImg} from './styled.js'

class Productes extends Component {
  state = {
    productes:[],
    product:{}
  }

  componentDidMount(){
    GetAll().then(data =>{
      this.setState({productes:data})
    }) 
  }

  addToCart =(prodItem)=>{
    this.props.addToCart(prodItem,1)
  }
  
  changeId = (id) =>{
    GetById(id).then(product =>{
      this.setState({product})
    })
  }
 
  render(){
    let prodItem = this.state.product 
    return (
      
      <section className="container">
        <CardsCont>
          {this.state.productes.map((item,index) => {
            return(
                <Card key={index}>

                  <CardImgCont>
                    <ProductImg src={item.image} alt="mobile imge" />
                  </CardImgCont>
                  <ProductCardBody>
                      <Title>{item.name}</Title>
                      <CardText>{item.price} EGP</CardText>
                      <Btns>
                          <BtnAdd onClick={()=>this.addToCart(prodItem)} onMouseDown={()=>this.changeId(item.id)}>Add To Cart</BtnAdd>
                          <BtnShow to={"/mobile/"+item.id}>Show</BtnShow>
                      </Btns>
                  </ProductCardBody>
                </Card>
            )
          })}
        </CardsCont>
      </section>
    )
  }
}

export default connect(null,{addToCart}) (Productes);