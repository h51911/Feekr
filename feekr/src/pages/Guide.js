import React, { Component } from 'react';
import '../css/Guide.scss'
import Api from '../api/Guide.js'
class Guide extends Component {
    state = {
        detail: [],//头部
        themelist: [],//主体推荐
        pathlist: [],//路线推荐
        articlelist: [],//私藏咨询
        shoplist: [],//玩乐度假
        nearby: []//周边城市
    }
    async componentDidMount() {
        // console.log(this.props.match.params)
        let { id } = this.props.match.params;
        let detail = await Api.detail({
            id,
        })
        // console.log(detail.result)
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
            themelist: themelist.result.list,
            pathlist: pathlist.result.list,
            articlelist: articlelist.result.list,
            shoplist: shoplist.result.list,
            nearby: nearby.result.list
        })
    }
    render() {
        let { detail, themelist, pathlist, articlelist, shoplist, nearby } = this.state
        // console.log(detail, themelist, pathlist, articlelist, shoplist, nearby)
        return <div>
            <div className="guide-wrap guide-detail-wrap">
                <div className="city-container">
                    <img src={`https://images.weserv.nl/?url=${detail.cover}`} />
                    <div className="city-name txt-center">
                        <p className="city regular-font">{detail.cityName}</p>
                    </div>
                    <a href="asdasd" className="iconfont back-btn" data-history="back"></a>
                </div>
                <div className="guide-nav">
                    <nav className="table-mode">

                        <a className="menu table-cell" href="/guide/theme_list?category=1&amp;id=6075&amp;pv_from=guide_view" data-target="clear">
                            <p className="cate-icon"><span className="iconfont icon-icon"></span></p>
                            <p className="cate-name font-sm"><span className="nav-name">美景</span></p>
                        </a>

                        <a className="menu table-cell" href="/guide/theme_list?category=2&amp;id=6075&amp;                      pv_from=guide_view" data-target="clear">
                            <p className="cate-icon"><span className="iconfont icon-meishi"></span></p>
                            <p className="cate-name font-sm"><span className="nav-name">美食</span></p>
                        </a>

                        <a className="menu table-cell" href="/guide/theme_list?category=3&amp;id=6075&amp;                  pv_from=guide_view" data-target="clear">
                            <p className="cate-icon"><span className="iconfont icon-fangzi"></span></p>
                            <p className="cate-name font-sm"><span className="nav-name">美宿</span></p>
                        </a>

                        <a className="menu table-cell" href="/guide/theme_list?category=4&amp;id=6075&amp;                  pv_from=guide_view" data-target="clear">
                            <p className="cate-icon"><span className="iconfont icon-shangpin"></span></p>
                            <p className="cate-name font-sm"><span className="nav-name">美物</span></p>
                        </a>

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
                            return <a className="theme-item theme-item-city" href="/guide/theme_detail?id=lpdw&amp;pv_from=guide_view" data-target="position" key={item.id}>
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
                            </a>
                        })
                    }



                    <a href="/guide/theme_list?id=6075&amp;pv_from=guide_view" className="get-more-list" data-target="position">更多主题推荐</a>
                </div>
                <div className="path-container theme-mode guide-path-list-wrap detail-container">
                    <header className="header-title-wrap txt-center font-lg regular-font">
                        <span>-</span>
                        <span className="section-title">路线推荐</span>
                        <span>-</span>
                    </header>

                    {
                        pathlist.map(item => {
                            return <a className="theme-item theme-item-path" href="/guide/path_detail?id=k5Jp&amp;pv_from=guide_view" data-target="position" key={item.id}>
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
                                        路线包括：{`${item.scenic[0]}－${item.scenic[1]}－${item.scenic[2]}－${item.scenic[3]}－${item.scenic[4]}`}
                                    </p>
                                </div>
                            </a>
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
                            return <a className="item" href="/column/article?id=lJdomQ==&amp;pv_from=guide_view" data-target="position" key={item.id}>
                                <img className="" src={item.cover} style={{ display: "block" }} />
                                <div className="title regular-font txt-center">{item.title}</div>
                            </a>
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
                                return <a className="item pull-left txt-center" href="https://m.feekr.com/product/37115&amp;pvFrom=faixian_guide_product" data-target="position" key={item.productId}>
                                    <div className="item-thumb">
                                        <img src={item.cover} style={{ display: "block" }} />
                                    </div>
                                    <div className="item-title txt-center font-sm">{item.title}</div>
                                    <p className="area">{item.area} - {item.site}</p>
                                    <p className="font-sm price">￥<span className="font-md">{item.price}</span> 起</p>
                                </a>
                            })
                        }







                        <div className="clearfix"></div>

                        <a href="https://m.feekr.com/search?keyword=杭州&amp;pvFrom=faixian_guide_product" className="get-more-list" data-target="position">更多玩乐度假</a>


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
                                return <a className="flex-item" href="/guide/detail?id=6076&amp;pvFrom=faixian_guide_product" key={item.id}>
                                    <img src={`https://images.weserv.nl/?url=${item.cover}`} style={{ display: "block" }} />
                                    <div className="item-title txt-center font-md">{item.name}</div>
                                    <p className="item-title txt-center font-sm">距离 <strong>87</strong> 公里</p>
                                </a>
                            })
                        }





                    </div></div>
            </div>
        </div>
    }
}

export default Guide;