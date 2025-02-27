import React, { Component } from 'react';

import WishListItemEdit from './WishListItemEdit';

import { WishListItem } from '../models/WishList';

class WishListItemEntry extends Component {
    constructor() {
        super();

        this.state = {
            entry: WishListItem.create({
                name: "",
                price: 0,
            })
        };
    }

    onAdd = () => {
        this.props.wishList.add(this.state.entry);
        this.setState({
            entry: WishListItem.create({
                name: "",
                price: 0,
            })
        });
    }

    render() {
        return <>
            <div>
                <WishListItemEdit item={this.state.entry} />
                <button onClick={this.onAdd}>Add</button>
            </div>
        </>;
    }
}

export default WishListItemEntry;