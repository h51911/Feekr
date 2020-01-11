import React, { Component } from 'react';
import '../css/Theme_detail.scss'
import Api from '../api/Guide'
class Theme_detail extends Component {
    state = {
        Themedetail: []
    }
    async  componentDidMount() {
        // console.log(this.props.match.params)
        let { id } = this.props.match.params
        // console.log(id)
        let Themedetail = await Api.themedetail({
            id
        })
        // console.log(Themedetail.result)
        this.setState({
            Themedetail: [Themedetail.result]
        })
    }
    render() {
        // console.log(this.state.Themedetail)
        return <div>
            {
                this.state.Themedetail.map(item => {
                    return <div className="guide-wrap guide-detail-container" key={item.title}>
                        <header className="header">
                            <p>
                                <img src={item.cover} />
                            </p>
                            <div className="title txt-center">
                                <strong>{item.title}</strong>
                            </div>
                            <div className="iconfont back-btn" data-history="back"></div>
                        </header>
                        <div className="content body-space">
                            <div className="bd-head">
                                <p>{item.desc}</p>
                            </div>
                            {
                                item.list.map(item => {
                                    return <div className="bd-article" key={item.title}>
                                        <div className="section">
                                            <div className="title"><strong>【{item.title}】</strong></div>
                                            <div className="intro">{item.desc}</div>
                                            <div className="pic">
                                                {
                                                    item.thumb.map((item, inx, arr) => {
                                                        return <img src={arr[inx].pic} style={{ display: "block" }} key={inx} />
                                                    })
                                                }
                                            </div>
                                            <div className="tip">
                                                {
                                                    item.tips.map(item => {
                                                        return <p key={item.title}><span>{item.title} : </span>{item.desc}</p>
                                                    })
                                                }
                                            </div>
                                        </div>

                                    </div>
                                })
                            }
                            <div className="foot">
                                <strong dangerouslySetInnerHTML={{ __html: item.foot }}></strong>
                            </div>
                        </div></div>
                })
            }

        </div>
    }
}

export default Theme_detail;