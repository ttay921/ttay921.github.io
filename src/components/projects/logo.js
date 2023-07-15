import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import AM from '../images/logo-animation/am.png';
import Hype from '../images/logo-animation/hypebbg.png'

class LogoAnimation extends Component {
    render() {
        return (
            <div className="som page">
                <Grid className="side-page-content project-content" style={{
                    width: '90vw'
                }}>
                    <Cell col={10} offset={1} tablet={8} offsetTablet={2} phone={8} offsetPhone={2}>
                        <h1 className="page-title"> Logo Animations during Quarantine </h1>
                        <p className="project-role animated fadeInUp delay-1s">
                            During quarantine, I have been designing logos and creating brief animations for friends.
        </p>
                    </Cell>
                    <Cell className="vimeo" col={10} offset={2} tablet={8} offsetTablet={2} phone={8} offsetPhone={2}>


                        <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
                            <iframe title="ampr" src="https://player.vimeo.com/video/420127485?byline=0" style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%' }} frameborder="0" allow="autoplay; fullscreen" allowfullscreen>
                            </iframe>
                        </div>
                        <script src="https://player.vimeo.com/api/player.js"></script>
                    </Cell>
                    <Cell className="vimeo" col={10} offset={2} tablet={8} offsetTablet={2} phone={8} offsetPhone={2}>


                        <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
                            <iframe title="mwm" src="https://player.vimeo.com/video/400115879?byline=0" style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%' }} frameborder="0" allow="autoplay; fullscreen" allowfullscreen>
                            </iframe>
                        </div>
                        <script src="https://player.vimeo.com/api/player.js"></script>
                    </Cell>


                    <Cell ccol={10} offset={1} >
                        <img className="project-image" src={AM} alt="Alex Logor" />
                    </Cell>

                    <Cell col={10} offset={1} >
                        <img className="project-image" src={Hype} alt="Hype Logo" />
                    </Cell>






                </Grid>
            </div>
        )
    }
}
export default LogoAnimation;