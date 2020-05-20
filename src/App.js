import React, { Component } from 'react';
import WishListView from './components/WishListView';

import { WishList } from './models/WishList';
import { onSnapshot } from 'mobx-state-tree';

let initialState = {
  items: [
    {
      name: "LEGO Mindstorms EV3",
      price: 349.95,
    },
    {
      name: "Miracles - C.S. Lewis",
      price: 12.91,
    }
  ]
}

// check for the list in the local storage
if(localStorage.getItem("wishlistapp")) {
  initialState = JSON.parse(localStorage.getItem("wishlistapp"));
}

// create the wish list
const wishList = WishList.create(initialState);

// whenever there is a snapshot available, we gonna write it in local store
onSnapshot(wishList, snapshot => {
  const json = localStorage.setItem("wishlistapp", JSON.stringify(snapshot));

  // check if the json from the storage is valid for our model (in case of change the model)
  if(WishList.is(json)) initialState = json;
});

class App extends Component {
  render() {
    return <WishListView wishList={wishList} />;
  }
}

export default App;
