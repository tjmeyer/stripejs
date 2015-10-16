// Set your secret key: remember to change this to your live secret key in production
// See your keys here https://dashboard.stripe.com/account/apikeys
var stripe = require("stripe")("sk_test_98HLWxqvceVuZaS8QDEEYsjr");

stripe.plans.create({
  amount: 2000,
  interval: "month",
  name: "Amazing Gold Plan",
  currency: "usd",
  id: "gold"
}, function(err, plan) {
  // asynchronously called
});