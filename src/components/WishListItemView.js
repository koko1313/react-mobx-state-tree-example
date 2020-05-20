import React from 'react';

const WishListItemView = ({item}) => {
    return <li>
        <h3>{item.name}</h3>
        <p>{item.price}</p>
    </li>
};

export default WishListItemView;