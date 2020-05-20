import { types } from "mobx-state-tree";
import { WishList } from "./WishList";

export const User = types.model({
    id: types.string,
    name: types.string,
    // gender: types.union(types.literal("m"), types.literal("f")), // one way - using union
    gender: types.enumeration("gender", ["m", "f"]), // second way - using enumeration
    wishList: types.optional(WishList, {}),
});

export const Group = types.model({
    users: types.array(User),
});