import React from 'react'
import { Component } from 'react'

import scroll from './../../img/scroll-top.png'
import './ScrollTop.css'

export default class Scroll extends Component{
    constructor(props){
        super(props);
        this.state = {
            menu: 'close'
        }
        this.handleScroll = this.handleScroll.bind(this);
        this.handleDisplay = this.handleDisplay.bind(this);
        this.handleMobileMenu = this.handleMobileMenu.bind(this);
    }
componentDidMount() {
   window.addEventListener('scroll', this.handleDisplay);
}

componentWillUnmount() {
    window.removeEventListener('scroll', this.handleDisplay);
}
handleDisplay(){
    if (window.scrollY > 50){
        document.getElementById('scroll_top').style.display = 'block';
    }else{
        document.getElementById('scroll_top').style.display = 'none';
    }
}
handleScroll(id){
    this.setState({
        menu: 'close'
    })
    document.getElementById(id).scrollIntoView({block: "start", behavior: "smooth"})
    document.getElementById('sticky_drop_menu').style.display = 'none'
}
handleMobileMenu(id){
    if(this.state.menu === 'close'){
        this.setState({
            menu: 'open'
        })
        document.getElementById(id).style.display = 'block'
    } else if (this.state.menu === 'open'){
        this.setState({
            menu: 'close'
        })
        document.getElementById(id).style.display = 'none'
    }
}

    render(){
        return(
            <section id="scroll_top" className="main_sticky_header_section">
                <div id="sticky_signature" onClick={ ()=> {this.handleScroll('top')} }>
                    JP
                </div>
                <div id="sticky_header_nav">
                    <ul>
                        <li onClick={ ()=> {this.handleScroll('portfolio')} }>Portfolio</li>
                        <li onClick={ ()=> {this.handleScroll('skills')} }>Skills</li>
                        <li onClick={ ()=> {this.handleScroll('about')} }>About</li>
                        <li>Blog</li>
                        <li onClick={ ()=> {this.handleScroll('contact')} }>Contact</li>
                    </ul>
                </div>

                <div id="scroll_top" className="sticky_mobile_header_nav" onClick={ ()=> { this.handleMobileMenu('sticky_drop_menu')} }>
                    <div id="hamburger">
                        <div id="bar"></div>
                        <div id="bar"></div>
                        <div id="bar"></div>
                    </div>
                </div>
                <div id="sticky_drop_menu">
                    <p onClick={ ()=> {this.handleScroll('portfolio')} }>Portfolio</p>
                    <p onClick={ ()=> {this.handleScroll('skills')} }>Skills</p>
                    <p onClick={ ()=> {this.handleScroll('about')} }>About</p>
                    <p>Blog</p>
                    <p onClick={ ()=> {this.handleScroll('contact')} }>Contact</p>
                     {/* <div id="sticky_exit_mobile_menu" onClick={ ()=> { this.handleMobileMenuClose("sticky_drop_menu") }}>X</div>  */}
                </div>
            </section>
        )
    }
}