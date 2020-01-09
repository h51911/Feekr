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
            percent: 100,
            display: 'none',
            history: [],
            title:'',
            delet:false
        }
        this.remove = this.remove.bind(this)
        this.Changetitle = this.Changetitle.bind(this)
    }
    increase = () => {
        // console.log(1)
        this.setState({
            percent: 100,

        })
        // console.log(this.state.percent)
        setTimeout(() => {
            this.setState({
                display: 'none'
            })
        }, 500);
    }
    decrease = () => {
        // console.log(2)
        this.setState({
            display: 'block',


        })
        setTimeout(() => {
            this.setState({
                percent: 0,
            })
        }, 1);
    }
    remove() {
        // console.log(111)
        localStorage.setItem('search','')
        this.setState({
            history: [],
            title: '',
            delet:false
        })
    }
    add = () => {
        let aa= this.state.title
        // console.log(aa)
        let res=this.state.history.includes(aa)
        // console.log(res)
        if(aa!=''&&!res){
            // console.log(111)
            this.state.history.push(aa)
            let Item=this.state.history.toString()
            // console.log(Item)
            localStorage.setItem('search', Item)
            this.setState({
                history:this.state.history,
                title:'',
                delet:true
            })
        }else{
            this.setState({
                title:''
            })
        }
    }
    Changetitle(event) {
        if(event.target.value.trim()){
            this.setState({
                title: event.target.value.trim()
            })
        }
    }
    componentDidMount(){
        let data=localStorage.getItem('search')
        let data1=data.split(',')
        console.log(data1)
        if(data){
            this.setState({
                history:data1,
                delet:true
            })
        }else{
            this.setState({
                // history:data,
                delet:false
            })
        }
       

    }
    render() {
        let { history } = this.state
        return <div>
            <div className="top-search">
                <input type="text" onClick={this.decrease}  className="sea1" placeholder="搜索目的地/攻略/旅行资讯" />
                <div className="box" style={{ left: `${this.state.percent}%`, display: this.state.display }}>
                    <div className="content">
                        <div className="top">
                            <div onClick={this.increase}  className="table-cell iconfont icon-fanhui txt-left back-to-guide"></div>
                            <input type="text" value={this.state.title} ref={(ele) => this.title = ele} onChange={this.Changetitle} className="sea2" placeholder="搜索目的地/攻略/旅行资讯" />
                            <div className="right" onClick={this.add}><a  className="search-btn">搜索</a></div>
                        </div>
                        <div className="history">
                            <header className="header-title-wrap t"> <span>-</span> <span className="section-title">最近搜索</span> <span>-</span> </header>
                            <a onClick={this.remove} style={this.state.delet?{display:'block'}:{display:'none'}} className="pull-right del-search-btn"><span className="iconfont icon-lajitong"></span></a>
                            <div className="tag-container">
                                {
                                    history.map(item => {
                                        return <a data-href="###" key={item} className="tag-item search-keyword"> {item} </a>
                                    })
                                }
                            </div>
                        </div>
                        <section className="hot-search"> <div className="search-tag-panel hot-search-panel"> <header className="header-title-wrap txt-center font-lg regular-font"> <span>-</span> <span className="section-title">热门搜索</span> <span>-</span> </header> <div className="tag-container">    <a data-href="###" className="tag-item search-keyword">杭州</a>    <a data-href="###" className="tag-item search-keyword">上海</a>    <a data-href="###" className="tag-item search-keyword">苏州</a>    <a data-href="###t" className="tag-item search-keyword">莫干山</a>    <a data-href="###" className="tag-item search-keyword">成都</a>   </div> </div></section>
                    </div>
                </div>
            </div>

        </div>
    }
}

export default Search;