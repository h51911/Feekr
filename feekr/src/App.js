import React, { Component } from 'react'
import { Route, Switch, withRouter, Redirect } from 'react-router-dom'
import Home from './pages/Home'
import Gonglve from './pages/Gonglve'
import Dujia from './pages/Dujia'
// import Search from './components/search'
import Meiwu from './pages/Meiwu'
import Huwai from './pages/Huwai'
import Nav from './commom/Nav'
import Login from './pages/Login'
import Reg from './pages/Reg'
import Forget from './pages/Forget'
import User from './pages/User'
import Exit from './pages/Exit'
import Xiangqing from './pages/Xiangqing'
// import './utils/rem'
import Morenews from './pages/Morenews'
import Guide from './pages/Guide'
import NavSearch from './pages/NavSearch'
import Theme from './pages/Theme'
class App extends Component {
    render() {
        // console.log('app', this.props)

        return <div>
            <Switch>
                <Route path="/gonglve" component={Gonglve} exact />
                {/* <Route path="/discover" component={Discover} /> */}
                <Route path="/gengduo" component={Morenews} />
                <Route path="/dujia" component={Dujia} />
                <Route path="/huwai" component={Huwai} />
                <Route path="/login" component={Login} />
                <Route path="/meiwu" component={Meiwu} />
                <Route path="/reg" component={Reg} />
                <Route path="/user/:id" component={User} />
                <Route path="/exit" component={Exit} />
                <Route path="/forget" component={Forget} />
                <Route path="/xiangqing" component={Xiangqing} />
                <Route path="/yanjiusuo" component={Home} />
                <Route path="/home" component={Home} />
                {/* 动态路由，嵌套路由 */}
                <Route path="/gonglve/guide/theme/:id" component={Theme} />
                <Route path="/gonglve/guide/:id" component={Guide} />
                <Route path="/navsearch" component={NavSearch} />
                <Redirect from="/" to="/home" exact />
            </Switch>
            <Nav path={this.props.location.pathname} />
        </div>
    }
}
App = withRouter(App)
export default App;