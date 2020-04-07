import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom"
import '../assects/css/footer.css'
import AsyncComponent from "./AsyncComponent"
const HomeComponent = AsyncComponent(() => import("../views/Home"))
const CategoryComponent = AsyncComponent(() => import("../views/Cartgory"))
const CartComponent = AsyncComponent(() => import("../views/Cart"))
const MineComponent = AsyncComponent(() => import("../views/Mine"))
class Footer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            activeHome: true,
            activeCategory: false,
            activeCart: false,
            activeMine: false
        }
    }
    componentWillMount() {
        this.handlerFooter(this.props)
    }
    componentWillReceiveProps(newprops) {
        this.handlerFooter(newprops)
    }
    goPage = (componentUrl) => {
        this.props.history.replace(componentUrl)
    }
    handlerFooter = (props) => {
        console.log(this.props.location.pathname)
        switch (props.location.pathname) {
            case "/mobile/home":
                this.setState({
                    activeHome: true,
                    activeCategory: false,
                    activeSearch: false,
                    activeCart: false,
                    activeMine: false
                })
                break;
            case "/mobile/cartgory":
                this.setState({
                    activeHome: false,
                    activeCategory: true,
                    activeSearch: false,
                    activeCart: false,
                    activeMine: false
                })
                break;
            case "/mobile/cart":
                this.setState({
                    activeHome: false,
                    activeCategory: false,
                    activeSearch: false,
                    activeCart: true,
                    activeMine: false
                })
                break;
            case "/mobile/mine":
                this.setState({
                    activeHome: false,
                    activeCategory: false,
                    activeSearch: false,
                    activeCart: false,
                    activeMine: true
                })
                break;
            default:
                break;
        }
    }
    render() {
        return (
            <div>
                <React.Fragment>
                    <Switch>
                        <Route path={"/mobile/home"} component={HomeComponent}></Route>
                        <Route path={"/mobile/cartgory"} component={CategoryComponent}></Route>
                        <Route path={"/mobile/cart"} component={CartComponent}></Route>
                        <Route path={"/mobile/mine"} component={MineComponent}></Route>
                    </Switch>
                </React.Fragment>
                <div className="footer">
                    <ul onClick={this.goPage.bind(this, "/mobile/home")}>
                        <li className={this.state.activeHome ? "icon home-active" : "icon home"}></li>
                        <li className={this.state.activeHome ? "text-active" : "text"}>首页</li>
                    </ul>
                    <ul onClick={this.goPage.bind(this, "/mobile/cartgory")}>
                        <li className={this.state.activeCategory ? "icon category-active" : "icon category"}></li>
                        <li className={this.state.activeCategory ? "text-active" : "text"}>分类</li>
                    </ul>
                    <ul onClick={this.goPage.bind(this, "/mobile/cart")}>
                        <li className={this.state.activeCart ? "icon cart-active" : "icon cart"}></li>
                        <li className={this.state.activeCart ? "text-active" : "text"}>购物车</li>
                    </ul>
                    <ul onClick={this.goPage.bind(this, "/mobile/mine")}>
                        <li className={this.state.activeMine ? "icon mine-active" : "icon mine"}></li>
                        <li className={this.state.activeMine ? "text-active" : "text"}>我的</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Footer;

