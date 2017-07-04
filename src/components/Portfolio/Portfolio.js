import React from 'react'
import { Component } from 'react'

import jamba from './../../img/jamba3.png'
import youtube from './../../img/youtube.png'
import noServer from './../../img/no-server.png'
import './Portfolio.css'

export default class SectionOne extends Component{

    render(){
        return(
            <section id="portfolio" className="main_portfolio_section">
                <div id="portfolio_title">
                    <h1>Portfolio</h1>
                    <p>Recent Projects</p>
                </div>
                <div id="projects_holder">
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
                        </div>
                    </div>
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
                        </div>
                    </div>
                    <div className="no_server">
                        <div className="no_server_hover">
                            <div id="no_server_hover_overlay">
                            </div>
                            <div className="no_server_hover_words">
                                <h1>Bucket List</h1>
                                <p>No-Server App</p>
                                <p>Angular</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/*<div id="personal_holder">
                    <div className="personal_proj_info">
                        <h2>Jamba Juice</h2>
                        <p>Clone</p>
                        <p>Angular</p>
                        <p>Node</p>
                        <p>PostgresSQL</p>
                    </div>
                </div>
                <div className="personal_proj_img">
                        <img src={ jamba }/>
                </div>
                <div id="group_holder">
                    <div className="group_proj_info">
                        <h2>YouTube</h2>
                        <p>Clone</p>
                        <p>React</p>
                        <p>Node</p>
                        <p>PostgresSQL</p>
                    </div>
                </div>
                <div className="group_proj_img">
                        <img src={ youtube }/>
                </div>
                <div id="no_server_holder">
                    <div className="no_server_proj_info">
                        <h2>Bucket List App</h2>
                        <p>No-Server</p>
                        <p>Angular</p>
                    </div>
                </div>
                <div className="no_server_proj_img">
                        <img src={ youtube }/>
                </div>*/}
            </section>
        )
    }


}