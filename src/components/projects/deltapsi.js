import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Pamphlet from '../images/dp/pamphlet.png';
import Supreme from '../images/dp/supreme.png';

class Delta extends Component {
    render() {
        return (
            <div className="deltapsi page">
                <Grid className="side-page-content project-content" style={{
                    width: '90vw'
                }}>
                    <Cell col={10} offset={1} tablet={8} offsetTablet={2} phone={8} offsetPhone={2}>
                        <h1 className="page-title"> Delta Psi </h1>
                        <p className="project-role animated fadeInUp delay-1s">
                            As the previous art director and social chair of Delta Psi Xi, I wanted to show the eclectic and creative spirit of the fraternity.
                            Delta Psi Xi is a co-ed literary arts fraternity, thus I played on a design that tied in the rich history of the fraternity with the varied interests of the artists involved. I created pamphlets for rush events, handled all social media, and created brand recognition on campus via the Rush St.A's stickers.
                        </p>
                    </Cell>

                    <Cell col={10} offset={1} tablet={8} offsetTablet={2} phone={8} offsetPhone={2}>
                        <img className="project-image" src={Pamphlet} alt="Rush Pamphlet" />
                    </Cell>
                    <Cell col={10} offset={1} tablet={8} offsetTablet={2} phone={8} offsetPhone={2}>
                        <img className="project-image" src={Supreme} alt="Rush Logo" />
                    </Cell>
                    <Cell className="vimeo" col={10} offset={2} tablet={8} offsetTablet={2} phone={8} offsetPhone={2}>


                        <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
                            <iframe title="deltapsivideo" src="https://player.vimeo.com/video/242601914?byline=0" style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%' }} frameborder="0" allow="autoplay; fullscreen" allowfullscreen>
                            </iframe>
                        </div>
                        <script src="https://player.vimeo.com/api/player.js"></script>
                    </Cell>




                </Grid>


            </div >
        )
    }
}
export default Delta;