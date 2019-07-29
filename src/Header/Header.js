import React, { Component } from 'react'
import './Header.css';
export default class componentName extends Component {
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
                                <a href="#">About</a>
                            </li>
                            <li>
                                <i className="fa fa-battery-3"></i>
                                <a href="#">Experience</a>
                            </li>
                            <li>
                                <i className="fa fa-bell"></i>
                                <a href="#skills">Skills</a>
                            </li>
                            <li>
                                <i className="fa fa-university"></i>
                                <a href="#">Education</a>
                            </li>
                            <li>
                                <i className="fa fa-address-book"></i>
                                <a href="#">Contact</a>
                            </li>
                            <li>
                                <i className="fa fa-file"></i>
                                <a href="#">Resume</a>
                            </li>
                           </ul>
                    </section>
            
          
        )
    }
}
