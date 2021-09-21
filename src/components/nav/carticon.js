import React from 'react'
import { Fragment } from 'react'
import { connect } from 'react-redux'
import {Badge} from './styled'
function CartIcon(props){
    return(
        <Fragment>
            <i className="fas fa-shopping-cart"></i>
            <Badge>{props.totalQuantity}</Badge>   
        </Fragment>
            
    )
}

const mapStateToProps=(state)=>{
    return{
        totalQuantity : state.cart.reduce((total, item ) => total + parseInt(item.quantity),0)
    }
}
export default connect(mapStateToProps)(CartIcon)