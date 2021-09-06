import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import "./Shop.css"
const Shop = () => {
    
    const first10= fakeData.slice(0,30)
    const [product,setProduct]=useState(first10);
    const [cart,setCart] = useState([])


    const xyz =(x)=>{
       const newCart = [...cart,x]
       setCart(newCart)
    }

    return (
        <div className="shop">
        <div className="products">
                {
                    product.map(x=><Product  myfun={xyz} products={x}/>)
                }

        </div>
            <div className="card">
                <Cart xy={cart}/>
            </div>
        </div>
    );
};

export default Shop;
