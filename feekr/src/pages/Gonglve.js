import React, { Component } from 'react';



import Search from '../components/search'
import '../css/gl.scss'
import Api from '../api/Gonglve'
class Gonglve extends Component {
    state = {
        cityrecommend: [
        ],


        citylist: []
    }
    goto = (id) => {
        this.props.history.push('/gonglve/guide/' + id)
    }
    async componentDidMount() {
        let { data } = await Api.citylist();
        // console.log(data[0].result.list)
        // console.log(this.props)

        let cityrecommenddatas = await Api.cityrecommend();
        // console.log(cityrecommenddatas.data[0].result.list)
        let cityrecommend = cityrecommenddatas.data[0].result.list;
        this.setState({
            cityrecommend,
            citylist: data[0].result.list
        })
    }
    render() {
        // console.log(this.state.cityrecommend)
        // console.log(this.props.match.path)
        let { cityrecommendImg, cityrecommend, citylist } = this.state
        return <div id='gonglve'>
            <Search />
            <section className="season-recommend-container">
                <div className="season-recommend">
                    <header className="header-title-wrap txt-center font-lg regular-font">
                        <span>-</span>
                        <span className="section-title">当季小众推荐</span>
                        <span>-</span>
                    </header>
                    <div className="item-container clearfix body-space">
                        {
                            cityrecommend.map((item) => {
                                return <div className="item pull-left"
                                    onClick={this.goto.bind('this', item.scenic)}
                                    key={item.scenic}>
                                    <img src={`https://images.weserv.nl/?url=${item.cover}`} style={{ display: "block" }} />
                                    <div className="item-title txt-center city-title font-md">{item.cityName}</div>
                                    <div className="item-desc txt-center city-desc font-sm">{item.desc}</div>
                                </div>
                            })
                        }
                    </div>
                </div>

            </section>
            <section className="area-list-container">
                {
                    citylist.map((item, inx) => {
                        return <section className="area-list" key={inx}>
                            <div className="item-container body-space clearfix">
                                <header className="header-title-wrap txt-center font-lg">
                                    <span className="section-title regular-font">{item.area}</span>
                                    <div className="sub-title txt-center font-sm" > {item.desc} </div >
                                </header>
                                {
                                    item.city.map((item, inx) => {
                                        return <div className="item pull-left" key={item.id} onClick={this.goto.bind('this', item.id)}>
                                            <img src={`https://images.weserv.nl/?url=${item.cover}`} style={{ display: "block" }} />
                                            <div className="item-title txt-center city-title font-md">{item.name}</div>
                                        </div>
                                    })
                                }

                            </div>
                        </section>
                    })
                }

            </section>
        </div>
    }
}

export default Gonglve;