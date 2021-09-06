import React from 'react';
import "./Cart.css"
const Cart = (props) => {
    
    const totalPrice = props.xy.reduce((total,pd)=>{
        return total+pd.price
    },0)
    let shipping = 12;
    
    if(totalPrice>35){
        shipping=0;
    }else if(totalPrice>15){
        shipping=4;
    }else{
        shipping=0; 
    }

    const tax = Math.round(totalPrice/10) //10%
    
    return (
        <div>
            <h5>Order Summary : {props.xy.length}</h5>
            <p><small>Product Price : {totalPrice}</small></p>
            <p><small>shippig cost : {shipping}</small></p>
            <p><small>tax : {tax}</small></p>
            <h4>total Price : {(totalPrice + shipping + tax).toFixed(0)}</h4>
        </div>
    );
};

export default Cart;