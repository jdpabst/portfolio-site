import React from 'react'
import { Component } from 'react'
import './Header.css'

export default class Header extends Component{
    constructor(props){
        super(props);

        this.handleScroll = this.handleScroll.bind(this);
        this.handleMobileMenu = this.handleMobileMenu.bind(this);
        this.handleMobileMenuClose = this.handleMobileMenuClose.bind(this);
    }
handleScroll(id){
    document.getElementById(id).scrollIntoView({block: "start", behavior: "smooth"})
}

handleMobileMenu(id){
    document.getElementById(id).style.display = 'block'
}

handleMobileMenuClose(id){
    document.getElementById(id).style.display = 'none'
}

    render(){
        return(
            <section id="top" className="main_header_section">
                <div id="header_name">
                    <h1>Hello, I'm Jessica Pabst</h1>
                    <h2>Full-Stack Web Developer</h2>
                </div>
                <div id="signature" onClick={ ()=> {this.handleScroll('top')} }>
                    JP
                </div>
                <div id="header_nav">
                    <ul>
                        <li onClick={ ()=> {this.handleScroll('portfolio')} }>Portfolio</li>
                        <li onClick={ ()=> {this.handleScroll('skills')} }>Skills</li>
                        <li onClick={ ()=> {this.handleScroll('about')} }>About</li>
                        <li>Blog</li>
                        <li onClick={ ()=> {this.handleScroll('contact')} }>Contact</li>
                    </ul>
                </div>

                <div id="top" className="mobile_header_nav" onClick={ ()=> {this.handleMobileMenu('drop_menu')} }>
                    <div id="hamburger">
                        <div id="bar"></div>
                        <div id="bar"></div>
                        <div id="bar"></div>
                    </div>
                </div>
                <div id="drop_menu">
                    <p>Portfolio</p>
                    <p>Skills</p>
                    <p>About</p>
                    <p>Blog</p>
                    <p>Contact</p>
                    <div id="exit_mobile_menu" onClick={ ()=> { this.handleMobileMenuClose("drop_menu") }}>X</div>
                </div>
            </section>
        )
    }
}