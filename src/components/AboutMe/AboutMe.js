import React from 'react'
import { Component } from 'react'

import './AboutMe.css'

export default class SectionOne extends Component{

    render(){
        return(
            <section id="about" className="main_about_section">
                <div id="about_title">
                    <h1>A Little About Me</h1>
                    <p>Checkout my blog!</p>
                </div>
                <div className="pic_desc_holder">
                    <div id="about_pic"></div>
                    <div id="about_desc">
                        <p>I was born and raised in Cache Valley, Utah. I have a diverse professional background including personal training, genetics, wildlife science, and web development. I graduated with a Bachelor's in December of 2016 and quickly discovered my true interest and passion is web development. Shortly after this realization, I made the choice to attend DevMountain. Since then, my love for web development has only increased and I am excited to have a career in this amazing industry! Please feel free to contact me with any questions, tips, or opportunities!</p>
                    </div>
                </div>
            </section>
        )
    }


}