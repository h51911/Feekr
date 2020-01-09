import React, { Component } from 'react';

import '../utils/base.css';
import '../utils/icon.css';
import '../css/NavSearch.css';

class NavSearch extends Component {

    render() {
        return <div>
            <div className="nav-search-main">
                <div className="search-main-fix nav-common-layout-fix">
                    <form className="search-gate-box common-white-sapce">
                        <label className="search-gate-entrance">
                            <i className="iconfont icon-sousuo search-gate-icon"></i>
                            <input id="search" type="search" placeholder="搜索目的地/关键词" className="search-gate-input" />
                            <i className="iconfont icon-guanbishixin search-gate-clear"></i>
                        </label>
                    </form>
                </div>
            </div>
        </div>
    }
}

export default NavSearch;