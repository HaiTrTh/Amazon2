const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { request, response } = require("express");
const stripe = require("stripe")("sk_test_51KdAsqHmidTRg1dL0UY6xUNDGif6M08fWsKSOi3tTtUI36kaUqR79QXdavG37staxPFoLXlFJMgRPKNgNDmBXO9g00fIb4OmuB");

//  API


// API config
const app = express();


// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());


//  API routes
app.get("/", (request, response) => response.status(200).send("Hello world"));
app.post("/payments/create", async (request, response) => {
  const toal = request.query.total;
  console.log('Payment Request Recieved BOOM! for this amount', total)

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, //subunits of the currency
    currency: "usd"
  })
  response.status(201).send({
    clientSecrect: paymentIntent.client_secrect,
  })
});

//  Listen command
exports.api = functions.https.onRequest(app);

//  Exemple endpoint
// http://localhost:5001/challenge-4b2b2/us-centrall/api
