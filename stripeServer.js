import express from 'express';
import cors from 'cors';
import Stripe from 'stripe';
import dotenv from 'dotenv';


dotenv.config();

const secretKey = process.env.VITE_SECRET_STRIPE_KEY;
const stripe = new Stripe(secretKey, { apiVersion: '2020-08-27' });

const app = express();

app.use(express.json());
app.use(cors({
    origin: ["https://handidraw.vercel.app/", 'http://localhost:3000', 'http://localhost:5173' ],
    methods: ['POST'],
    allowedHeaders: ['Content-Type']
}));

app.post('/register', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await userService.register(email, password);
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await userService.login(email, password);
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.post('/create-checkout-session', async (req, res) => {
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
});







app.listen(3000, () => console.log('Server started on port 3000 🚀'));

