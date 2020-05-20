import React, { Component } from 'react';
import WishListItemEdit from './WishListItemEdit';
import { clone, getSnapshot, applySnapshot } from 'mobx-state-tree';

class WishListItemView extends Component {
    constructor() {
        super();
        this.state = { isEditing: false };
    }

    onToggleEdit = () => {
        const {item} = this.props;

        this.setState({ 
            isEditing: true,
            clone: clone(item), // make a clone of the item, so do not change it directly
        });
    }

    onCloseEdit = () => {
        this.setState({ 
            isEditing: false,
            clone: null,
        });
    }

    onSaveEdit = () => {
        const shanpshot = getSnapshot(this.state.clone); // get the snapshot of the clone
        applySnapshot(this.props.item, shanpshot); // apply the snapshot to the item

        this.onCloseEdit();
    }

    renderItem = () => {
        const {item} = this.props;

        return <li>
            <h3>{item.name}</h3>
            <p>{item.price}</p>

            <button onClick={this.onToggleEdit}>Edit</button>
            <button onClick={item.remove}>Remove</button>
        </li>;
    }

    renderEditItem = () => {
        const item = this.state.clone; // get the clone

        return <li>
            <WishListItemEdit item={item} />

            <button onClick={this.onSaveEdit}>Save</button>
            <button onClick={this.onCloseEdit}>Close</button>
        </li>
    }

    render() {
        return this.state.isEditing ? this.renderEditItem() : this.renderItem();
    }
};

export default WishListItemView;