import React,{Component} from 'react';
import { Route, Redirect, Switch, withRouter } from 'react-router-dom'

import Search from '../components/search'


class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedKeys: ['/gonglve'],
            menu: [
                {
                    name: 'gonglve',
                    path: '/gonglve',
                    text: '攻略',
                    icon: 'icon-gonglve',
                    color:'#FCBC00'
                }, {
                    name: 'dujia',
                    path: '/dujia',
                    text: '度假',
                    icon: 'icon-dujia',
                    color:'#51A5DC'
                }, {
                    name: 'huwai',
                    path: '/huwai',
                    text: '玩乐',
                    icon: 'icon-huwai',
                    color:'#F15A62'
                },{
                    name: 'meiwu',
                    path: '/meiwu',
                    text: '美物',
                    icon: 'icon-meiwu',
                    color:'#A5CE00'
                },{
                    name: 'yanjiusuo',
                    path: '/yanjiusuo',
                    text: '研究所',
                    icon: 'icon-yanjiusuo',
                    color:'#00AC59'
                }
            ],
          
        }
        this.changeMenu = this.changeMenu.bind(this)
    }
    changeMenu(cur) {
        console.log(cur)
        this.props.history.push(cur)
        this.setState({
            selectedKeys: [this.props.history.location.pathname]
        })
    }

    render() {
        let { menu } = this.state
        return <div>
            <Search/>
            <section className="nav-container"> 
                <div className="flex-wrap"> 
                {
                     menu.map(item => {
                        return <a  onClick={this.changeMenu.bind(this,item.path)} key={item.path} className="flex-item txt-center"> 
                        <p className={`"iconfont ${item.icon}"`} style={{color:`"${item.color}"`}}></p>
                     <p className="font-sm">{item.text}</p>
                    </a>  
                    })
                } 
                    
                 </div> 
            </section>
          
        </div>
    }
}
App = withRouter(App)
export default App;