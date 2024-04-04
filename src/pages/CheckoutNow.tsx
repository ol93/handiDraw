import React, { useState } from "react";
import { useShoppingCart } from "use-shopping-cart";

export interface ProductCart {
    name: string,
    price: number,
    price_id: string,
    currency: string,
    sku: string
}

export default function Checkout({name, price, price_id, sku}: ProductCart) {
    const {redirectToCheckout, cartDetails } = useShoppingCart();

    const product = {
        name: name,
        price: price,
        price_id: price_id,
        sku: sku,
        currency: 'eur'
    }

    async function handleCheckout() {
    
    try {
        // Request a session ID from your server
        const response = await fetch('https://handidraw.vercel.app/api/create-checkout-session', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({cart: cartDetails})
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }

        const {sessionId} = await response.json();

        // Redirect to the checkout
        redirectToCheckout(sessionId);
    } catch (error) {
      console.error('A network error occurred when trying to fetch the session ID:', error);
    }
    }



    return (
        <button onClick={handleCheckout}>Checkout</button>
    )

    // ...
}