import React from 'react';
import WishListItemView from './WishListItemView';

import { observer } from 'mobx-react';

const renderWishListItems = (wishList) => {
    return wishList.items.map((item, index) => {
        return <WishListItemView key={index} item={item} />;
    });
}

const WishListView = ({wishList}) => {
    return <>
        <ul>
            {renderWishListItems(wishList)}
        </ul>
        Total: {wishList.totalPrice}
    </>;
}

export default observer(WishListView);