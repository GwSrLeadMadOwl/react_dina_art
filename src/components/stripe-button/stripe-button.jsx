import StripeCheckout from "react-stripe-checkout";
import { connect } from "react-redux";
import { clearCart } from "../../redux/cart/cart.action";

const StripeCheckoutButton = ({ price, cartItems }) => {
    const priceForStripe = price * 100;
    const publishableKey = process.env.PUBLISHABLE_KEY;
    const onToken = token => {
        console.log(token);
        alert("Payment Succeded");
        // clearCart(cartItems); //doesn't execute
        clearCart();
    };

    return (
        <>
            <StripeCheckout
                label="Pay with 💳"
                name="DINA ART"
                billingAddress
                shippingAddress
                image="/img/logo.jpg"
                description={`Your total is ${price}€`}
                amount={priceForStripe}
                currency="EUR"
                panelLabel="Pay Now"
                token={onToken}
                stripeKey={publishableKey}
                className="inverted"
            />
        </>
    )
};

const mapDispatchToProps = dispatch => ({
    clearCart: () => dispatch(clearCart())
});

export default connect(null, mapDispatchToProps)(StripeCheckoutButton);