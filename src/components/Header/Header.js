import React from 'react'
import { Component } from 'react'
import './Header.css'

export default class Header extends Component{



    render(){
        return(
            <section className="main_header_section">
                <div id="header_name">
                    <h1>Hello, I'm Jessica Pabst</h1>
                    <h2>Full-Stack Web Developer</h2>
                </div>
                <div id="signature">
                    JP
                </div>
                <div id="header_nav">
                    <ul>
                        <li>Portfolio</li>
                        <li>Skills</li>
                        <li>About</li>
                        <li>Blog</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </section>
        )
    }
}