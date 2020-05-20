import { types } from "mobx-state-tree";

export const WishListItem = types
    .model({
        name: types.string,
        price: types.number,
    }).actions(self => ({
        changeName(newName) {
            self.name = newName;
        },
        changePrice(newPrice) {
            self.price = newPrice;
        }
    }));

export const WishList = types
    .model({
        // it's optional and if it's not provider, it's empty array
        items: types.optional(types.array(WishListItem), []),
    })
    .actions(self => ({
        add(item) {
            self.items.push(item);
        }
    }))
    .views(self => ({
        get totalPrice() {
            return self.items.reduce((sum, entry) => sum + entry.price, 0);
        }
    }));