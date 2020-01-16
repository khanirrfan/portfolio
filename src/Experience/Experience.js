import React, { Component } from 'react';
import logoenquero from '../images/photo/Enquero-Logo-03.png';
import logosqrfactor from '../images/photo/sqrfactor.png';
import './Experience.css'
export default class Experience extends Component {
    render() {
        return (
            <div>
            <div className="headerClass">
            <h1>Experience </h1>
            </div>
            <div className="container">
                <div className = "card">
                    <div className="card-content">
                           <div className="row">
                                <div className="col-sm-12 col-md-4">
                                    <a href="https://www.enquero.com" >
                                        <img className="logostyle1" src={logoenquero} alt="enquero-logo" />
                                    </a>
                                    <span className="companyName">Enquero Global</span>
                                </div>
                                <div className="col-sm-12 col-md-8 ">
                                    <span className="float-right designation">Front-End Developer</span>
                                    </div>
                           </div>
                           <hr className="borderClass"></hr>
                           <div className="">
                                       <p>
                                           <em>SaaS platform that enables enterprise companies to build, run, and measure their positive impact campaigns</em>
                                       </p>
                                       <h6>Product Development</h6>
                                       <ul>
                                           <li>1</li>
                                           <li>2</li>
                                           <li>1</li>
                                           <li>2</li>
                                           <li>1</li>
                                           <li>2</li>
                                       </ul>
                                       <h6>Accomplishment</h6>
                                       <ul>
                                           <li>1</li>
                                           <li>2</li>
                                           <li>1</li>
                                           <li>2</li>
                                           <li>1</li>
                                           <li>2</li>
                                       </ul>
                           </div>
                    </div>
                    <hr></hr>
                    <div className="card-action">
                       <p className="tenure"> May 2017 -Present</p>
                    </div>
                </div>
                <div className = "card">
                    <div className="card-content">
                           <div className="row">
                                <div className="col-sm-12 col-md-4">
                                    <a className = "logo-class" href="https://www.sqrfactor.com" >
                                        <img className="logostyle1" src={logosqrfactor} alt="sqrfactor-logo" />
                                    </a>
                                    <span className="companyName">sqrFactor</span>
                                </div>
                                <div className="col-sm-12 col-md-8 ">
                                    <span className="float-right designationSqr">Front-End Intern</span>
                                    </div>
                           </div>
                           <hr className="borderClass"></hr>
                           <div className="">
                                       <p>
                                           <em>SaaS platform that enables enterprise companies to build, run, and measure their positive impact campaigns</em>
                                       </p>
                                       <h6>Product Development</h6>
                                       <ul>
                                           <li>1</li>
                                           <li>2</li>
                                           <li>1</li>
                                           <li>2</li>
                                           <li>1</li>
                                           <li>2</li>
                                       </ul>
                                       <h6>Accomplishment</h6>
                                       <ul>
                                           <li>1</li>
                                           <li>2</li>
                                           <li>1</li>
                                           <li>2</li>
                                           <li>1</li>
                                           <li>2</li>
                                       </ul>
                           </div>
                    </div>
                    <hr></hr>
                    <div className="card-action">
                       <p className="tenure"> May 2017 -Present</p>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}
