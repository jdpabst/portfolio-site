import React from 'react'
import { Component } from 'react'

import './Contact.css'

export default class SectionOne extends Component{
    constructor(props){
        super(props);
        this.state = {
            subject:'',
            body:''
        }
        this.handleEmail = this.handleEmail.bind(this);
        this.handleSubject = this.handleSubject.bind(this);
    }

    handleEmail(){
        window.open(`mailto:jdhpabst@gmail.com?subject=${ this.state.subject }&body=${ this.state.body }`);
        document.getElementById("input_box1").value = "";
        document.getElementById("input_box2").value = "";
        document.getElementById("input_box3").value = "";
        document.getElementById("input_box4").value = "";     
    }
    handleSubject(e){
        this.setState({
            subject: e.target.value
        })
    }

    handleBody(e){
        this.setState({
            body: e
        })
    }

    render(){
        return(
            <section className="main_contact_section">
                <div id="contact_title">
                    <h1>Say Hello</h1>
                    <p>Feel free to reach out with any questions or opportunities!</p>
                </div>
                <div id="contact_info">
                    <input id="input_box1" placeholder="Name"/>
                    <input id="input_box2" placeholder="E-mail"/>
                    <input id="input_box3" placeholder="Subject" onChange={ this.handleSubject }/>
                    <textarea id="input_box4" placeholder="Your Message" onChange={ (e)=> {
                        this.handleBody(e.target.value)
                        } }/>
                </div>
                <div id="contact_bttn" onClick={ this.handleEmail }>
                    Send
                </div>
            </section>
        )
    }


}