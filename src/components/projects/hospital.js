import React, { Component } from 'react';
import { Grid, Cell, Button } from 'react-mdl';
import Visualization from '../images/hospital-data/ss1.png';
import Closeup from '../images/hospital-data/ss2.png';
import Table from '../images/hospital-data/ss3.png';

class Hospital extends Component {
    render() {
        return (
            <div className="hospital-data page">
                <Grid className="side-page-content project-content" style={{
                    width: '90vw'
                }}>
                    <Cell col={10} offset={1}>
                        <h1 className="page-title"> Hospital Data Visualization </h1>
                        <p className="project-role animated fadeInUp delay-1s">
                            I created this visualization within my Advanced Interactive Multimedia course using D3, React, and Git.
                            The visualization explores the costs of hospital procedures around the North Carolina Triangle area.
                        </p>
                        <a className="project-external" href="https://github.com/ttay921/progressive-project/" target="_blank" rel="noopener noreferrer"><Button raised accent ripple>View Github Repo</Button></a>
                    </Cell>
                    <Cell col={10} offsetDesktop={1} tablet={8} offsetTablet={2} phone={10} offsetPhone={1}>
                        <img className="project-image" src={Visualization} alt="Full Visualization" />
                    </Cell>

                    <Cell col={10} offsetDesktop={1} tablet={8} offsetTablet={2} phone={10} offsetPhone={1}>
                        <img className="project-image" src={Closeup} alt="Per Item Data" />
                    </Cell>
                    <Cell col={10} offsetDesktop={1} tablet={8} offsetTablet={2} phone={10} offsetPhone={1}>
                        <img className="project-image" src={Table} alt="Table" />
                    </Cell>

                </Grid >


            </div >
        )
    }
}
export default Hospital;