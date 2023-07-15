import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Guide from '../images/uncsom/StyleTile.jpg';
import MainCharacter from '../images/uncsom/mainchar.png';
import ExtraOne from '../images/uncsom/extras-01.png';
import ExtraTwo from '../images/uncsom/extras-02.png';
import ExtraThree from '../images/uncsom/extras-04.png';

class Som extends Component {
    render() {
        return (
            <div className="som page">
                <Grid className="side-page-content project-content" style={{
                    width: '90vw'
                }}>
                    <Cell col={10} offset={1} tablet={8} offsetTablet={2} phone={8} offsetPhone={2}>
                        <h1 className="page-title">UNC School of Medicine  </h1>
                        <p className="project-role animated fadeInUp delay-1s" >
                            I was the lead animator and character design artist on this project. I worked alogiside a team of five designers to create this motion graphic for UNC's Self-Direcred Learning Initiative.
                            This video is used internally at the School of Medicine to inform prospective students and staff of the learning initiative.
        </p>
                    </Cell>
                    <Cell className="vimeo" col={10} offset={2} tablet={8} offsetTablet={2} phone={8} offsetPhone={2}>


                        <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
                            <iframe title="moonlight" src="https://player.vimeo.com/video/336823472?byline=0" style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%' }} frameborder="0" allow="autoplay; fullscreen" allowfullscreen>
                            </iframe>
                        </div>
                        <script src="https://player.vimeo.com/api/player.js"></script>
                    </Cell>

                    <Cell col={10} offset={1} tablet={8} offsetTablet={2} phone={8} offsetPhone={2}>
                        <img className="project-image" src={Guide} alt="Style Guide" />
                    </Cell>

                    <Cell col={5} phone={5} >
                        <img className="project-image" src={MainCharacter} alt="Main Character" />
                    </Cell>

                    <Cell col={5} phone={5} >
                        <img className="project-image" src={ExtraOne} alt="Extra 1" />
                    </Cell>
                    <Cell col={5} phone={5} >
                        <img className="project-image" src={ExtraTwo} alt="Extra 2" />
                    </Cell>
                    <Cell col={5} phone={5} >
                        <img className="project-image" src={ExtraThree} alt="Extra 3" />
                    </Cell>





                </Grid>
            </div>
        )
    }
}
export default Som;