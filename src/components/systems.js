import React, { Component } from 'react';
import {Grid, Cell, IconButton, Menu, MenuItem } from 'react-mdl'
import Refurbishment from './systems/refurbishment';
import NewBuild from './systems/new_build';
import SystemFinishes from './systems/system_finishes';
import Components from './systems/components'


class Systems extends Component {
    render() {
        return(
            <div>
                <Grid>
                <Cell col={12}>
                <img
                src="https://i.ibb.co/LrRNXq3/refubrishment-sys.png"
                alt="Logo"
                className="logo-img-about"
                style={{height: '290px'}}
                />
                <h1 style={{textAlign: 'center', fontFamily: 'Open Sans Condensed', fontSize: 'bold'}}>                    
                    <img
                    src="https://i.ibb.co/pvSztRM/small-logo.png"
                    alt="logo"
                    style={{height: '100px'}}
                    />
                    Systems & Solutions                    
                    <img
                        src="https://i.ibb.co/pvSztRM/small-logo.png"
                        alt="logo"
                        style={{height: '100px'}}
                        />
                    </h1>
                </Cell>
                <Cell col={3}>
                    <div style={{textAlign: 'center'}}>
                        <div style={{position: 'relative',fontWeight: 'bold', fontSize: '20px'}}>
                            <IconButton name="more_vert" id="demo-menu-lower-left" />Refubrishment
                            <hr style={{borderTop: '3px solid #38ef7d', width: '100%'}}/>
                            <Menu target="demo-menu-lower-left">
                                <MenuItem><p style={{fontWeight: 'bold', fontSize: '20px'}}>Domestic Refurb</p></MenuItem>
                                <MenuItem><p>Solid Wall</p></MenuItem>
                                <MenuItem><p>Non-Traditional</p></MenuItem>
                                <MenuItem><p>High Rise Restrofit</p></MenuItem>
                                <MenuItem><p>Render Only</p></MenuItem>
                                <MenuItem><p style={{fontWeight: 'bold', fontSize: '20px'}}>Render Only</p></MenuItem>
                                <MenuItem><p style={{fontWeight: 'bold', fontSize: '20px'}}>School Refurbishments</p></MenuItem>
                                <MenuItem><p style={{fontWeight: 'bold', fontSize: '20px'}}>Commercial Refurb</p></MenuItem>
                                <MenuItem><p style={{fontWeight: 'bold', fontSize: '20px'}}>Internal Wall Insulation</p></MenuItem>
                            </Menu>
                        </div>
                    </div>
                </Cell>
                <Cell col={3}>
                    <div style={{textAlign: 'center'}}>
                        <div style={{position: 'relative',fontWeight: 'bold', fontSize: '20px'}}>
                            <IconButton name="more_vert" id="demo-menu-lower-left" />New Build
                            <hr style={{borderTop: '3px solid #38ef7d', width: '100%'}}/>
                            <Menu target="demo-menu-lower-left">
                                <MenuItem><p style={{fontWeight: 'bold', fontSize: '20px'}}>Domestic New</p></MenuItem>
                                <MenuItem><p style={{fontWeight: 'bold', fontSize: '20px'}}>Modular</p></MenuItem>
                                <MenuItem><p style={{fontWeight: 'bold', fontSize: '20px'}}>Steel Frame</p></MenuItem>
                                <MenuItem><p style={{fontWeight: 'bold', fontSize: '20px'}}>Timber Frame</p></MenuItem>
                                <MenuItem><p style={{fontWeight: 'bold', fontSize: '20px'}}>SIPS</p></MenuItem>
                                <MenuItem><p style={{fontWeight: 'bold', fontSize: '20px'}}>ICF</p></MenuItem>
                                <MenuItem><p style={{fontWeight: 'bold', fontSize: '20px'}}>Render Only</p></MenuItem>
                                <MenuItem><p style={{fontWeight: 'bold', fontSize: '20px'}}>Educational</p></MenuItem>
                                <MenuItem><p style={{fontWeight: 'bold', fontSize: '20px'}}>Commercial</p></MenuItem>
                            </Menu>
                        </div>
                    </div>
                </Cell>
                <Cell col={3}>
                    <div style={{textAlign: 'center'}}>
                        <div style={{position: 'relative',fontWeight: 'bold', fontSize: '20px'}}>
                            <IconButton name="more_vert" id="demo-menu-lower-left" />System Finishes
                            <hr style={{borderTop: '3px solid #38ef7d', width: '100%'}}/>
                            <Menu target="demo-menu-lower-left">
                                <MenuItem><p style={{fontWeight: 'bold', fontSize: '20px'}}>Thin Coat Render</p></MenuItem>
                                <MenuItem><p>Silicone and Acrylic Renders</p></MenuItem>
                                <MenuItem><p>Mineral Render</p></MenuItem>
                                <MenuItem><p>Stone Render</p></MenuItem>
                                <MenuItem><p>Paint and Stain</p></MenuItem>
                                <MenuItem><p style={{fontWeight: 'bold', fontSize: '20px'}}>Brick Slip Claddding</p></MenuItem>
                                <MenuItem><p>7mm & 9mm Brick Slips</p></MenuItem>
                                <MenuItem><p>15mm Brick Slips</p></MenuItem>
                                <MenuItem><p>Internal Brick Slipis</p></MenuItem>
                                <MenuItem><p style={{fontWeight: 'bold', fontSize: '20px'}}>Through Coloured Renders</p></MenuItem>
                                <MenuItem><p>Spar Dash & Receiver</p></MenuItem>
                                <MenuItem><p>Scratch Render</p></MenuItem>
                                <MenuItem><p>Tyrolean Render</p></MenuItem>
                                <MenuItem><p>Brick Effect Render</p></MenuItem>
                            </Menu>
                        </div>
                    </div>
                </Cell>
                <Cell col={3}>
                    <div style={{textAlign: 'center'}}>
                        <div style={{position: 'relative',fontWeight: 'bold', fontSize: '20px'}}>
                            <IconButton name="more_vert" id="demo-menu-lower-left" />Components
                            <hr style={{borderTop: '3px solid #38ef7d', width: '100%'}}/>
                            <Menu target="demo-menu-lower-left">
                                <MenuItem><p style={{fontWeight: 'bold', fontSize: '20px'}}>Thermal Insulations</p></MenuItem>
                                <MenuItem><p>Expanded Polystyryne EPS</p></MenuItem>
                                <MenuItem><p>Stone Wool</p></MenuItem>
                                <MenuItem><p>Phenolic</p></MenuItem>
                                <MenuItem><p style={{fontWeight: 'bold', fontSize: '20px'}}>Ancillary Products</p></MenuItem>
                                <MenuItem><p>Beads, Trims & Fixings</p></MenuItem>
                                <MenuItem><p>Reinforcement</p></MenuItem>
                                <MenuItem><p>Biocidial Wash</p></MenuItem>
                                <MenuItem><p style={{fontWeight: 'bold', fontSize: '20px'}}>Through Coloured Renders</p></MenuItem>
                            </Menu>
                        </div>
                    </div>
                </Cell>
                <Cell col={2}>
                <img src="https://i.ibb.co/X39RV94/enhanced-EPS1.jpg" alt="enhanced-EPS1" style={{}}></img>
                </Cell>
                <Cell col={2}>
                <img src="https://i.ibb.co/v4jTDxS/enhanced-EPS2.jpg" alt="enhanced-EPS2" border="0"></img>
                </Cell>
                <Cell col={2}>
                <img src="https://i.ibb.co/mrKVYfp/enhanced-EPS3.jpg" alt="enhanced-EPS3" border="0"></img>
                </Cell>
                <Cell col={2}>
                <img src="https://i.ibb.co/7vcGddq/eps1.jpg" alt="eps1" border="0"></img>
                </Cell>
                <Cell col={2}>
                <img src="https://i.ibb.co/nkZ0Mc1/eps2.jpg" alt="eps2" border="0"></img>
                </Cell>
                <Cell col={2}>
                <img src="https://i.ibb.co/j4mr7Fy/eps3.jpg" alt="eps3" border="0"></img>
                </Cell>
                <Cell col={2}>
                <img src="https://i.ibb.co/R4RQ29S/hd-Ribbed-EPS2.jpg" alt="hd-Ribbed-EPS2" border="0"></img>
                </Cell>
                <Cell col={2}>
                <img src="https://i.ibb.co/Wy36Lyh/phenolic1.jpg" alt="phenolic1" border="0"></img>
                </Cell>
                <Cell col={2}>
                <img src="https://i.ibb.co/2yfxwts/phenolic2.jpg" alt="phenolic2" border="0"></img>
                </Cell>
                <Cell col={2}>
                <img src="https://i.ibb.co/HYgbW3v/stone-Wool1.jpg" alt="stone-Wool1" border="0"></img>
                </Cell>
                <Cell col={2}>
                <img src="https://i.ibb.co/mRB5Jzs/stone-Wool2.jpg" alt="stone-Wool2" border="0"></img>
                </Cell>
                <Cell col={2}>
                <img src="https://i.ibb.co/HYRYhxv/stone-Wool3.jpg" alt="stone-Wool3" border="0"></img>
                </Cell>
                <Cell col={12}>
                <h1 style={{textAlign: 'center', fontFamily: 'Open Sans Condensed', fontSize: 'bold'}}>                    
                    <img
                    src="https://i.ibb.co/pvSztRM/small-logo.png"
                    alt="logo"
                    style={{height: '100px'}}
                    />
                    PDF's from Wetherby Building Systems Ltd          
                    <img
                        src="https://i.ibb.co/pvSztRM/small-logo.png"
                        alt="logo"
                        style={{height: '100px'}}
                        />
                    </h1>
                    <hr style={{borderTop: '3px solid #38ef7d', width: '100%'}}/>
                    <p style={{fontWeight: 'bold', fontSize: '20px'}}>
                    Wetherby Building Systems Limited are UK market leaders in the manufacture and distribution of a wide range of insulated render systems, brick slips, brick effect renders, 
                    polymer cement renders, silicone & mineral renders. As a company we have been in the Render Industry for many years, our product range consists of fully BBA & DIBT certified 
                    systems that includes a range of render and brick slip systems alongside various insulation types.We also hold KIWA/ BDA accreditation for our Modular Facade Systems.
                    </p>
                    <hr style={{borderTop: '3px solid #38ef7d', width: '100%'}}/>
                </Cell>
                                <Cell col={2}>
                <img src="https://www.wbs-ltd.co.uk/wp-content/uploads/2019/12/WBS-Domestic.pdf" alt="pdf" border="0"></img>
                </Cell>
                </Grid>
                <Refurbishment/>
                <NewBuild/>
                <SystemFinishes/>
                <Components/>
        </div>
        )
    }
};

export default Systems;