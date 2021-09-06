import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import "./Product.css"
const Product = (props) => {
    const {img, name , seller,price,stock}=props.products
    return (
        <div className="styleIt">
            <div>
                <img src={img} alt="" /> <br />
                <button className="btn" onClick={()=>props.myfun(props.products)}><FontAwesomeIcon icon={faShoppingCart}  /> add to cart</button>
            </div>
            <div>
                <h4 className="li">{name}</h4>
              
                <p><small> by : {seller}</small></p>
                <p>${price}</p> 
                <p><small>Only {stock} left in stock-order soon</small></p>
               
            </div>
        
        </div>
    );
};

export default Product;
