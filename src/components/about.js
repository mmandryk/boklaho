import React, { Component } from 'react';

import {Grid, Cell, List, ListItem, ListItemContent, Card, CardTitle} from 'react-mdl';


class About extends Component {
    render() {
        return(
            <div className="about-body">
                <Grid className="about-grid">
                    <Cell col={12}>
                        <img
                src="https://i.ibb.co/FgKv0wQ/Eco-Construction-Systems-Ltd-logo.png"
                                            alt="Logo"
                                            className="logo-img-about"
                                            style={{height: '200px'}}
                                            />
                        <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>
                        We are certified experts in rendering
                        </p>
                        <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>
                        Insulation, Plasterer, Dry Lining, Plastering, Rendering, Skimming, Venetian Marble Plastering , 
                        External Wall Insulation, Insulated Rendering, K Rend, Polished Plastering, 
                        Screeding, Solid Wall Insulation, Sound Proofing, Damp Proofing.
                        </p>
                        <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>
                        We have 8 years experience in house rendering and 
                        </p>
                    </Cell>
                </Grid>
                </div>
        )
    }
};

export default About;

