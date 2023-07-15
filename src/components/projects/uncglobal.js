import React, { Component } from 'react';
import { Grid, Cell, Button } from 'react-mdl'
import Map from '../images/global/map.png'
import Nation from '../images/global/nations.png'


class UNCGlobal extends Component {
    render() {
        return (
            <div className=" unglobal">
                <Grid className="side-page-content project-content" style={{
                    width: '90vw'
                }}>
                    <Cell col={10} offset={1} tablet={8} offsetTablet={2} phone={8} offsetPhone={2}>
                        <h1 className="page-title">UNC Global Storytelling </h1>
                        <p className="project-role animated fadeInUp delay-1s">
                            This project took place over the course of the semester with preliminary UX research conducted in January. As a team of reporters, photographers, videographers, UX designers, and developers, we then travelled to Placencia, Belize to complete 8 days of extensive research to gather our stories.
                            During this time, I helped build out several prototypes for the home page and photo story pages. Due to COVID-19, the team moved to remote collaboration following our trip.
                    </p>
                        <a className="project-external animated fadeInUp delay-2s" href="https://barriers.unc.edu/" target="_blank" rel="noopener noreferrer"><Button raised accent ripple>View project</Button></a>


                    </Cell>


                  
                    <Cell col={10} offset={1} tablet={8} offsetTablet={2} phone={8} offsetPhone={2}>
                        <p className="project-role animated fadeInUp delay-1s">
                            I worked virtually alongside Meg Mcmahon to build the photo stories framework. Using ScrollMagic, and GSAP, I built out the photo story elements that Meg then incorporated into the Hugo site.
            
                    </p>

                    </Cell>

                    <Cell col={10} offset={1} tablet={8} offsetTablet={2} phone={8} offsetPhone={2}>
                        <img className="project-image" src={Map} alt="Map of Central America" />
                    </Cell>
                    <Cell col={10} offset={1} tablet={8} offsetTablet={2} phone={8} offsetPhone={2}>
                        <img className="project-image" src={Nation} alt="Comparing Size of Belize and Massachussetts" />
                    </Cell>
                    <Cell col={10} offset={1} tablet={8} offsetTablet={2} phone={8} offsetPhone={2}>
                        <p className="project-role animated fadeInUp delay-1s">
                           Shown above are a few of my designs used in the explainer video. I also helped finalize various interactive story pieces built on Florish.
                    </p>


                    </Cell>
                    <Cell className="vimeo" col={10} offset={2} tablet={8} offsetTablet={2} phone={8} offsetPhone={2}>


                        <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
                            <iframe title="Explainer" src="https://player.vimeo.com/video/406998866?byline=0" style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%' }} frameborder="0" allow="autoplay; fullscreen" allowfullscreen>
                            </iframe>
                        </div>
                        <script src="https://player.vimeo.com/api/player.js"></script>
                    </Cell>

                </Grid>
            </div>
        )
    }
}
export default UNCGlobal;