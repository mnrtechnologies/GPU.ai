import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const [amount, setAmount] = useState(150);
  const navigate = useNavigate();

  useEffect(() => {
    handlePayment();
  }, []);

  const handlePayment = async () => {
    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/user/order`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount }),
      });

      const data = await res.json();
      console.log("Full backend response:", data);
      handlePaymentVerify(data);
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong during payment initiation.");
    }
  };

  const handlePaymentVerify = async (data) => {
    const token = localStorage.getItem("token");
    console.log("token",token)
    if (!token) {
      toast.error("Authentication token not found.");
      return;
    }

    if (!window.Razorpay) {
      toast.error("Razorpay SDK not loaded. Please refresh the page.");
      return;
    }

    const options = {
      key: process.env.REACT_APP_RAZORPAY_KEY_ID,
      amount: data.amount,
      currency: data.currency,
      name: "Novacore",
      description: "Test Mode",
      order_id: data.id,
      handler: async (response) => {
        console.log("response", response);
        try {
          const res = await fetch(`${process.env.REACT_APP_API_URL}/user/verify`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            }),
          });

          const verifyData = await res.json();

          if (verifyData.message) {
            //toast.success(verifyData.message);
            toast.success("Payment Success");
            navigate("/product/gpu-servers")
          } else {
            toast.error("Payment verification failed.");
          }
        } catch (error) {
          console.error(error);
          toast.error("Error verifying payment.");
        }
      },
      theme: { color: "#5f63b8" },
    };

    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-2xl font-bold">Redirecting to Payment...</h2>
    </div>
  );
};

export default Payment;