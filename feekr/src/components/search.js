import React,{Component} from 'react';
import '../utils/base.css'
import '../utils/icon.css'
import '../css/Search.css'
// import { CSSTransitionGroup } from 'react-transition-group';

class Search extends Component{
    constructor(){
        super();
        // this.gotoSearch=this.gotoSearch.bind(this)
        this.state={
            percent:100
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


    render(){
        return <div>
            
            <div className="top-search"> 
                <input type="text"  onClick={this.decrease}  className="sea1" placeholder="搜索目的地/攻略/旅行资讯"/>
                <div className="box" style={{left:`${this.state.percent}%`}}>
                    <div className="top">
                    <div onClick={this.increase} className="table-cell iconfont icon-fanhui txt-left back-to-guide"></div>
                    <input type="text"className="sea2"  placeholder="搜索目的地/攻略/旅行资讯"/>
                    <div className="right"><a href="###" className="search-btn">搜索</a></div>
                    </div>
                    
                </div>
             </div>

        </div>
    }
}

export default Search;