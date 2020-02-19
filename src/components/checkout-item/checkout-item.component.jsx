import React from "react";
import { connect } from "react-redux";

import {
	removeItem,
	addItem,
	decreaseQtyItem
} from "../../redux/cart/cart.actions";

import "./checkout-item.styles.scss";

const CheckoutItem = ({ item, removeItem, addItem, decreaseQtyItem }) => {
	const { imageUrl, name, quantity, price } = item;
	return (
		<div className="checkout-item">
			<div className="image-container">
				<img src={imageUrl} alt="item" />
			</div>
			<div className="name">{name}</div>
			<div className="quantity">
				<div className="arrow" onClick={() => decreaseQtyItem(item)}>
					&#10094;
				</div>
				<span className="value">{quantity}</span>
				<div className="arrow" onClick={() => addItem(item)}>
					&#10095;
				</div>
			</div>
			<div className="price">${price}</div>
			<div className="remove-button" onClick={() => removeItem(item)}>
				&#10005;
			</div>
		</div>
	);
};

const mapDispatchToProps = dispatch => ({
	removeItem: item => dispatch(removeItem(item)),
	addItem: item => dispatch(addItem(item)),
	decreaseQtyItem: item => dispatch(decreaseQtyItem(item))
});

export default connect(
	null,
	mapDispatchToProps
)(CheckoutItem);
