import React from 'react';
import WishListItemView from './WishListItemView';

const renderWishListItems = (wishList) => {
    return wishList.items.map((item, index) => {
        return <WishListItemView key={index} item={item} />;
    });
}

const WishListView = ({wishList}) => {
    return <ul>
        {renderWishListItems(wishList)}
    </ul>;
}

export default WishListView;