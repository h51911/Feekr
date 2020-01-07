import React, { Component } from 'react';
import '../utils/base.css'
import '../utils/icon.css'
import '../css/Search.css'
// import { CSSTransitionGroup } from 'react-transition-group';

class Search extends Component {
    constructor() {
        super();
        // this.gotoSearch=this.gotoSearch.bind(this)
        this.state = {
            percent: 100
        }
    }
    // gotoSearch(){
    //     console.log(11)
    // }
    increase = () => {
        const percent = this.state.percent + 100;
        this.setState({
            percent: percent > 100 ? 100 : percent,
        })
    }
    decrease = () => {
        const percent = this.state.percent - 100;
        this.setState({
            percent: percent < 0 ? 0 : percent,
        })
    }


    render() {
        return <div>

            <div className="top-search">
                <input type="text" onClick={this.decrease} className="sea1" placeholder="搜索目的地/攻略/旅行资讯" />
                <div className="box" style={{ left: `${this.state.percent}%` }}>
                    <div className="top">
                        <div onClick={this.increase} className="table-cell iconfont icon-fanhui txt-left back-to-guide"></div>
                        <input type="text" className="sea2" placeholder="搜索目的地/攻略/旅行资讯" />
                        <div className="right"><a href="###" className="search-btn">搜索</a></div>
                    </div>
                    <div className="history">
                        <header className="header-title-wrap t"> <span>-</span> <span className="section-title">最近搜索</span> <span>-</span> </header>
                        <div className="tag-container">   </div>
                    </div>
                    <section className="hot-search"> <div className="search-tag-panel hot-search-panel"> <header className="header-title-wrap txt-center font-lg regular-font"> <span>-</span> <span className="section-title">热门搜索</span> <span>-</span> </header> <div className="tag-container">    <a data-href="###" className="tag-item search-keyword">杭州</a>    <a data-href="###" className="tag-item search-keyword">上海</a>    <a data-href="###" className="tag-item search-keyword">苏州</a>    <a data-href="###t" className="tag-item search-keyword">莫干山</a>    <a data-href="###" className="tag-item search-keyword">成都</a>   </div> </div></section>
                </div>
            </div>

        </div>
    }
}

export default Search;