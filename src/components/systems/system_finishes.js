import React, { Component } from 'react';
import {Grid, Cell, Button } from 'react-mdl'


class SystemFinishes extends Component {
    render() {
        return(
            <div>
            <div>
            <Grid  className='grid-sys'>
                <Cell col={12}>
                    <h1>System Finishes</h1></Cell>
            </Grid>
            </div>
            <Grid>
                <Cell col={2}>
                    <div style={{textAlign: 'center'}}>
                    <img
                        src="https://i.ibb.co/pvSztRM/small-logo.png"
                        alt="logo"
                        style={{height: '100px'}}
                        />
                        <hr style={{borderTop: '3px solid #38ef7d', width: '100%'}}/>
                        <p style={{fontWeight: 'bold', fontSize: '20px'}}>Thin Coat Renders</p>
                        <p>Silicone and Acrylic Renders</p>
                        <p>Mineral Render</p>
                        <p>Stone Render</p>
                        <p>Paint and Stain</p>
                        <p style={{fontWeight: 'bold', fontSize: '20px'}}>Brick Slip Cladding</p>
                        <p>7mm & 9mm Brick Slips </p>
                        <p>15mm Brick Slips</p>
                        <p>Internal Brick Slipis</p>
                        <p style={{fontWeight: 'bold', fontSize: '20px'}}>Through Coloured Renders</p>
                        <p>Spar Dash % Receiver</p>
                        <p>Scratch Render</p>
                        <p>Tyrolean Render</p>
                        <p>Brick Effect Render</p>
                        <hr style={{borderTop: '3px solid #38ef7d', width: '100%'}}/>
                    </div>
                </Cell>
                <Cell className="system-right-col" col={10}>
                <div style={{width: '100%', margin: 'auto', paddingLeft: '95px', paddingTop: '4px', paddingBottom: '4px'}}>
                    <Grid className="demo-grid-ruler">
                        <Cell col={2}><p style={{fontWeight: 'bold', fontSize: '20px', textAlign: 'center'}}>Thin Coat Renders</p>
                        <hr style={{borderTop: '3px solid #fff', width: '100%'}}/>
                                <img
                            src='https://i.ibb.co/dK4GP6q/wbs-domestic-logo.png'
                            alt="wbs_domestic-logo"
                            style={{height: '200px', paddingLeft: '1.7em'}}
                            />
                            <hr style={{borderTop: '3px solid #fff', width: '100%'}}/>
                            <Button raised style={{center: 'auto', height: '50px', paddingTop: '4px'}}><a href="https://www.stackoverflow.com">More Info</a></Button>
                        </Cell>
                        <Cell col={2}><p style={{fontWeight: 'bold', fontSize: '20px', textAlign: 'center'}}>Brick Slip Cladding</p>
                        <hr style={{borderTop: '3px solid #fff', width: '100%'}}/>
                                <img
                            src='https://i.ibb.co/dK4GP6q/wbs-domestic-logo.png'
                            alt="wbs_domestic-logo"
                            style={{height: '200px', paddingLeft: '1.7em'}}
                            />
                            <hr style={{borderTop: '3px solid #fff', width: '100%'}}/>
                            <Button raised style={{center: 'auto', height: '50px', paddingTop: '4px'}}><a href="https://www.stackoverflow.com">More Info</a></Button>
                        </Cell>
                        <Cell col={2}><p style={{fontWeight: 'bold', fontSize: '20px', textAlign: 'center'}}>Through Coloured Renders</p>
                        <hr style={{borderTop: '3px solid #fff', width: '100%'}}/>
                                <img
                            src='https://i.ibb.co/dK4GP6q/wbs-domestic-logo.png'
                            alt="wbs_domestic-logo"
                            style={{height: '200px', paddingLeft: '1.7em'}}
                            />
                            <hr style={{borderTop: '3px solid #fff', width: '100%'}}/>
                            <Button raised style={{center: 'auto', height: '50px', paddingTop: '4px'}}><a href="https://www.stackoverflow.com">More Info</a></Button>
                        </Cell>
                    </Grid>
                </div>
                </Cell>
            </Grid>
        </div>
        )
    }
};


export default SystemFinishes;