import React from "react";
import { connect } from "react-redux";

import CollectionPreview from "../../components/collection-preview/collection-preview";
import { showShopData } from "../../redux/shop/shop.selectors.js";

import "./collections-overv.styles.scss";

const CollectionsOverview = ({ data }) => (
	<div className="collections-overview">
		{data.map(({ id, ...otherCollectionProps }) => (
			<CollectionPreview key={id} {...otherCollectionProps} />
		))}
	</div>
);

const MapStateToProps = state => ({
	data: showShopData(state)
});

export default connect(MapStateToProps)(CollectionsOverview);
