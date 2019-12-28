import React, { Component } from 'react';
import {Grid, Cell, List, ListItem, ListItemContent, Card, CardTitle} from 'react-mdl';


class Contact extends Component {
    render() {
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Lukas Boklaho</h2>
                        <img
                        src="https://i.ibb.co/FgKv0wQ/Eco-Construction-Systems-Ltd-logo.png"
                        alt="avatar"
                        style={{height: '250px'}}
                        />
                        <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>
                        Things we do:
                        </p>
                        <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>
                        Insulation, Plasterer, Dry Lining, Plastering, Rendering, Skimming, Venetian Marble Plastering , 
                        External Wall Insulation, Insulated Rendering, K Rend, Polished Plastering, 
                        Screeding, Solid Wall Insulation, Sound Proofing, Damp Proofing.
                        </p>
                        <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>
                        Works in: North West
                        </p>
                    </Cell>


                    <Cell col={6}><h2>Contact Me</h2>
                    <hr/>
                    <div class="contact-list">
                    <List>
                        <ListItem>
                            <ListItemContent icon="call" style={{ fontSize: '20px', fontWeight: 'bold', fontfamily: 'Open Sans Condensed'}}>7538 636020</ListItemContent>
                        </ListItem>
                        <ListItem>
                            <ListItemContent icon="mail" style={{fontSize: '20px', fontWeight: 'bold', fontfamily: 'Open Sans Condensed'}}>ecoconsys@gmail.com</ListItemContent>
                        </ListItem>
                        <ListItem>
                            <ListItemContent icon="info" style={{fontSize: '20px', fontWeight: 'bold', fontfamily: 'Open Sans Condensed'}}>www.checkatrade.com/EcoConstructionSystems/</ListItemContent>
                        </ListItem>
                    </List>
                    <Card shadow={0} style={{width: '250px', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '250px'}}>
            <img
                        src="https://i.ibb.co/pvSztRM/small-logo.png"
                        alt="logo"
                        style={{height: '250px'}}
                        />
            </CardTitle>
                    </Card>
                    </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
};

export default Contact;