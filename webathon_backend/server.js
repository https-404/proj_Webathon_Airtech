const express = require('express');
const bodyParser = require('body-parser');
const Stripe = require('stripe');
require('dotenv').config();

const app = express();
const port = 4250;

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });



app.post('/payment', async (req, res) => {
  console.log('Received params:', req.body);
  const { email, amount, currency, paymentMethodType } = req.body;

  console.log(process.env.STRIPE_SECRET)
  const stripe = new Stripe( process.env.STRIPE_SECRET, {
    apiVersion: '2023-10-16',
    typescript: false,
  });

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency,
    });

    const payment_id = paymentIntent.id;

    res.status(200).json({
      client_secret: paymentIntent.client_secret,
    });
  } catch (e) {
    console.error(e);
    res.status(500).json({
      message: e.message,
    });
  }
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
