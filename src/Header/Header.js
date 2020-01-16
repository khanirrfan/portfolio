import React, { Component } from 'react'
import './Header.css';
export default class Header extends Component {
    render() {
       
        return (
            <section className="main_sidebar">
               < div className="logo">
                       <h1>
                           Irfan khan
                       </h1>
                   <span className="spanStyle">Front-End-Developer</span>
                   </div>
                   <hr></hr>
                        <ul>
                            <li>
                            <i className="fa fa-user"></i>
                                <a href="#about">About</a>
                            </li>
                            <li>
                                <i className="fa fa-battery-3"></i>
                                <a href="#experience">Experience</a>
                            </li>
                            <li>
                                <i className="fa fa-bell"></i>
                                <a href="#skills">Skills</a>
                            </li>
                            <li>
                                <i className="fa fa-university"></i>
                                <a href="#education">Education</a>
                            </li>
                            <li>
                                <i className="fa fa-address-book"></i>
                                <a href="#contact">Contact</a>
                            </li>
                            <li>
                                <i className="fa fa-file"></i>
                                <a href="#resume">Resume</a>
                            </li>
                           </ul>
                    </section>
        )
    }
}
