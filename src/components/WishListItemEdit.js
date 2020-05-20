import React, { Component } from 'react';
import { observer } from 'mobx-react';

class WishListItemEdit extends Component {
    onNameChange = event => {
        // call changeName of the model
        this.props.item.changeName(event.target.value)
    }

    onPriceChange = event => {
        this.props.item.changePrice(Number(event.target.value));
    }
    
    render() {
        const { item } = this.props;

        return <form>
            Thing: <input value={item.name} onChange={this.onNameChange} />
            Price: <input value={item.price} onChange={this.onPriceChange} />
        </form>;
    }
}

export default observer(WishListItemEdit);