import React from 'react';
import WishListItemView from './WishListItemView';
import WishListItemEntry from './WishListItemEntry';

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

        <WishListItemEntry wishList={wishList} />
    </>;
}

export default observer(WishListView);