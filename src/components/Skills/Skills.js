import React from 'react'
import { Component } from 'react'
import devicon from 'devicon'

import './Skills.css'

export default class SectionOne extends Component{

    render(){
        return(
            <section id="skills" className="main_skills_section">
                <div id="skills_title">
                    <h1>Skills</h1>
                    <p>My current skill set</p>
                </div>
                <div id="skills_holder">
                    <div id="html">
                        <i className="devicon-html5-plain"></i>
                        <p>HTML5</p>
                    </div>
                    <div id="css">
                        <i className="devicon-css3-plain"></i>
                        <p>CSS3</p>
                    </div>
                    <div id="javascript">
                        <i className="devicon-javascript-plain"></i>
                        <p>JavaScript</p>
                    </div>
                    <div id="angular">
                        <i className="devicon-angularjs-plain"></i>
                        <p>Angular</p>
                    </div>
                    <div id="react">
                        <i className="devicon-react-original"></i>
                        <p>React</p>
                    </div>
                    <div id="node">
                        <i className="devicon-nodejs-plain"></i>
                        <p>NodeJS</p>
                    </div>
                    <div id="express">
                        <i className="devicon-express-original"></i>
                        <p>Express</p>
                    </div>
                    <div id="sql">
                        <i className="devicon-postgresql-plain"></i>
                        <p>PostgreSQL</p>
                    </div>
                    <div id="jquery">
                        <i className="devicon-jquery-plain"></i>
                        <p>JQuery</p>
                    </div>
                    <div id="git">
                        <i className="devicon-git-plain"></i>
                        <p>Git</p>
                    </div>
                    <div id="git_hub">
                        <i className="devicon-github-plain"></i>
                        <p>GitHub</p>
                    </div>
                    <div id="sass">
                        <i className="devicon-sass-original"></i>
                        <p>CSS Pre-Processors</p>
                    </div>
                    {/*<div id="trello">
                        <i className="devicon-trello-plain"></i>
                        <p>Trello</p>
                    </div>*/}
                    {/*<div id="responsive">
                    </div>

                    <div id="always_adding">
                    </div>*/}
                </div>
                
            </section>
        )
    }


}