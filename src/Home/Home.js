import React, { Component } from 'react'
import './Home.css';
export default class Home extends Component {
    render() {
        return (
            <div>
                  <div className="imageSection">
                <section id="intro" className="section " >
                  <div className="overlay"></div>
                 
                <h2 className="imageOverlay">I want to &nbsp;
                  <span className="teal">make things</span>
                  <br></br>that &nbsp;
                  <span className="underline">
                  make a difference
                  </span>
                </h2>
                </section>
              </div>
            </div>
        )
    }
}
