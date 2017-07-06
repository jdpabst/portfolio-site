import React from 'react'
import { Component } from 'react'

import facebook from './../../img/facebook.png'
import linked from './../../img/linked.png'
import './Footer.css'

export default class Footer extends Component{
       

    render(){
        return(
            <section className="main_footer_section">
                <div id="copy_right">
                    &#169; jdhpabst.com 2017
                </div>
                <div id="socials">
                    <a href="https://github.com/jdpabst" target="_blank"><div id="github">
                        <i className="devicon-github-plain"></i>
                    </div></a>
                    <a href="https://www.facebook.com/jessie.hollingshead4" target="_blank"><div id="facebook">
                        <img src={facebook}/>
                    </div></a>
                    <a href="https://www.linkedin.com/in/jessica-pabst/" target="_blank"><div id="linked">
                        <img src={linked}/>
                    </div></a>
                </div>
                <div id="thanks">
                    Thank you for visiting my site!
                </div>
            </section>
        )
    }


}