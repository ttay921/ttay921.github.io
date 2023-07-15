import React, { Component } from "react"
import ScrollCarousel from "./project-scroll";
import CardOne from "./cards/card-one";
import CardTwo from "./cards/card-two";
import CardThree from "./cards/card-three";
import CardFour from "./cards/card-four";
import CardFive from "./cards/card-five";
import CardSix from "./cards/card-six";
import CardSeven from "./cards/card-seven";
import CardEight from "./cards/card-eight";
import CardNine from "./cards/card-nine";
import CardTen from "./cards/card-ten";
import { Link } from 'react-router-dom';
import { Tooltip, Icon } from 'react-mdl'


class Landing extends Component {
    render() {

        return (

            <div className="container" id="home">
                <div
                    className="padding-block"
                    style={{ height: '90%' }}>

                    <h1 className="landing-title animated fadeInUp delay-.5s ">
                        taylor tyson
                    </h1>
                    <p style={{ padding: '-50%' }}> Motion designer and Front End Developer</p>
                    <p className="intro-text">
                        Hi, I'm Taylor Tyson and I am a multidisciplinary designer.
                        Most of the time, you can find me in your local coffee shop working on anything ranging from a new JS framework to graphic design to animation.
                        Thus, today, I am more than excited to share with you my largest project yet--this portfolio. Feel free to take a look around!
                    </p>
                    <div className=" scroll-suggestion" style={{ paddingBottom: '5%' }}>
                        <Tooltip label="Scoll" position="bottom">
                            <Icon name="arrow_downward" className="animated infinite bounce delay-2s" />
                        </Tooltip>
                    </div>


                </div>

                <ScrollCarousel>
                    <div className="box" id="projects">
                        <Link to="/uncglobal" >
                            <CardOne />
                            <h2 className="project-title"> UNC Global Storytelling </h2>
                        </Link>
                    </div>
                    <div className="box">
                        <Link to="/wxyc" >
                            <CardTwo />
                            <h2 className="project-title"> WXYC Student Radio</h2>
                        </Link>
                    </div>
                    <div className="box">
                        <Link to="/uncsom">
                            <CardThree />
                            <h2 className="project-title"> UNC School of Medicine</h2>
                        </Link>
                    </div>
                    <div className="box">
                        <Link to="/panopli">
                            <CardFour />
                            <h2 className="project-title"> Panopli</h2>
                        </Link>
                    </div>
                    <div className="box">
                        <Link to="/hospitaldata">
                            <CardFive />
                            <h2 className="project-title"> Hospital Data</h2>
                        </Link>
                    </div>
                    <div className="box">
                        <Link to="/deltapsi">
                            <CardSix />
                            <h2 className="project-title"> Delta Psi Fraternity</h2>
                        </Link>
                    </div>
                    <div className="box">
                        <Link to="/fpg">
                            <CardSeven />
                            <h2 className="project-title">Frank Porter Graham Child Development Institute </h2>
                        </Link>
                    </div>
                    <div className="box">
                        <Link to="/wildfire">
                            <CardEight />
                            <h2 className="project-title">Natural Phenomena </h2>
                        </Link>
                    </div>
                    <div className="box">
                        <Link to="logoanimation">
                            <CardNine />
                            <h2 className="project-title"> Logo Animation</h2>
                        </Link>
                    </div>
                    <div className="box">
                        <Link to="fun">
                            <CardTen />
                            <h2 className="project-title"> Just for Fun</h2>
                        </Link>
                    </div>

                </ScrollCarousel>

                <div className="padding-block-bottom" style={{ height: '103vh' }}>
                    <h2 className="resources">Resources</h2>
                    <p className="intro-text" style={{ marginTop: '5%', marginBottom: '5%' }}>
                        This page wouldn't have been possible without the amazing resources I have been able to find online. I have listed where I found the majority of the framework for this page below.
                    </p>
                    <ul className="refLinks" style={{ textAlign: 'left', margin: '0' }}>
                        <li><a style={{ color: '#333', fontFamily: 'Roboto', textDecoration: 'underline' }} href="https://codesandbox.io/embed/rj998k4vmm" target="_blank" rel="noopener noreferrer">ReactSpring JS Cards Example</a></li>
                        <li><a style={{ color: '#333', fontFamily: 'Roboto', textDecoration: 'underline' }} href="https://codesandbox.io/s/pndnu?file=/package.json:170-195" target="_blank" rel="noopener noreferrer">Horizontal Scroll Div</a></li>
                        <li><a style={{ color: '#333', fontFamily: 'Roboto', textDecoration: 'underline' }} href="https://codesandbox.io/s/github/yjose/reactjs-popup-burger-menu?file=/src/index.js:396-688" target="_blank" rel="noopener noreferrer">Hamburger Popup Menu</a></li>
                        <li><a style={{ color: '#333', fontFamily: 'Roboto', textDecoration: 'underline' }} href="https://unsplash.com/photos/qVNSANBjYdI" target="_blank" rel="noopener noreferrer">Unsplash Elements</a></li>
                    </ul>
                </div>
            </div>


        )
    }
}
export default Landing;
