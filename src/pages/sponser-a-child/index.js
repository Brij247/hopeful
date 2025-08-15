import { useState } from "react";

export default function Payment() {
  const initializeRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePayment = async () => {
    const res = await initializeRazorpay();
    if (!res) {
      alert("Razorpay SDK Failed to load");
      return;
    }

    const data = await fetch("/api/sponser", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        amount: Number(formData.amount),
        ...formData, // optionally pass donor details to backend
      }),
    }).then((t) => t.json());

    console.log(data, "Data");
    const options = {
      key: "rzp_test_ydLpxOQOvDmfFx", // use from .env
      name: "Excel Hope",
      currency: data.currency,
      amount: data.amount,
      order_id: data.id,
      description: "Thank you for your donation",
      image: "/hope-logo.png",
      handler: function (response) {
        alert("Payment ID: " + response.razorpay_payment_id);
        // optionally: POST to backend for verification
      },
      prefill: {
        name: formData.name,
        email: formData.email,
        contact: formData.phone,
      },
      theme: { color: "#d946ef" },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    amount: "",
    referral: "",
    frequency: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const errors = {};
    if (!formData.name) errors.name = "Name is required";
    if (!formData.email) errors.email = "Email is required";
    if (!formData.phone) errors.phone = "Phone number is required";
    if (!formData.amount || isNaN(Number(formData.amount))) {
      errors.amount = "Valid donation amount is required";
    }
    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      setErrors({});
      handlePayment();
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-4xl flex">
        <div className="w-1/2 p-8">
          <h2 className="text-2xl font-semibold mb-6">Donate to Excel Hope</h2>
        </div>
        <div className="w-1/2 p-8">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                placeholder="Full Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded"
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name}</p>
              )}
            </div>
            <div className="mb-4">
              <input
                placeholder="Email Address"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>
            <div className="mb-4">
              <input
                placeholder="Mobile Number"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone}</p>
              )}
            </div>
            <div className="mb-4">
              <input
                placeholder="Donation amount (INR)"
                type="number"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded"
              />
              {errors.amount && (
                <p className="text-red-500 text-sm">{errors.amount}</p>
              )}
            </div>
            <div className="mb-4">
              <textarea
                placeholder="How do you know about Excel Hope?"
                name="referral"
                value={formData.referral}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded"
              ></textarea>
            </div>
            <div className="mb-4">
              <textarea
                placeholder="Are you planning to contribute monthly or yearly?"
                name="frequency"
                value={formData.frequency}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded"
              ></textarea>
            </div>
            <div className="mb-4">
              <textarea
                placeholder="Your message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-fuchsia-600 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg"
            >
              Proceed to payment
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
