import React, { Component } from 'react';
import '../css/Pathdetail.scss'
import Api from '../api/Guide.js'
class Pathdetail extends Component {
    state = {
        pathdetail: []
    }
    async  componentDidMount() {
        // console.log(this.props.match.params)
        let { id } = this.props.match.params
        // console.log(id)
        let pathdetail = await Api.pathdetail({
            id
        })
        // console.log(pathdetail.result)
        this.setState({
            pathdetail: [pathdetail.result]
        })
    }
    render() {
        return <div>
            {
                this.state.pathdetail.map(item => {
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
                            <div>
                                <p><strong>行程总介绍：</strong>{item.desc}</p>
                                {
                                    item.tips.map(item => {
                                        return <p key={item.title}><strong>{item.title}：</strong>{item.desc}</p>
                                    })
                                }
                                {
                                    item.path.map((item, inx) => {
                                        return <p key={inx}><strong>DAY{inx + 1}路线：</strong>逢源双桥－财神湾－江南百床馆－江南木雕陈列馆－茅盾故居</p>
                                    })
                                }
                            </div>
                            {
                                item.play.map((item, inx) => {
                                    return < div key={inx}>
                                        <div className="section">
                                            <div className="title"><strong>DAY{inx + 1}游玩攻略</strong></div>
                                            <div>{item.desc}&nbsp;</div>
                                        </div>
                                        {
                                            item.list.map((item, inx) => {
                                                return <div className="sub-section" key={inx}>
                                                    <div className="section">
                                                        <div className="title"><strong>第{inx + 1}站：{item.scenic}</strong></div>
                                                        <div>{item.desc}</div>
                                                        <div>
                                                            {
                                                                item.thumb.map(item => {
                                                                    return <img src={item.pic} key={item.pic} />
                                                                })
                                                            }
                                                        </div>
                                                        <div className="tip">
                                                            {
                                                                item.tips.map(item => {
                                                                    return <p key={item.title}><span>{item.title}：</span>{item.desc}</p>
                                                                })
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                            })
                                        }
                                        <div className="section">
                                            {
                                                item.tips.map(item => {
                                                    return <p key={item.title}><strong>{item.title}：</strong>{item.desc}</p>
                                                })
                                            }
                                        </div>
                                    </div>
                                })
                            }
                        </div>
                    </div>
                })
            }
        </div>
    }
}

export default Pathdetail;