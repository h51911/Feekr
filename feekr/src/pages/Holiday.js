import React, { Component } from 'react';
import Search from '../components/search';

class Goods extends Component {
    constructor() {
        super();
        this.state = {
            datalist: []
        }
    }

    render() {
        return <div>
            <Search />
        </div>
    }
}

export default Goods;