import dotenv from 'dotenv';
const functions = require("firebase-functions");
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')(process.env.REACT_APP_STRIPE_SECRETKEY);

//App config
const app = express();


//Middleware
app.use(cors({ origin: true}));
app.use(express.json());


//-API routes
app.get('/' , (req,res) => res.status(200).send('Hello World'));

app.post('/payments/create' , async(request , response) =>{
    const total= request.query.total;

    console.log('Payement request received !!! For this amount >>>', total);
    
    const paymentIntent = await stripe.paymentIntents.create({
        amount:total, // subunits of the currency
        currency:'USD' ,
    });
    
    // OK * created
    response.status(201).send({
        client_secret: paymentIntent.client_secret,
    })
})
 
//-Listen command
exports.api = functions.https.onRequest(app);

//Example Endpoint
//http://localhost:5001/e-commerce-4fb85/us-central1/api
