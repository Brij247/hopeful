import Razorpay from "razorpay";

const razorpay = new Razorpay({
  key_id: "rzp_test_ydLpxOQOvDmfFx", //.env
  key_secret: "CnGgEVguSR37fnPzQ0N2sPUU", //.env
});

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { amount } = req.body;

    const options = {
      amount: amount * 100, // amount in paisa
      currency: "INR",
      receipt: "donation_receipt_" + Date.now(),
    };

    try {
      const order = await razorpay.orders.create(options);
      res.status(200).json(order);
    } catch (err) {
      res.status(500).json({ error: "Order creation failed" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
