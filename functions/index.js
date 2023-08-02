const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
// eslint-disable-next-line max-len
const stripe = require("stripe")("sk_test_51NZ7CoSHFldvQPH5XufcRMBK3cY8raziJgMoaocZg67GUMnpe2Wvg0VMFET1N2iPsosMrsqpx5RIfAFvUMFHTuuf00ui1PTExy");

const app = express();

app.use(cors({origin: true}));
app.use(express.json());

app.get("/", (request, response)=> response.status(200).send("Hello world!!!"));
app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("Payment Request Recieved => ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

exports.api = functions.https.onRequest(app);


// Example

// http://127.0.0.1:5001/clone-420f3/us-central1/api
