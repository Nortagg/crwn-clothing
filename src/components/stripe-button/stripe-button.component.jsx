import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51McRQoJkrB2670hs2cbPiwUjp4jN6wChGJFBpcQHgOlyyGod2mCKvoWChSLTeZbleG5BOzzV4RvvgDt1aEea6Z1v00mIqq9vId";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Seccessful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="http://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
