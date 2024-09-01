const crypto = require("crypto");

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { response } = req.body;
    const secret = "CnGgEVguSR37fnPzQ0N2sPUU";

    const shasum = crypto.createHmac("sha256", secret);
    shasum.update(
      `${response.razorpay_order_id}|${response.razorpay_payment_id}`
    );
    const digest = shasum.digest("hex");

    if (digest === response.razorpay_signature) {
      res.status(200).json({ status: "Payment verified successfully" });
    } else {
      res.status(400).json({ status: "Payment verification failed" });
    }
  } else {
    res.status(405).end("Method Not Allowed");
  }
}
