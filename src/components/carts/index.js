import React, { Component} from "react";
import { connect } from "react-redux";
import { removeFromCart,clearCart } from "../store/actions/actions";
import {CardsCont,CardBody,CardButton,CardImg,
  CardText,CardTitle,CartButtonIcon,CartCard,CartPouUp
  ,CartSection,CartTotal, PopUpTitle, PobUpDiv, ButtonPay} from './styled.js'
class Cart extends Component {

  payOrder =()=>{
    this.props.clearCart();
    alert("we recieved your order, we are workig on it")
    document.querySelector('.cart-pou-up').classList.add('active')
  }

  componentDidMount(){
    let z = this.props.total;
    if (z <= 0) {
      document.querySelector('.cart-pou-up').classList.add('active')
    } else {
      document.querySelector('.cart-pou-up').classList.remove('active')
    }
  }
  
  render(){

    return (
      <CartSection>
        <CartPouUp className="cart-pou-up">
          <PopUpTitle>
            Cart
          </PopUpTitle>
          <PobUpDiv>
            The Cart Is Empty Add Some Products 
          </PobUpDiv>
        </CartPouUp>

        <div className="container">
        <CardsCont>
          {this.props.cartItem.map((item ,index)=> {
            return(
              <CartCard key={index}>
                <CardImg src={item.product.image} alt="cat imge" />
                <CardBody>
                    <CardTitle>{item.product.name}</CardTitle>
                    <CardTitle>{item.product.title}</CardTitle>
                    <CardText>Price :{item.product.price} EGP</CardText>
                    <CardText>Quantity : {item.quantity}</CardText>
                    <CardText>Total : {item.product.price * item.quantity} EGP</CardText>

                    <CardButton onClick={()=>this.props.removeFromCart(index)}>
                      <CartButtonIcon className="fas fa-trash-alt"></CartButtonIcon>
                    </CardButton>
                </CardBody>
              </CartCard>
            )
          })}
        </CardsCont>
        <CartTotal>Total : {Math.floor(this.props.total)} EGP</CartTotal>
        <ButtonPay onClick={this.payOrder}>Pay</ButtonPay>
        </div>
      </CartSection>
    )
  }
}

const mapStateToProps=(state)=>{
  return{
    cartItem : state.cart,
    total : state.cart.reduce((total, item) => total + item.quantity * item.product.price,0)
  }
}
export default connect(mapStateToProps,{removeFromCart,clearCart}) (Cart);