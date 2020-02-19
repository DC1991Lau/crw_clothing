import { createSelector } from "reselect";

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
	[selectCart],
	cart => cart.cartItems
);

export const removeCartItems = createSelector(
	[selectCart],
	cart => cart.cartItems
);

export const selectCartHidden = createSelector(
	[selectCart],
	cart => cart.hidden
);

export const selectCartItemsCount = createSelector(
	[selectCartItems],
	cartItems =>
		cartItems.reduce(
			(accumalativeQuantity, cartItems) =>
				accumalativeQuantity + cartItems.quantity,
			0
		)
);

export const selectCartItemsPrice = createSelector(
	[selectCartItems],
	cartItems =>
		cartItems.reduce(
			(accumulativePrice, cartItems) =>
				accumulativePrice + cartItems.quantity * cartItems.price,
			0
		)
);
