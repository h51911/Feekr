import React, { Component } from 'react';

import '../utils/base.css'
import '../utils/icon.css'

import Search from '../components/search';
class Gonglve extends Component {

    render() {
        return <div className="search-main">
            <div className="search-main-fix common-layout-fix">
                <Search/>
            </div>

        </div>
    }
}

export default Gonglve;