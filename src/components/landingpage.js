import React, { Component } from 'react';
import {Grid, Cell } from 'react-mdl'


class LandingPage extends Component {
    render() {
        return(
            <div style={{width: '250%', margin: 'auto'}}>
                <Grid className='landing-grid'>
                    <Cell col={12}>
                        <img src="https://i.ibb.co/FgKv0wQ/Eco-Construction-Systems-Ltd-logo.png"
                        alt="Logo"
                        className="logo-img"
                        />


                    </Cell>
                </Grid>
            </div>
        )
    }
};

export default LandingPage;