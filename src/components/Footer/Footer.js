import React from 'react'
import { Component } from 'react'

import './Footer.css'

export default class Footer extends Component{
       

    render(){
        return(
            <section className="main_footer_section">
                <div id="copy_right">
                </div>
                <div id="socials">
                    <div id="github">
                        {/*<i className="devicon-github-plain"></i>*/}
                    </div>
                    <div id="facebook">
                        {/*<i className="devicon-facebook-plain"></i>*/}
                    </div>
                    <div id="linked">
                    </div>
                </div>
                <div id="thanks">
                    Thank you for visiting my site!
                </div>
            </section>
        )
    }


}