import React from "react";
import { useShoppingCart } from "use-shopping-cart";
import { urlFor } from '../../dist/handidrawss/.sanity/runtime/lib/sanity'
import { useSnackbar } from "notistack";



export interface ProductCart{
    name: string,
    price: number,
    image: any,
    price_id: string,
    currency: string,
    sku: string,
    buttonText?: string,
    className?: string
    
   

   
   
    

}

export default function AddToCart({name, price, image, price_id, buttonText='Add to', className }: ProductCart) {
   
    const {enqueueSnackbar, closeSnackbar} = useSnackbar();

    const {addItem } = useShoppingCart();

    const product = {
        name: name,
        price: price,
        image: urlFor(image).url(),
        price_id: price_id,
        sku: price_id,
        currency: 'USD'
       
    };

    const handleClick = (event) => {
        event.stopPropagation(); // Stop event propagation
        addItem(product);
        enqueueSnackbar(`${product.name} added to cart`, {variant: 'success'});

        console.log(product);
    };

    

    return (
       
        <button className={className} onClick={handleClick}> {buttonText} </button>
        
    );
}