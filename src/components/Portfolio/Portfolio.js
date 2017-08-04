import React from 'react'
import { Component } from 'react'

import jamba from './../../img/jamba3.png'
import youtube from './../../img/youtube.png'
import noServer from './../../img/no-server.png'
import Slider from 'react-slick';

import './Portfolio.css'

export default class SectionOne extends Component{

    constructor(props){
        super(props);
        this.WidthChange = this.WidthChange.bind(this);
    }

    WidthChange(mq) {
        let settings;
        if(mq.matches){
            this.settings = {
                dots: true,
                infinite: true,
                arrows: false,
                speed: 500,
                slidesToShow: 3,
                slidesToScroll: 3,
                autoplay: true,
                swipe: true,
                draggable: true,
            }
        } else {
            this.settings = {
                dots: true,
                infinite: true,
                arrows: false,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                draggable: true,
            }
        }
    }


    render(){
        const mq = window.matchMedia( "(min-width: 960px)" );
        if (matchMedia) {
            let widthChange = this.WidthChange;
            const mq = window.matchMedia("(min-width: 960px)");
            mq.addListener(widthChange);
            widthChange(mq);
        }

        if(mq.matches){
            this.settings = {
                dots: true,
                infinite: true,
                arrows: false,
                speed: 500,
                slidesToShow: 3,
                slidesToScroll: 3,
                autoplay: true,
                swipe: true,
                draggable: true,
            }
        } else {
            this.settings = {
                dots: true,
                infinite: true,
                arrows: false,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                draggable: true,
        }
    }
        return(
            <section id="portfolio" className="main_portfolio_section">
                <div id="portfolio_title">
                    <h1>Portfolio</h1>
                    <p>Recent Projects</p>
                </div>
                <div id="mobile_projects_holder" className="mobile_projects_holder">
                    <Slider {...this.settings}>
                        <div className="personal_proj_div">
                            <div className="personal_proj">
                                <div className="personal_hover">
                                    <div id="personal_hover_overlay">
                                    </div>
                                    <div className="personal_hover_words">
                                        <h1>Jamba Juice</h1>
                                        <p>Clone</p>
                                        <p>Angular</p>
                                        <p>Node</p>
                                        <p>PostgresSQL</p>
                                    </div>
                                    <div className="personal_hover_links">
                                        <h1><a href="https://youtu.be/-BnIAlkpM6E" target="_blank">Walk-Through</a></h1>
                                        <h2><a href="http://jjclone.jdpabst.com" target="_blank">Live Site</a></h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="group_proj_div">
                            <div className="group_proj">
                                <div className="group_hover">
                                    <div id="group_hover_overlay">
                                    </div>
                                    <div className="group_hover_words">
                                        <h1>YouTube</h1>
                                        <p>Clone</p>
                                        <p>React</p>
                                        <p>Node</p>
                                        <p>PostgresSQL</p>
                                    </div>
                                    <div className="group_hover_links">
                                        <h1><a href="https://youtu.be/3fRNWnwc49o" target="_blank">Walk-Through</a></h1>
                                        <h2><a href="http://ytclone.jdpabst.com" target="_blank">Live Site</a></h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="no_server_proj_div">
                            <div className="no_server">
                                <div className="no_server_hover">
                                    <div id="no_server_hover_overlay">
                                    </div>
                                    <div className="no_server_hover_words">
                                        <h1>Bucket List</h1>
                                        <p>No-Server App</p>
                                        <p>Angular</p>
                                    </div>
                                    <div className="no_server_hover_links">
                                        <h1><a href="https://youtu.be/ymB0DqQWd2c" target="_blank">Walk-Through</a></h1>
                                        <h2><a href="https://jdpabst.github.io/#!/" target="_blank">Live Site</a></h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="zodiac_proj_div">
                            <div className="zodiac">
                                <div className="zodiac_hover">
                                    <div id="zodiac_hover_overlay">
                                    </div>
                                    <div className="zodiac_hover_words">
                                        <h1>Empyrean</h1>
                                        <p>React</p>
                                        <p>Node</p>
                                        <p>PostgresSQL</p>
                                    </div>
                                    <div className="zodiac_hover_links">
                                        <h1><a href="https://youtu.be/FzKw_yrYgRk" target="_blank">Walk-Through</a></h1>
                                        <h2><a href="http://empyrean.jdpabst.com/#!/" target="_blank">Live Site</a></h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="todo_proj_div">
                            <div className="todo">
                                <div className="todo_hover">
                                    <div id="todo_hover_overlay">
                                    </div>
                                    <div className="todo_hover_words">
                                        <h1>Empyrean</h1>
                                        <p>React</p>
                                        <p>Node</p>
                                        <p>PostgresSQL</p>
                                    </div>
                                    <div className="todo_hover_links">
                                        <h1><a href="" target="_blank">Walk-Through</a></h1>
                                        <h2><a href="http://todo.jdpabst.com/#!/" target="_blank">Live Site</a></h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </section>
        )
    }


}