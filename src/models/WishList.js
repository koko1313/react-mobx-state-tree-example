import { types } from "mobx-state-tree";

export const WishListItem = types.model({
    name: types.string,
    price: types.number,
});

export const WishList = types.model({
    // it's optional and if it's not provider, it's empty array
    items: types.optional(types.array(WishListItem), [])
});