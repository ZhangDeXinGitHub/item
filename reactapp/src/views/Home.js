import React, { Component } from 'react';
import Swiper from "swiper"
import "../assects/css/swiper.min.css"
import "../assects/css/index.css"
class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            bannerLists: [{
                id: 1,
                imgsrc: require("../assects/imags/home/banner01.webp")
            }, {
                id: 2,
                imgsrc: require("../assects/imags/home/banner02.webp")
            }, {
                id: 3,
                imgsrc: require("../assects/imags/home/banner03.jpg")
            }, {
                id: 4,
                imgsrc: require("../assects/imags/home/banner04.webp")
            }, {
                id: 5,
                imgsrc: require("../assects/imags/home/banner05.webp")
            }]
        }
    }
    getBanner = () => {
        new Swiper(".swiper-container", {
            autoplay: {
                delay: 3000,
                stopOnLastSlide: false,
                disableOnInteraction: true,
            },
            pagination: {
                el: '.swiper-pagination',
            }
        })
    }
    componentDidMount() {
        this.getBanner()
    }
    render() {
        return (
            <div className="page">
                <div className="header">
                    <div className="leftImg"></div>
                    <h4>蓝果小镇商城</h4>
                    <div className="rightImg"></div>
                </div>
                {/* 轮播图 */}
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        {
                            this.state.bannerLists.map((banner, key) => {
                                return (
                                    <div className="swiper-slide" key={key}>
                                        <img src={banner.imgsrc} alt="" />
                                    </div>
                                )
                            })
                        }

                    </div>
                    <div className="swiper-pagination"></div>
                </div>
                {/* 快速导航 */}
                <div className="aside">
                    <div className="mouse">
                        <img src="https://img12.360buyimg.com/n7/jfs/t1/100888/8/14513/217277/5e6742e0Ee0c4b224/9c37213504c7676d.jpg" alt="" />
                        <span className="text">小米无线鼠标</span>
                        <div className="price">
                            <span className="price1">￥64.00</span>
                            <span className="price2">￥64.00</span>
                        </div>
                        <div className="num">
                            <span className="num1">新品</span>
                            <span className="num2">销量:  13</span>
                        </div>

                    </div>
                    <div className="computer">
                        <img src="https://img11.360buyimg.com/n7/jfs/t1/99733/2/8261/174001/5e045083Ec79b2c6e/fac2d957b511c1da.jpg" alt="" />
                        <span className="text">Lenovo|  联想笔记本电脑</span>
                        <div className="price">
                            <span className="price1">￥4999</span>
                            <span className="price2">￥5999</span>
                        </div>
                        <div className="num">
                            <span className="num1">新品</span>
                            <span className="num2">销量:  80</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;