import { createSelector } from "reselect";

const COLLECTION_ID_MAP = {
	hats: 1,
	sneakers: 2,
	jackets: 3,
	womens: 4,
	mens: 5
};

const shopData = state => state.shop;

export const showShopData = createSelector(
	[shopData],
	shop => shop.collections
);

export const selectCollection = collectionUrlParam =>
	createSelector(
		[showShopData],
		collections => collections[collectionUrlParam]
	);
