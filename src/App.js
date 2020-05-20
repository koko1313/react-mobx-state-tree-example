import React, { Component } from 'react';
import WishListView from './components/WishListView';

import { WishList } from './models/WishList';

// create the wish list
const wishList = WishList.create({
  items: [
    {
      name: "LEGO Mindstorms EV3",
      price: 349.95,
    },
    {
      name: "Miracles - C.S. Lewis",
      price: 12.91,
    }
  ],
});

// change the price every second
// setInterval(() => {
//   wishList.items[0].changePrice(wishList.items[0].price + 1);
// }, 1000);

class App extends Component {
  render() {
    return <WishListView wishList={wishList} />;
  }
}

export default App;
