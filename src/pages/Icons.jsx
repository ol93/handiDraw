
import './Icons.css'
import logo from '../IconsHanddrawn/logo.png';
import ShowProduct from './ShowProduct';

import React, { useState, useEffect } from 'react';
import { getProducts, urlFor } from '../../dist/handidrawss/.sanity/runtime/lib/sanity'
import AddToCart from './AddToCart';

const Icons = () => {
  const [products, setProducts] = useState([]);

  const [currentPage, setCurrentPage] = useState('icons');

  const handlePageChange = (page, product) => {
    setCurrentPage(page);
    setSelectedProduct(product)}
    const [selectedProduct, setSelectedProduct] = useState(null)


const [category, setCategory] = useState('All');

const handleBackClick = () => {
  
  setCurrentPage('icons');
}






  useEffect(() => {
    const fetchData = async () => {
      const fetchedProducts = await getProducts();
      setProducts(fetchedProducts);
      console.log(fetchedProducts);
    };

    fetchData();
  }, []);

  return (<div className="m-icon-container">
    {currentPage === 'icons' && (
      
   
    
        
            <div className="m-logos-container">
                
                <div className="m-title-img-container"><img key={logo}  src={logo} alt="" /></div>
            <div className="m-title"><h1>Icons</h1></div>
            <div className="m-categories">
            <h4>Filter by category:  <select style={{width: '130px', height: '40px', border: '1px solid black', borderRadius: '5vw', textAlign: 'center', fontFamily: 'Kalam', fontSize: 20, cursor: 'pointer'}}  name="" id=""
    onChange={(e) => setCategory(e.target.value)}>
      <option value="All">All</option>
      <option value="Deletes">Delete</option>
      <option value="Edits">Edit</option>
      <option value="Socials">Socials</option>
      <option value="Sports">Sports</option>
      
      
      
      </select></h4></div></div>
         )}
        

        <div className="m-container-products">
        {currentPage === 'icons' && products.filter((product) => product.categoryAttribute === category || category === 'All')
    .map((product) => ( 
      <div onClick={() => handlePageChange('showProduct', product)} className="m-products-container">
                <div className="m-img-container">
                    <img key={product.image} src={urlFor(product.image)} alt="" />
                    <AddToCart className='custom-Button' name={product.name} price={product.price} image={product.image} price_id={product.price_id} buttonText='Quick add'></AddToCart>

                </div>
                <div className="m-text-container">
                    <p>Name:<span> {product.name}</span></p>
                    <p>Price:<span> {product.price}€</span></p>
                    <p>Category:<span> {product.categoryAttribute}</span></p>
                </div>
                </div>
            ))}</div>

{currentPage === 'showProduct' && <ShowProduct product={selectedProduct} onBackClick={handleBackClick} />}

        
    </div>
)}
     


      

   
  

export default Icons;
