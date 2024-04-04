// api/create-checkout-session.js

import Stripe from 'stripe';
import dotenv from 'dotenv';

dotenv.config();

const secretKey = process.env.VITE_SECRET_STRIPE_KEY;
const stripe = new Stripe(secretKey, { apiVersion: '2020-08-27' });

export default async (req, res) => {
  if (req.method === 'POST') {
    const { cart } = req.body;

    const line_items = Object.values(cart).map(product => ({
      price_data: {
        currency: 'eur',
        product_data: {
          name: product.name,
        },
        unit_amount: product.price * 100,
      },
      quantity: product.quantity,
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card', 'alipay', 'bancontact', 'eps', 'ideal', 'giropay', 'p24', 'sepa_debit', 'sofort'],
      allow_promotion_codes: true,
      line_items,
      mode: 'payment',
      success_url: 'https://handidraw.vercel.app/success',
      cancel_url: 'https://handidraw.vercel.app/error'
    });

    res.json({ sessionId: session.id });
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
};