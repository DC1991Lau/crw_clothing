import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import CollectionsOverview from "../../components/collections-overview/collections-overv.component";
import { showShopData } from "../../redux/shop/shop.selectors.js";
import CollectionPage from "../collection/collection.component";

const ShopPage = ({ match, location, history }) => (
	<div className="shop-page">
		<Route exact path={`${match.path}`} component={CollectionsOverview} />
		<Route path={`${match.path}/:collectionId`} component={CollectionPage} />
	</div>
);

const MapStateToProps = state => ({
	data: showShopData(state)
});

export default connect(MapStateToProps)(ShopPage);
