import React from 'react'
import './Cart.css'
import logo from '../IconsHanddrawn/logo.png';
import { useShoppingCart } from "use-shopping-cart";
import deleteIcon from '../IconsHanddrawn/delete.png';
import Checkout from './CheckoutNow';
import { useSnackbar } from "notistack";







export const Cart = () => {

{const {  cartDetails, removeItem, totalPrice, redirectToCheckout, cartCount} = useShoppingCart();

async function handleCheckout(event) {
  event.preventDefault();

  try { const result = await redirectToCheckout();
    
  } catch (error) { console.error(error);
    
  }
  
}

const { enqueueSnackbar } = useSnackbar();


const handleClick = (product) => {
  removeItem(product.id);
  enqueueSnackbar(`${product.name} removed from cart`, { variant: 'error' });
  
}





return (
    <div className="carti-container">
    <div className='carti-title-container'><img src={logo} alt="" />
    <h1>Cart</h1>
    
    </div>

    <div className="carti-checkout-container">

      <div className="carti-product-container">
       




        
{Object.values(cartDetails).map((product) => {
    return(
      <div className="carti-product">

      <div className="carti-img-container">
            <img src={product.image} alt=""  />
          </div>
          <p><span>Icon: </span> {product.name}</p>
          <p><span>Price: </span> {product.price}$</p>
          <p><span>Qty: </span>{product.quantity}</p>
          <img id='delete' onClick={() => handleClick(product)} src={deleteIcon} alt="" />
          </div>
       
    )
    
})}
         
 </div>

     

      <div className="carti-totals-container">
       
      <p id='welcome'>Use "Welcome10" for orders above 10€ to receive 10% off</p>


          <div className="carti-totals-text">
        <p>Subtotal:{totalPrice}€</p>
        <p>Shipping&Handling:{totalPrice < 10 ? "2$" : "FREE"}</p>
        <p>Total:{totalPrice + (totalPrice < 10 ? 2 : 0)}€ </p>
        <Checkout></Checkout>
       
        
       
        

</div>
      </div>

      
    </div>
    
    
    
    
    </div>
  )
}}

export default Cart
