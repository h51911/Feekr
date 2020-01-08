import React, { Component } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import Home from './pages/Home'
import Gonglve from './pages/Gonglve'
import Dujia from './pages/Dujia'
// import Search from './components/search'
import Meiwu from './pages/Meiwu'
import Huwai from './pages/Huwai'
import Morenews from './pages/Morenews'
class App extends Component {
    render() {
        return <div>
            <Switch>
                <Route path="/gonglve" component={Gonglve} />
                {/* <Route path="/discover" component={Discover} /> */}
                <Route path="/gengduo" component={Morenews} />
                <Route path="/dujia" component={Dujia} />
                <Route path="/huwai" component={Huwai} />
                <Route path="/meiwu" component={Meiwu} />
                <Route path="/yanjiusuo" component={Home} />
                <Route path="/" component={Home} />
            </Switch>
        </div>
    }
}
App = withRouter(App)
export default App;