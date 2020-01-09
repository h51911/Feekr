import React, { Component } from 'react'
import { Route, Switch, withRouter ,Redirect} from 'react-router-dom'
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
import 'antd/dist/antd.css'
// import './utils/rem'
import Morenews from './pages/Morenews'
class App extends Component {
    render() {
        // console.log('app', this.props)

        return <div>
            <Switch>
                <Route path="/gonglve" component={Gonglve} />
                {/* <Route path="/discover" component={Discover} /> */}
                <Route path="/gengduo" component={Morenews} />
                <Route path="/dujia" component={Dujia} />
                <Route path="/huwai" component={Huwai} />
                <Route path="/login" component={Login} />
                <Route path="/meiwu" component={Meiwu} />
                <Route path="/reg" component={Reg} />
                <Route path="/user" component={User} />
                <Route path="/exit" component={Exit} />
                <Route path="/forget" component={Forget} />
                <Route path="/xiangqing" component={Xiangqing} />
                <Route path="/yanjiusuo" component={Home} />
                <Route path="/home" component={Home} />
                <Redirect from="/" to="/home" exact />
            </Switch>
            <Nav path={this.props.location.pathname} />
        </div>
    }
}
App = withRouter(App)
export default App;