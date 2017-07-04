import React from 'react'
import { Component } from 'react'

import scroll from './../../img/scroll-top.png'
import './ScrollTop.css'

export default class Scroll extends Component{
    constructor(props){
        super(props);

        this.handleScroll = this.handleScroll.bind(this);
        this.handleDisplay = this.handleDisplay.bind(this);
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
    document.getElementById(id).scrollIntoView({block: "start", behavior: "smooth"})
}


    render(){
        return(
            <section id="scroll_top" className="main_scroll_section">
                <div id="scroll_holder" onClick={ ()=> {this.handleScroll('top')} }>
                    <img src={ scroll }/>
                </div>
                
            </section>
        )
    }
}