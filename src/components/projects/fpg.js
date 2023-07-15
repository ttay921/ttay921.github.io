import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import PDFOne from '../images/fpg/pdf-1.jpg';
import PDFTwo from '../images/fpg/pdf-2.jpg';
import PDFThree from '../images/fpg/pdf-3.jpg';
import PDFFour from '../images/fpg/pdf-4.jpg';
import Flyer from '../images/fpg/flyer.jpg';
import Flowchart from '../images/fpg/internal.png';

class FPG extends Component {
    render() {
        return (
            <div className="fpg page">
                <Grid className="side-page-content project-content" style={{
                    width: '90vw'
                }}>
                    <Cell col={10} offset={1}>
                        <h1 className="page-title"> Frank Porter Graham Child Development Institute </h1>
                        <p className="project-role animated fadeInUp delay-1s">
                            Using primarily Indesign and Illustrator, I created internal graphics used for data visualization as well as event flyers. Below, you can see the Year One Initiatives document used to outline internal goals as well as an event flyer formatted for use in our weekly internal newsletters.
                    </p>
                    </Cell>
                    <Cell col={10} offsetDesktop={1} tablet={8} offsetTablet={2} phone={10} offsetPhone={1}>
                        <img className="project-image" src={Flyer} alt="Flyer" />
                    </Cell>

                    <Cell col={10} offsetDesktop={1} tablet={8} offsetTablet={2} phone={10} offsetPhone={1}>
                        <img className="project-image" src={PDFOne} alt="Year One Initiatives Page 1" />
                    </Cell>
                    <Cell col={10} offsetDesktop={1} tablet={8} offsetTablet={2} phone={10} offsetPhone={1}>
                        <img className="project-image" src={PDFTwo} alt="Year One Initiatives Page 2" />
                    </Cell>
                    <Cell col={10} offsetDesktop={1} tablet={8} offsetTablet={2} phone={10} offsetPhone={1}>
                        <img className="project-image" src={PDFThree} alt="Year One Initiatives Page 3" />
                    </Cell>
                    <Cell col={10} offsetDesktop={1} tablet={8} offsetTablet={2} phone={10} offsetPhone={1}>
                        <img className="project-image" src={PDFFour} alt="Year One Initiatives Page 4" />
                    </Cell>
                    <Cell col={10} offsetDesktop={1} tablet={8} offsetTablet={2} phone={10} offsetPhone={1}>
                        <img className="project-image" src={Flowchart} alt="Year One Initiatives Page 4" />
                    </Cell>




                </Grid>


            </div >
        )
    }
}
export default FPG;