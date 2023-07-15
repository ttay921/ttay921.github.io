import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Fun extends Component {
    render() {
        return (
            <div className="fun page">
                <Grid className="side-page-content project-content" style={{
                    width: '90vw'
                }}>
                    <Cell col={10} offset={1} tablet={8} offsetTablet={2} phone={8} offsetPhone={2}>
                        <h1 className="page-title"> Just for Fun </h1>
                        <p className="project-role animated fadeInUp delay-1s">
                            In my free time, I love to do a variety of personal projects, and have dabbled in other modes of storytelling. Initially interested in video, I created a variety of quick videos alongside friends. Here are a few of the more notable things I have worked on!
                </p>
                    </Cell>


                    <Cell className="vimeo" col={10} offset={2} tablet={8} offsetTablet={2} phone={8} offsetPhone={2}>


                        <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
                            <iframe title="moonlight" src="https://player.vimeo.com/video/329260837?byline=0" style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%' }} frameborder="0" allow="autoplay; fullscreen" allowfullscreen>
                            </iframe>
                        </div>
                        <script src="https://player.vimeo.com/api/player.js"></script>
                    </Cell>

                    <Cell className="vimeo" col={10} offset={2} tablet={8} offsetTablet={2} phone={8} offsetPhone={2}>


                        <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
                            <iframe title="toonexplosion" src="https://player.vimeo.com/video/383005294?byline=0" style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%' }} frameborder="0" allow="autoplay; fullscreen" allowfullscreen>
                            </iframe>
                        </div>
                        <script src="https://player.vimeo.com/api/player.js"></script>
                    </Cell>

                    <Cell className="vimeo" col={10} offset={2} tablet={8} offsetTablet={2} phone={8} offsetPhone={2}>
                        <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
                            <iframe title="creativeorange" style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%' }} src="https://www.youtube.com/embed/TPvgcR7IGkM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </Cell>
                    <Cell className="vimeo" col={10} offset={2} tablet={8} offsetTablet={2} phone={8} offsetPhone={2}>


                        <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
                            <iframe title="odetoeggs" src="https://player.vimeo.com/video/272626883?byline=0" style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%' }} frameborder="0" allow="autoplay; fullscreen" allowfullscreen>
                            </iframe>
                        </div>
                        <script src="https://player.vimeo.com/api/player.js"></script>
                    </Cell>



                </Grid>
            </div>
        )
    }
}
export default Fun;