import React, { Component } from 'react';
import {Grid, Cell, Button } from 'react-mdl'


class Refurbishment extends Component {
    render() {
        return(
            <div>
            <div>
            <Grid  className='grid-sys'>
                <Cell col={12}>
                    <h1>Refurbishment</h1></Cell>
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
                        <p style={{fontWeight: 'bold', fontSize: '20px'}}>Domestic Refurb</p>
                        <p>Solid Wall</p>
                        <p>Non-Traditional</p>
                        <p>High Rise Restrofit</p>
                        <p>Render Only</p>
                        <p style={{fontWeight: 'bold', fontSize: '20px'}}>Render Only</p>
                        <p style={{fontWeight: 'bold', fontSize: '20px'}}>School Refurbishments</p>
                        <p style={{fontWeight: 'bold', fontSize: '20px'}}>Commercial Refurb</p>
                        <p style={{fontWeight: 'bold', fontSize: '20px'}}>Internal Wall Insulation</p>
                        <hr style={{borderTop: '3px solid #38ef7d', width: '100%'}}/>
                    </div>
                </Cell>
                <Cell className="system-right-col" col={10}>
                <div style={{width: '100%', margin: 'auto', paddingLeft: '95px', paddingTop: '4px', paddingBottom: '4px'}}>
                    <Grid className="demo-grid-ruler">
                        <Cell col={2}><p style={{fontWeight: 'bold', fontSize: '20px', textAlign: 'center'}}>Domestic Refurb</p>
                        <hr style={{borderTop: '3px solid #fff', width: '100%'}}/>
                                <img
                            src='https://i.ibb.co/dK4GP6q/wbs-domestic-logo.png'
                            alt="wbs_domestic-logo"
                            style={{height: '200px', paddingLeft: '1.7em'}}
                            />
                            <hr style={{borderTop: '3px solid #fff', width: '100%'}}/>
                            <Button raised style={{center: 'auto', height: '50px', paddingTop: '4px'}}><a href="https://www.stackoverflow.com">More Info</a></Button>
                        </Cell>
                        <Cell col={2}><p style={{fontWeight: 'bold', fontSize: '20px', textAlign: 'center'}}>Render Only</p>
                        <hr style={{borderTop: '3px solid #fff', width: '100%'}}/>
                                <img
                            src='https://i.ibb.co/dK4GP6q/wbs-domestic-logo.png'
                            alt="wbs_domestic-logo"
                            style={{height: '200px', paddingLeft: '1.7em'}}
                            />
                            <hr style={{borderTop: '3px solid #fff', width: '100%'}}/>
                            <Button raised style={{center: 'auto', height: '50px', paddingTop: '4px'}}><a href="https://www.stackoverflow.com">More Info</a></Button>
                        </Cell>
                        <Cell col={2}><p style={{fontWeight: 'bold', fontSize: '20px', textAlign: 'center'}}>School Refurb</p>
                        <hr style={{borderTop: '3px solid #fff', width: '100%'}}/>
                                <img
                            src='https://i.ibb.co/dK4GP6q/wbs-domestic-logo.png'
                            alt="wbs_domestic-logo"
                            style={{height: '200px', paddingLeft: '1.7em'}}
                            />
                            <hr style={{borderTop: '3px solid #fff', width: '100%'}}/>
                            <Button raised style={{center: 'auto', height: '50px', paddingTop: '4px'}}><a href="https://www.stackoverflow.com">More Info</a></Button>
                        </Cell>
                        <Cell col={2}><p style={{fontWeight: 'bold', fontSize: '20px', textAlign: 'center'}}>Commercial</p>
                        <hr style={{borderTop: '3px solid #fff', width: '100%'}}/>
                                <img
                            src='https://i.ibb.co/dK4GP6q/wbs-domestic-logo.png'
                            alt="wbs_domestic-logo"
                            style={{height: '200px', paddingLeft: '1.7em'}}
                            />
                            <hr style={{borderTop: '3px solid #fff', width: '100%'}}/>
                            <Button raised style={{center: 'auto', height: '50px', paddingTop: '4px'}}><a href="https://www.stackoverflow.com">More Info</a></Button>
                        </Cell>
                        <Cell col={2}><p style={{fontWeight: 'bold', fontSize: '20px', textAlign: 'center'}}>Internal</p>
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


export default Refurbishment;