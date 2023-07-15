import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Hat from '../images/panopli/cap.png';
import Snapback from '../images/panopli/fakesnap.png';
import Pillow from '../images/panopli/pillow.png';
import Shirt from '../images/panopli/t-shirt-white.png';
import Silhouette from '../images/panopli/silhouette.png';

class Panopli extends Component {
    render() {
        return (
            <div className="panopli page">
                <Grid className="side-page-content project-content" style={{
                    width: '90vw'
                }}>
                    <Cell col={10} offset={1} tablet={8} offsetTablet={2} phone={8} offsetPhone={2}>
                        <h1 className="page-title"> Panopli  </h1>
                        <p className="project-role">
                            In Fall 2018, I had the opportunity to study abroad in Paris, France. During this time, I interned at an e-commerce startup, speaking primarly French.
                            I worked alongside clients to develop logos, and product design.
            </p>
                    </Cell>


                    <Cell col={10} offset={1} tablet={8} offsetTablet={2} phone={8} offsetPhone={2}>
                        <img className="project-image" src={Hat} alt="Embroidered Hat Design" />
                    </Cell>

                    <Cell col={10} offset={1} tablet={8} offsetTablet={2} phone={8} offsetPhone={2}>
                        <img className="project-image" src={Snapback} alt="Embroidered Snapback Design" />
                    </Cell>

                    <Cell col={10} offset={1} tablet={8} offsetTablet={2} phone={8} offsetPhone={2}>
                        <img className="project-image" src={Pillow} alt="Pillow" />
                    </Cell>
                    <Cell col={10} offset={1} tablet={8} offsetTablet={2} phone={8} offsetPhone={2}>
                        <img className="project-image" src={Shirt} alt="Embroidered Shirt" />
                    </Cell>
                    <Cell col={10} offset={1} tablet={8} offsetTablet={2} phone={8} offsetPhone={2}>
                        <img className="project-image" src={Silhouette} alt="Silhouette" />
                    </Cell>



                </Grid>
            </div>
        )
    }
}
export default Panopli;