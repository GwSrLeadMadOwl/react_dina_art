import "./checkout.scss";
import ShoppingItem from "../../components/shopping-item/shopping-item.jsx";
import { connect } from "react-redux";
import { useState, useEffect } from "react";

const Checkout = ({ cartItems }) => {
    const [price, setPrice] = useState(0);

    useEffect(() => {
        setPrice(cartItems.reduce((acc, item) => acc + item.price, 0));
    }, [cartItems]);

    return (
        <main>
            <div className="List">
                <div className="Section">
                    <h3>SHOPPING LIST</h3>
                    <div className="bg-line" />
                    {
                        cartItems.map(item => (
                            <ShoppingItem key={item.id} item={item} />
                        ))
                    }
                    <div className="bg-line" />
                    <div className="purchase-section">
                        <p>Total: {price} €</p>
                        <button type="button" name="button" className="purchase">Pay with <span className="inverted">💳</span></button>
                    </div>
                </div>
            </div>
        </main >
    );
}

const mapStateToProps = ({ cart: { cartItems } }) => ({
    cartItems
});

export default connect(mapStateToProps)(Checkout);