import React from "react";
import { connect } from "react-redux";

import { selectCartItems } from "../../redux/cart/cart.selectors";
import { selectCartItemsPrice } from "../../redux/cart/cart.selectors";
import "./checkout.styles.scss";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

const CheckoutPage = ({ cartItems, total }) => (
	<div className="checkout-page">
		<div className="checkout-header">
			<div className="header-blocks">
				<span>Product</span>
			</div>
			<div className="header-blocks">
				<span>Description</span>
			</div>
			<div className="header-blocks">
				<span>Quantity</span>
			</div>
			<div className="header-blocks">
				<span>Price</span>
			</div>
			<div className="header-blocks">
				<span>Remove</span>
			</div>
		</div>
		{cartItems
			? cartItems.map(cartItem => (
					<CheckoutItem key={cartItem.id} item={cartItem} />
			  ))
			: null}
		<div className="total">TOTAL: ${total}</div>
	</div>
);

const mapStateToProps = state => ({
	cartItems: selectCartItems(state),
	total: selectCartItemsPrice(state)
});

export default connect(mapStateToProps)(CheckoutPage);
