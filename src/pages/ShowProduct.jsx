import './ShowProduct.css'
import React, { useState, useEffect } from 'react';
import { getProducts, urlFor } from '../../dist/handidrawss/.sanity/runtime/lib/sanity'
import AddToCart from './AddToCart';
import cart from '../IconsHanddrawn/shoppingCart.png';





const ShowProduct = ({ product, onBackClick }) => {

  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const fetchedProducts = await getProducts();
      setProducts(fetchedProducts);
      console.log(fetchedProducts);
    };

    fetchData();
  }, []);

  const [option, setOption] = useState({
    value: 'white'

  })

  const handleColorChange = (e) => {
    setOption({ value: e.target.value });
  };

  

  return (
  
    <div className='s-show-products-container'>
      
      
      <div className="s-show-product-container">
   <div className="s-show-product-img-container" id='mobile-s-show-product-img-container'>
   <button id='mobile-back-button' onClick={onBackClick}>Back</button>
   <img id='mobile-product-img' style={{backgroundColor: option.value}} backgroundColor={option.value} src={urlFor(product.image)} alt={product.name} />
  <div className="select-background"> <p>Change the background to see what it will look like on your project!</p>
   <select onChange={handleColorChange} name="color" id="mobile-background-select" style={{width: '100px', height: '30px', border: '1px solid black', borderRadius: '5vw', textAlign: 'center', fontFamily: 'Kalam', fontSize: 20, cursor: 'pointer'}}>
     <option value="white">White</option>
     <option value="orange">Orange</option>
     <option value="red">Red</option>
     <option value="blue">Blue</option>
     <option value="pink">Pink</option>
     <option value="green">Green</option>
     <option value="purple">Purple</option>
     <option value="yellow">Yellow</option>
     
   </select></div>
   </div>
        <div className="s-show-product-text-container" id='s-show-mobile-text-container' key={product.name}>
         
          <p><span>Name:</span> {product.name}</p>
          <p><span>Category:</span> {product.categoryAttribute}</p>
          <p><span>Price: $</span>{product.price}</p>
          <p id='mobile-details'><span>Details:</span> {product.details}</p>
     
      <div className="s-show-product-addtocart-container">
         <AddToCart name={product.name} price={product.price} image={product.image} price_id={product.price_id}></AddToCart><img src={cart} alt="" />
      </div> 
      

    </div>  
      </div> <div className="mobile-s-show-product-addtocart-container" id='mobile-addtoCart'>
         <AddToCart name={product.name} price={product.price} image={product.image} price_id={product.price_id}></AddToCart><img src={cart} alt="" />  </div></div>
  );
}

export default ShowProduct