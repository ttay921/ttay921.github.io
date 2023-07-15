import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Natural extends Component {
    render() {
        return (
            <div className="natural page">
                <Grid className="side-page-content project-content" style={{
                    width: '90vw'
                }}>
                    <Cell col={10} offset={1} tablet={8} offsetTablet={2} phone={8} offsetPhone={2}>
                        <h1 className="page-title"> Natural Phenomena </h1>
                        <p className="project-role animated fadeInUp delay-1s">
                            For my 3D design course, I worked to create a quick animation on how wildfires start. I used Autodesk Maya Liquid Rendering, Adobe Photoshop and After Effects.
                    </p>
                    </Cell>

                    <Cell className="vimeo" col={10} offset={2} tablet={8} offsetTablet={2} phone={8} offsetPhone={2}>


                        <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
                            <iframe title="wildfirevideo" src="https://player.vimeo.com/video/383004612?byline=0" style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%' }} frameborder="0" allow="autoplay; fullscreen" allowfullscreen>
                            </iframe>
                        </div>
                        <script src="https://player.vimeo.com/api/player.js"></script>
                    </Cell>




                </Grid>


            </div >
        )
    }
}
export default Natural;