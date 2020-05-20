import React, { Component } from 'react';
import WishListView from './components/WishListView';

import { Group } from './models/Group';

// import { WishList } from './models/WishList';
// import { onSnapshot } from 'mobx-state-tree';

let initialState = {
  users: [
    {
      id: "1",
      name: "Homer",
      gender: "m",
    },
    {
      id: "2",
      name: "Marge",
      gender: "f",
    },
    {
      id: "3",
      name: "Bart",
      gender: "m",
    },
    {
      id: "4",
      name: "Maggie",
      gender: "f",
    },
    {
      id: "5",
      name: "Lissa",
      gender: "f",
    },
  ]
}

const group = Group.create(initialState);



class App extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedUser: null };
  }

  onSelectUser = event => {
    this.setState({ selectedUser: event.target.value });
  }

  renderUsersOptions = () => {
    return group.users.map(user => {
      return <option key={user.id} value={user.id}>
        {user.name}
      </option>;
    });
  }

  render() {
    const selectedUser = group.users.get(this.state.selectedUser);

    return <>
      <select onChange={this.onSelectUser}>
        <option>- Select user -</option>
        {this.renderUsersOptions()}
      </select>

      {selectedUser && <WishListView wishList={selectedUser.wishList} />}
    </>;
  }
}

export default App;
