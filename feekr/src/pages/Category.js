import React, { Component } from 'react';
import Api from '../api/Guide.js'
class Category extends Component {
    state = {
        list: []
    }
    async getdata() {
        let { id } = this.props.props.match.params
        let categoryId = this.props.props.location.pathname.slice(-1)
        // console.log(categoryId)
        let data = await Api.themelist({
            id,
            categoryId
        })
        // console.log(data.result.list)
        this.setState({
            list: data.result.list
        })
    }
    gotoTheme = (id) => {//点击来到主体推荐详情
        // console.log(this.props)
        this.props.props.history.push(`/gonglve/guide/theme_detail/${id}`)
    }
    componentDidMount() {
        this.getdata()
    }
    componentDidUpdate(prevProps, prevState) {
        // this.getdata()
        // console.log(prevProps, prevState)
        if (prevProps.props.location.pathname.slice(-1) != this.props.props.location.pathname.slice(-1)) {
            this.getdata()
        }
    }
    render() {
        // console.log(this.props)
        // console.log(this.props.props.location.pathname.slice(-1))

        return <div>
            <div className="guide-theme-list-container theme-mode body-space">
                <div className="list-wrap">
                    {
                        this.state.list.map(item => {
                            return <div className="theme-item theme-item-city"
                                onClick={this.gotoTheme.bind(null, item.id)}
                                key={item.id}>
                                <div className="thumb-wrap">
                                    <img src={item.cover} />
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


                </div>
                <div className="loading-notice"></div>
            </div>
        </div>
    }
}

export default Category;