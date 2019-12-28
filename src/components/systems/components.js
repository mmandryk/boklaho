import React, { Component } from 'react';
import {Grid, Cell, Button } from 'react-mdl'


class Components extends Component {
    render() {
        return(
            <div>
            <div>
            <Grid  className='grid-sys'>
                <Cell col={12}>
                    <h1>Components</h1></Cell>
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
                        <p style={{fontWeight: 'bold', fontSize: '20px'}}>Thermal Insulation</p>
                        <p>Expanded Polystyryne EPS</p>
                        <p>Stone Wool</p>
                        <p>Phenolic</p>
                        <p style={{fontWeight: 'bold', fontSize: '20px'}}>Ancillary Products</p>
                        <p>Beads, Trims & Fixings</p>
                        <p>Reinforcement</p>
                        <p>Render Protector</p>
                        <p>Biocidial Wash</p>
                        <p style={{fontWeight: 'bold', fontSize: '20px'}}>Internal Finishes</p>
                        <hr style={{borderTop: '3px solid #38ef7d', width: '100%'}}/>
                    </div>
                </Cell>
                <Cell className="system-right-col" col={10}>
                <div style={{width: '100%', margin: 'auto', paddingLeft: '95px', paddingTop: '4px', paddingBottom: '4px'}}>
                    <Grid className="demo-grid-ruler">
                        <Cell col={2}><p style={{fontWeight: 'bold', fontSize: '20px', textAlign: 'center'}}>Thermal Insulation</p>
                        <hr style={{borderTop: '3px solid #fff', width: '100%'}}/>
                                <img
                            src='https://i.ibb.co/dK4GP6q/wbs-domestic-logo.png'
                            alt="wbs_domestic-logo"
                            style={{height: '200px', paddingLeft: '1.7em'}}
                            />
                            <hr style={{borderTop: '3px solid #fff', width: '100%'}}/>
                            <Button raised style={{center: 'auto', height: '50px', paddingTop: '4px'}}><a href="https://www.stackoverflow.com">More Info</a></Button>
                        </Cell>
                        <Cell col={2}><p style={{fontWeight: 'bold', fontSize: '20px', textAlign: 'center'}}>Ancillary Products</p>
                        <hr style={{borderTop: '3px solid #fff', width: '100%'}}/>
                                <img
                            src='https://i.ibb.co/dK4GP6q/wbs-domestic-logo.png'
                            alt="wbs_domestic-logo"
                            style={{height: '200px', paddingLeft: '1.7em'}}
                            />
                            <hr style={{borderTop: '3px solid #fff', width: '100%'}}/>
                            <Button raised style={{center: 'auto', height: '50px', paddingTop: '4px'}}><a href="https://www.stackoverflow.com">More Info</a></Button>
                        </Cell>
                        <Cell col={2}><p style={{fontWeight: 'bold', fontSize: '20px', textAlign: 'center'}}>Internal Finishes</p>
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


export default Components;