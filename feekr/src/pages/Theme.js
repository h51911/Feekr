import React, { Component } from 'react';
import '../css/Theme.scss'
// import { findDOMNode } from 'react-dom'
// import { Tabs, TabPane } from 'antd';
import Api from '../api/Guide.js'
import { NavLink } from 'react-router-dom';
import Category from './Category';
class Theme extends Component {
    state = {
        guidecategory: [],
        id: ''
    }
    async  componentDidMount() {
        // console.log(this.props)
        let { id } = this.props.match.params;
        let guidecategory = await Api.guidecategory({
            id,
        })
        this.setState({
            guidecategory: guidecategory.result.list,
            id
        })
    }
    render() {
        // const { TabPane } = Tabs;
        // function callback(key) {
        //     console.log(key);
        // }
        let { guidecategory, id } = this.state
        // console.log(guidecategory)
        return <div>
            <div className="guide-wrap guide-theme-list-wrap">
                <div className="notice-tab">
                    {
                        guidecategory.map(item => {
                            return <NavLink to={`/gonglve/guide/theme/${id}/${item.id}`} className="tab" style={{ width: "21%" }} key={item.id} activeClassName="cur">
                                {item.title}
                            </NavLink>
                            /*   <span>|</span> */
                        })
                    }
                </div>
                <Category props={this.props} />
            </div>
        </div>
    }
}

export default Theme;