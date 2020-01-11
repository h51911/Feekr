import React, { Component } from 'react';
import '../css/Guide.scss'
import Api from '../api/Guide.js'
class Guide extends Component {
    constructor(props) {
        super(props)
        this.state = {
            detail: [],//头部
            guidecategory: [],//美食推荐
            themelist: [],//主体推荐
            pathlist: [],//路线推荐
            articlelist: [],//私藏咨询
            shoplist: [],//玩乐度假
            nearby: [],//周边城市
            id: this.props.match.params.id
        }

    }
    goto(id, inx) {//点击来到主题推荐
        // console.log(this.props, id)
        this.props.history.push(`/gonglve/guide/theme/${id}/${inx}`)
    }
    gotoPath = (id) => {//点击来到路线推荐
        // console.log(id)
        this.props.history.push(`/gonglve/guide/pathdetail/${id}`)
    }
    gotoTheme = (id) => {//点击来到主体推荐详情
        // console.log(id)
        this.props.history.push(`/gonglve/guide/theme_detail/${id}`)
    }
    async getGuide(id) {
        // console.log(this.props.match.params)
        // let id = this.state.id;
        // console.log(id)
        let detail = await Api.detail({
            id,
        })
        // console.log(detail.result)
        let guidecategory = await Api.guidecategory({
            id,
        })
        // console.log(guidecategory.result.list)
        let themelist = await Api.themelist({
            id,
        })
        // console.log(themelist.result.list)
        let pathlist = await Api.pathlist({
            id,
        })
        // console.log(pathlist.result.list)
        let articlelist = await Api.articlelist({
            id,
        })
        // console.log(articlelist.result.list)
        let shoplist = await Api.shoplist({
            id,
        })
        // console.log(shoplist.result.list)
        let nearby = await Api.nearby({
            cityId: id,
        })
        // console.log(nearby.result.list)
        this.setState({
            detail: detail.result,
            guidecategory: guidecategory.result.list,
            themelist: themelist.result.list,
            pathlist: pathlist.result.list,
            articlelist: articlelist.result.list,
            shoplist: shoplist.result.list,
            nearby: nearby.result.list
        })
    }
    componentDidMount() {//从gonglve来到guide 渲染页面
        this.getGuide(this.state.id)
    }
    gotoCity = (id) => {//点击周边城市 来到guide
        this.props.history.push(`/gonglve/guide/${id}`)
        this.getGuide(id)
    }
    changeMenu2 = (cur) => {
        console.log(cur)
        this.props.history.push('/' + cur)
        // this.props.history.go('/' + cur)
        // https://wapi.feekr.com/shop/product/detail?productId=35865&pvFrom=wap_product_like&shopid=FK
    }
    render() {
        let { detail, guidecategory, themelist, pathlist, articlelist, shoplist, nearby } = this.state
        // console.log(detail, guidecategory, themelist, pathlist, articlelist, shoplist, nearby)
        let { id } = this.props.match.params;
        return <div>
            <div className="guide-wrap guide-detail-wrap">
                <div className="city-container">
                    <img src={`https://images.weserv.nl/?url=${detail.cover}`} />
                    <div className="city-name txt-center">
                        <p className="city regular-font">{detail.cityName}</p>
                    </div>
                    <div className="iconfont back-btn" data-history="back"></div>
                </div>
                <div className="guide-nav">
                    <nav className="table-mode">
                        {
                            guidecategory.map(item => {
                                return <div className="menu table-cell" data-target="clear" key={item.id} onClick={this.goto.bind(this, id, item.id)}>
                                    <p className="cate-icon"><span className={`iconfont ${item.icon}`}></span></p>
                                    <p className="cate-name font-sm"><span className="nav-name">{item.title}</span></p>
                                </div>
                            })
                        }



                    </nav>
                </div>
                <div className="theme-container guide-theme-list-container theme-mode detail-container">
                    <header className="header-title-wrap txt-center font-lg regular-font">
                        <span>-</span>
                        <span className="section-title">主题推荐</span>
                        <span>-</span>
                    </header>
                    {
                        themelist.map(item => {
                            return <div className="theme-item theme-item-city"
                                onClick={this.gotoTheme.bind(null, item.id)}
                                key={item.id}>
                                <div className="thumb-wrap">
                                    <img className="" src={`https://images.weserv.nl/?url=${item.cover}`} style={{ display: "block" }} />
                                </div>
                                <div className="theme-desc">
                                    <div className="content">{item.title}</div>

                                    <div className="style-tag">
                                        <span className="series font-md regular-font">{item.recommendCount}大推荐</span>
                                    </div>

                                </div>
                                <div className="cover"></div>
                            </div>
                        })
                    }



                    <div onClick={this.goto.bind(this, id, 1)} className="get-more-list">更多主题推荐</div>
                </div>
                <div className="path-container theme-mode guide-path-list-wrap detail-container">
                    <header className="header-title-wrap txt-center font-lg regular-font">
                        <span>-</span>
                        <span className="section-title">路线推荐</span>
                        <span>-</span>
                    </header>

                    {
                        pathlist.map(item => {
                            return <div className="theme-item theme-item-path"
                                onClick={this.gotoPath.bind(null, item.id)}
                                key={item.id}>
                                <div className="thumb-wrap clearfix">
                                    {
                                        item.cover.map((item, inx, arr) => {
                                            // console.log(arr[inx])
                                            return <img className="pull-left" src={arr[inx]} style={{ display: "block" }} key={inx} />
                                        })
                                    }

                                </div>
                                <div className="content"><span className="regular-font">{item.title}</span>
                                    <p>
                                        路线包括：{item.scenic.join('－')}
                                    </p>
                                </div>
                            </div>
                        })
                    }





                </div>
                <div className="article-container guide-article-list-wrap detail-container">
                    <header className="header-title-wrap txt-center font-lg regular-font">
                        <span>-</span>
                        <span className="section-title">私藏资讯</span>
                        <span>-</span>
                    </header>
                    {
                        articlelist.map(item => {
                            return <div className="item" href="/column/article?id=lJdomQ==&amp;pv_from=guide_view" data-target="position" key={item.id}>
                                <img className="" src={item.cover} style={{ display: "block" }} />
                                <div className="title regular-font txt-center">{item.title}</div>
                            </div>
                        })
                    }



                </div>
                <div className="exp-container detail-container clearfix">
                    <header className="header-title-wrap txt-center font-lg regular-font">
                        <span>-</span>
                        <span className="section-title">玩乐度假</span>
                        <span>-</span>
                    </header>
                    <div className="list-wrap">

                        {
                            shoplist.map(item => {
                                return <div className="item pull-left txt-center" onClick={this.changeMenu2.bind(this, `xiangqing/${item.productId}`)} key={item.productId}>
                                    <div className="item-thumb">
                                        <img src={item.cover} style={{ display: "block" }} />
                                    </div>
                                    <div className="item-title txt-center font-sm">{item.title}</div>
                                    <p className="area">{item.area} - {item.site}</p>
                                    <p className="font-sm price">￥<span className="font-md">{item.price}</span> 起</p>
                                </div>
                            })
                        }







                        <div className="clearfix"></div>

                        <div href="https://m.feekr.com/search?keyword=杭州&amp;pvFrom=faixian_guide_product" className="get-more-list" data-target="position">更多玩乐度假</div>


                    </div></div>
                <div className="nearby-city-container clearfix detail-container">
                    <header className="header-title-wrap txt-center font-lg regular-font">
                        <span>-</span>
                        <span className="section-title">周边城市</span>
                        <span>-</span>
                    </header>
                    <div className="list-wrap flex-wrap">
                        {
                            nearby.map(item => {
                                return <div className="flex-item" onClick={this.gotoCity.bind(null, item.id)} key={item.id}>
                                    <img src={`https://images.weserv.nl/?url=${item.cover}`} style={{ display: "block" }} />
                                    <div className="item-title txt-center font-md">{item.name}</div>
                                    <p className="item-title txt-center font-sm">距离 <strong>{item.distance}</strong> 公里</p>
                                </div>
                            })
                        }





                    </div></div>
            </div>
        </div>
    }
}

export default Guide;