import Razorpay from "razorpay";

import { useState } from "react";

export default function Payment() {
  const initializeRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";

      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
  };

  const handlePayment = async () => {
    // e.preventDefault();
    const res = await initializeRazorpay();
    if (!res) {
      alert("Razorpay SDK Failed to load");
      return;
    }
    const data = await fetch("/api/sponser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        taxAmt: 100,
      }),
    }).then((t) => t.json());

    console.log(data);
    let options = {
      key: "rzp_test_ydLpxOQOvDmfFx",
      name: "EXCEL HOPE",
      currency: data.currency,
      amount: data.amount,
      order_id: data.id,
      description: "Thankyou for your test donation",
      image: "./hope-logo.png",
      handler: function (response) {
        alert("Razorpay Response: " + response.razorpay_payment_id);
      },
      prefill: {
        name: "Brijitha AV",
        email: "brijithaav@gmail.com",
        contact: "9853785519",
      },
      theme: {
        color: "#d946ef",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const errors = {};
    if (!formData.name) errors.name = "Name is required";
    if (!formData.email) errors.email = "Email is required";
    if (!formData.phone) errors.phone = "Phone number is required";
    return errors;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      // Proceed to payment
      handlePayment();
    } else {
      setErrors(validationErrors);
    }
  };
  const images = ["/hope-image1.jpg", "/hope-image2.jpg"];
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-4xl flex">
        <div className="w-1/2 bg-gray-200 p-4 flex flex-col justify-center items-center">
          <div className="carousel-item">
            <img src={images[0]} className="object-cover w-full h-full" />
          </div>
        </div>
        <div className="w-1/2 p-8">
          <h2 className="text-2xl font-semibold mb-6">Payment Form</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-3 border border-gray-300 rounded"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name}</p>
              )}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-3 border border-gray-300 rounded"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="phone">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full p-3 border border-gray-300 rounded"
                value={formData.phone}
                onChange={handleChange}
              />
              {errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone}</p>
              )}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full p-3 border border-gray-300 rounded"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            {/* <button
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-600 transition duration-300"
          >
            Proceed to Payment
          </button> */}
            <button
              type="button"
              className="bg-fuchsia-600 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg"
              //   onClick={() => handlePayment()}
            >
              Proceed to payment
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
