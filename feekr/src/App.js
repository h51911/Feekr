import React, { Component } from 'react'
import { Route, Redirect, Switch, withRouter } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Reg from './pages/Reg'
import Search from './components/search'
import Goods from './pages/Goods'
import Cart from './pages/Cart'
import { Menu, Icon, Row, Col } from 'antd'
import 'antd/dist/antd.css'
class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedKeys: ['/home'],
            menu: [
                {
                    name: 'home',
                    path: '/home',
                    text: '首页',
                    icon: 'home'
                }, {
                    name: 'discover',
                    path: '/discover',
                    text: '发现',
                    icon: 'compass'
                }, {
                    name: 'cart',
                    path: '/cart',
                    text: '购物车',
                    icon: 'shopping-cart'
                }
            ],
            menu2: [
                {
                    name: 'login',
                    path: '/login',
                    text: '登录',
                    icon: 'login'
                }, {
                    name: 'reg',
                    path: '/reg',
                    text: '注册',
                    icon: 'user-add'
                }
            ]
        }
        this.changeMenu = this.changeMenu.bind(this)
    }
    changeMenu(cur) {
        // console.log(cur)
        this.props.history.push(cur.key)
        this.setState({
            selectedKeys: [this.props.history.location.pathname]
        })
    }

    render() {
        let { menu, selectedKeys, menu2 } = this.state
        return <div>
            <Search />
            <Row>
                <Col span={16}>
                    <Menu mode="horizontal"
                        onSelect={this.changeMenu}
                        selectedKeys={selectedKeys}>
                        {
                            menu.map(item => {
                                return <Menu.Item key={item.path} style={{ paddingLeft: 5, paddingRight: 5 }}>
                                    <Icon type={item.icon} />
                                    {item.text}
                                </Menu.Item>
                            })
                        }

                    </Menu></Col>
                <Col span={8}>
                    <Menu mode="horizontal"
                        onSelect={this.changeMenu}
                        selectedKeys={selectedKeys}>
                        {
                            menu2.map(item => {
                                return <Menu.Item key={item.path} style={{ paddingLeft: 5, paddingRight: 5, margin: 'right' }}>
                                    <Icon type={item.icon} />
                                    {item.text}
                                </Menu.Item>
                            })
                        }

                    </Menu></Col>
            </Row>
            <Switch>
                <Route path="/home" component={Home} />
                {/* <Route path="/discover" component={Discover} /> */}
                <Route path="/goods/:id" component={Goods} />
                <Route path="/cart" component={Cart} />
                <Route path="/login" component={Login} />
                <Route path="/reg" component={Reg} />
                <Route path="/" component={Home} />
            </Switch>
        </div>
    }
}
// App = withRouter(App)
export default App;