import { types, getParent, destroy } from "mobx-state-tree";

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
        },
        remove() {
            // the second parameter - go 2 levels up
            getParent(self, 2).remove(self);
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
        },
        remove(item) {
            // self.items = self.items.filter(currentItem => currentItem !== item); // using filter
            destroy(item); // using destroy
        }
    }))
    .views(self => ({
        get totalPrice() {
            return self.items.reduce((sum, entry) => sum + entry.price, 0);
        }
    }));