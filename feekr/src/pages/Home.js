import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import '../utils/base.css'
import '../utils/icon.css'
import '../css/Home.css'
import Search from '../components/search'
import Title from '../components/Title'
import Zixun from '../api/Zixun';
import Dangjiyouhui from '../api/Dangjiyouhui';
import Mudidi from '../api/Mudidi.js';
import Selected from '../api/Selected.js';
class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            menu: [
                {
                    name: 'gonglve',
                    path: '/gonglve',
                    text: '攻略',
                    icon: 'icon-gonglve',
                    color: '#FCBC00'
                }, {
                    name: 'dujia',
                    path: '/dujia',
                    text: '度假',
                    icon: 'icon-dujia',
                    color: '#51A5DC'
                }, {
                    name: 'huwai',
                    path: '/huwai',
                    text: '玩乐',
                    icon: 'icon-huwai',
                    color: '#F15A62'
                }, {
                    name: 'meiwu',
                    path: '/meiwu',
                    text: '美物',
                    icon: 'icon-meiwu',
                    color: '#A5CE00'
                }, {
                    name: 'yanjiusuo',
                    path: '/yanjiusuo',
                    text: '研究所',
                    icon: 'icon-yanjiusuo',
                    color: '#00AC59'
                }
            ],
            menu2: [],
            menu3: [{
                t1: '最新旅游资讯',
                t2: '给你最新的旅行热点'
            }, {
                t1: '当季优惠',
                t2: '本季度最优惠的出游商品'
            }, {
                t1: '目的地推荐',
                t2: '开启城市深度游攻略'
            }, {
                t1: '编辑精选',
                t2: '推荐最具小众特色的旅行体验'
            }],
            menu4: [],
            menu5: [],
            menu6:[],
            menu7:[],
            img:['./img/hangzhou.jpg','./img/taibei.jpg','./img/chongqing.jpg','./img/lasa.jpg']
        }
        this.changeMenu = this.changeMenu.bind(this)
    }
    changeMenu(cur) {
        // console.log(cur)
        this.props.history.push(cur)
        this.setState({
            selectedKeys: [this.props.history.location.pathname]
        })
    }
    async componentDidMount() {
        let res = await Zixun.get({
            page: 1,
            count: 3
        })
        
        let res2 = await Dangjiyouhui.get({
            moduleId: 1
        })
        let res3 = await Mudidi.get({})
        let res4 = await Selected.get({})
        let data = res.data.result.list
        let data2 = res2.data.result.product[0].list
        let data3 = res2.data.result.product[1].list
        let data4= res3.data.result.list.slice(0,4)
        data4.forEach((item,idx) => {
            item.cover=this.state.img[idx]
        });
        let data5=res4.data.result.list
        console.log(data3)
        this.setState({
            menu2: data,
            menu4: data2,
            menu5: data3,
            menu6:data4,
            menu7:data5
        })
    }
    render() {
        let { menu, menu2, menu3, menu4, menu5,menu6,menu7 } = this.state
        return <div className="box1">
            <Search />

            <section className="nav-container">
                <div className="flex-wrap">
                    {
                        menu.map(item => {
                            return <a onClick={this.changeMenu.bind(this, item.path)} key={item.path} className="flex-item txt-center">
                                <p className={`iconfont ${item.icon}`} style={{ color: `"${item.color}"` }}></p>
                                <p className="font-sm">{item.text}</p>
                            </a>
                        })
                    }

                </div>
            </section>
            <div className="main">
                <section className="list-container news-container">
                    <Title data={menu3[0]} />
                    <div className="list">
                        {
                            menu2.map(item => {
                                return <a className="flex-wrap" key={item.id}>
                                    <img src={item.cover} alt="" className="news-cover lazy" style={{ display: "block" }} />
                                    <div className="flex-item news-item">
                                        <p className="news-title font-md">{item.title}
                                        </p>
                                        <p className="p2"><span>{`${item.viewCount}人阅读`}</span><span className="separate">/</span><span>{item.time}</span>
                                        </p>
                                    </div>
                                </a>
                            })
                        }

                    </div>
                    <p className="get-more font-md txt-center" onClick={this.changeMenu.bind(this, '/gengduo')} >更多旅行资讯</p>
                </section>
                <section className="list-container product-container">
                    <Title data={this.state.menu3[1]} />
                    <section className="flex-wrap sub-title-wrap"> <div className="font-md">国内度假</div> <div className="flex-item line"></div>  <a href="###" className="font-md more-btn">更多</a>  </section>
                    <div className="list sales-in-wrap clearfix">
                        {
                            menu4.map(item => {
                                return <a className="txt-center product-item pull-left" key={item.productId} href="">
                                    <img className="product-cover lazy" src={item.productCover} />
                                    <p className="font-sm product-title">{item.productName}
                                    </p>
                                    <p className="area">{`${item.productArea}-${item.productCity}`}</p>
                                    <p className="font-sm price">
                                        ￥<span className="font-md">{item.productPrice}</span> 起
                                         </p>
                                </a>
                            })
                        }

                    </div>
                    <section className="flex-wrap sub-title-wrap"> <div className="font-md">国外度假</div> <div className="flex-item line"></div>  <a href="###" className="font-md more-btn">更多</a>  </section>
                    <div className="list sales-in-wrap clearfix">
                        {
                            menu5.map(item => {
                                return <a className="txt-center product-item pull-left" key={item.productId} href={item.webUrl} >
                                    <img className="product-cover lazy" src={item.productCover} />
                                    <p className="font-sm product-title">{item.productName}
                                    </p>
                                    <p className="area">{`${item.productArea}-${item.productCity}`}</p>
                                    <p className="font-sm price">
                                        ￥<span className="font-md">{item.productPrice}</span> 起
                                         </p>
                                </a>
                            })
                        }

                    </div>
                </section>
                <section className="list-container city-container">
                    <Title data={this.state.menu3[2]} />
                    <div className="list clearfix">
                        {
                            menu6.map(item => {
                                return <a className="pull-left city-item" key={item.scenic} href=""> 
                                <div className="thumb-wrap"> 
                                    <img className="city-cover lazy" alt={item.desc} src={item.cover} /> 
                                    <div className="layer font-lg regular-font">{item.cityName}</div> 
                                </div>
                                 <p className="txt-center font-sm">{`${item.fxb}位当地飞小编推荐`}</p> 
                            </a>
                            })
                        }
                    </div>
                    <a className="get-more font-md txt-center" href="/column/news">更多目的地推荐</a>
                </section>
                <section className="list-container selected-container"> 
                    <Title data={this.state.menu3[3]} />
                        {
                            menu7.map(item => {
                                return<div className="list" key={item.column}>
                                        <section className="flex-wrap sub-title-wrap"> <div className="font-md">{item.column}</div> <div className="flex-item line"></div>  <a href="###" className="font-md more-btn">更多</a>  </section>
                                       <a className="selected-item" key={item.article[0].id} href="\"> 
                                                    <p className="font-lg selected-title">{item.article[0].title}
                                                    </p> 
                                                    <div className="flex-wrap"> 
                                                        <img className="selected-cover lazy" src={item.article[0].cover} /> 
                                                        <div className="flex-item selected"> 
                                                            <p className="font-sm">{item.article[0].desc} </p>
                                                            <p className="product-tag">
                                                                <span>{item.article[0].tag[0]} </span>  <span>{item.article[0].tag[1]} </span>  
                                                            </p> 
                                                        </div> 
                                            </div> 
                                        </a>
                                        <a className="selected-item" key={item.article[1].id} href="\"> 
                                                    <p className="font-lg selected-title">{item.article[1].title}
                                                    </p> 
                                                    <div className="flex-wrap"> 
                                                        <img className="selected-cover lazy" src={item.article[1].cover} /> 
                                                        <div className="flex-item selected"> 
                                                            <p className="font-sm">{item.article[1].desc} </p>
                                                            <p className="product-tag">
                                                                <span>{item.article[1].tag[1]} </span>  <span>{item.article[1].tag[1]} </span>  
                                                            </p> 
                                                    </div> 
                                            </div> 
                                        </a>
                                </div>   
                            })
                        }
                      
                      <a className="get-more font-md txt-center" href="/column/news">更多栏目推荐</a>
                </section>
            </div>

        </div>
    }
}
App = withRouter(App)
export default App;