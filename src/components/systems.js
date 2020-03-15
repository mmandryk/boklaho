import React, { Component } from 'react';
import {Grid, Cell, Card, CardTitle, CardText, CardActions, Button } from 'react-mdl';
import {DropdownButton, Dropdown} from 'react-bootstrap';
import '../components/css/systems.css';



class Systems extends Component {
    render() {
        return(
            <div>
                <Grid style={{background:'white', display: "flex", backgroundRepeat: "no-repeat", backgroundSize: "contain", width:"auto"}}>
                <Cell col={12} class="lista">
                <img
                src="https://i.ibb.co/LrRNXq3/refubrishment-sys.png"
                alt="Logo"
                className="logo-img-about"
                style={{height: '100%', width: '100%'}} 
                />
                </Cell>
                <Cell col={12}>
                <h1 style={{textAlign: 'center', fontFamily: 'Open Sans Condensed', fontSize: 'bold'}}>                    
                    <img
                    src="https://i.ibb.co/pvSztRM/small-logo.png"
                    alt="logo"
                    style={{height: '5%', width: '5%'}}
                    />
                    Systems & Solutions                    
                    <img
                        src="https://i.ibb.co/pvSztRM/small-logo.png"
                        alt="logo"
                        style={{height: '5%', width: '5%'}}
                        />
                    </h1>
                </Cell>
                <Cell col={2} style={{marginLeft: '100px'}}>
                    <div style={{textAlign: 'center',margin: "0px"}}>
                    <DropdownButton variant="success" id="dropdown-basic-button1" title="Refubrishment">
                    <Dropdown.Item>Domestic Refurb</Dropdown.Item>
                    <Dropdown.Item>-Solid Wall</Dropdown.Item>
                    <Dropdown.Item>-Non-Traditional</Dropdown.Item>
                    <Dropdown.Item>-High Rise Restrofit</Dropdown.Item>
                    <Dropdown.Item>-Render Only</Dropdown.Item>
                    <Dropdown.Item>Render Only</Dropdown.Item>
                    <Dropdown.Item>Scholl Refubrishments</Dropdown.Item>
                    <Dropdown.Item>Commercial Refurb</Dropdown.Item>
                    <Dropdown.Item>International Wall Insulation</Dropdown.Item>
                    </DropdownButton>
                    <hr style={{borderTop: '3px solid #38ef7d', width: '100%'}}/>
                    </div>
                </Cell>
                <Cell col={2} style={{marginLeft: '100px'}}>
                    <div style={{textAlign: 'center',margin: "0px"}}>
                    <DropdownButton variant="success" id="dropdown-basic-button2" title="New Build">
                    <Dropdown.Item>Domestic Refurb</Dropdown.Item>
                    <Dropdown.Item>Modular</Dropdown.Item>
                    <Dropdown.Item>Steel Frame</Dropdown.Item>
                    <Dropdown.Item>Timber Frame</Dropdown.Item>
                    <Dropdown.Item>SIPS</Dropdown.Item>
                    <Dropdown.Item>ICF</Dropdown.Item>
                    <Dropdown.Item>Render Only</Dropdown.Item>
                    <Dropdown.Item>Educational</Dropdown.Item>
                    <Dropdown.Item>Comercial</Dropdown.Item>
                    </DropdownButton>
                    <hr style={{borderTop: '3px solid #38ef7d', width: '100%'}}/>
                    </div>
                </Cell>
                <Cell col={2} style={{marginLeft: '100px'}}>
                    <div style={{textAlign: 'center',margin: "0px"}}>
                    <DropdownButton variant="success" id="dropdown-basic-button3" title="System Finishes">
                    <Dropdown.Item>Thin Coat Render</Dropdown.Item>
                    <Dropdown.Item>-Sylicon and Acrylic Renders</Dropdown.Item>
                    <Dropdown.Item>-Mineral Render</Dropdown.Item>
                    <Dropdown.Item>-Stone Render</Dropdown.Item>
                    <Dropdown.Item>-Paint and Stain</Dropdown.Item>
                    <Dropdown.Item>Brick Slip Cladding</Dropdown.Item>
                    <Dropdown.Item>-7mm & 9mm Brick Slips</Dropdown.Item>
                    <Dropdown.Item>-15mm Brick Slips</Dropdown.Item>
                    <Dropdown.Item>-Internal Brick Slipis</Dropdown.Item>
                    <Dropdown.Item>Through Coloured Renders</Dropdown.Item>
                    <Dropdown.Item>-Spar Dash & Receiver</Dropdown.Item>
                    <Dropdown.Item>-Scrarch Render</Dropdown.Item>
                    <Dropdown.Item>-Tyrolean Render</Dropdown.Item>
                    <Dropdown.Item>-Brick Effect Render</Dropdown.Item>
                    </DropdownButton>
                    <hr style={{borderTop: '3px solid #38ef7d', width: '100%'}}/>
                    </div>
                </Cell>
                <Cell col={2} style={{marginLeft: '100px'}}>
                    <div style={{textAlign: 'center',margin: "0px"}}>
                    <DropdownButton variant="success" id="dropdown-basic-button4" title="Components">
                    <Dropdown.Item>Thermal Insulations</Dropdown.Item>
                    <Dropdown.Item>-Expanded Polystyryne EPS</Dropdown.Item>
                    <Dropdown.Item>-Stone Wool</Dropdown.Item>
                    <Dropdown.Item>-Phenolic</Dropdown.Item>
                    <Dropdown.Item>Ancillary Products</Dropdown.Item>
                    <Dropdown.Item>-Beads, Trims & Fixings</Dropdown.Item>
                    <Dropdown.Item>-Reinforcement</Dropdown.Item>
                    <Dropdown.Item>-Biocidial Wash</Dropdown.Item>
                    <Dropdown.Item>Through Coloured Renders</Dropdown.Item>
                    </DropdownButton>
                    <hr style={{borderTop: '3px solid #38ef7d', width: '100%'}}/>
                    </div>
                </Cell>
                <Cell col={2}>
                <img src="https://i.ibb.co/X39RV94/enhanced-EPS1.jpg" alt="enhanced-EPS1" border="0" style={{height: '80%', width: '80%'}}></img>
                </Cell>
                <Cell col={2}>
                <img src="https://i.ibb.co/v4jTDxS/enhanced-EPS2.jpg" alt="enhanced-EPS2" border="0" style={{height: '80%', width: '80%'}}></img>
                </Cell>
                <Cell col={2}>
                <img src="https://i.ibb.co/mrKVYfp/enhanced-EPS3.jpg" alt="enhanced-EPS3" border="0" style={{height: '80%', width: '80%'}}></img>
                </Cell>
                <Cell col={2}>
                <img src="https://i.ibb.co/7vcGddq/eps1.jpg" alt="eps1" border="0" style={{height: '80%', width: '80%'}}></img>
                </Cell>
                <Cell col={2}>
                <img src="https://i.ibb.co/nkZ0Mc1/eps2.jpg" alt="eps2" border="0" style={{height: '80%', width: '80%'}}></img>
                </Cell>
                <Cell col={2}>
                <img src="https://i.ibb.co/j4mr7Fy/eps3.jpg" alt="eps3" border="0" style={{height: '80%', width: '80%'}}></img>
                </Cell>
                <Cell col={2}>
                <img src="https://i.ibb.co/R4RQ29S/hd-Ribbed-EPS2.jpg" alt="hd-Ribbed-EPS2" border="0" style={{height: '80%', width: '80%'}}></img>
                </Cell>
                <Cell col={2}>
                <img src="https://i.ibb.co/Wy36Lyh/phenolic1.jpg" alt="phenolic1" border="0" style={{height: '80%', width: '80%'}}></img>
                </Cell>
                <Cell col={2}>
                <img src="https://i.ibb.co/2yfxwts/phenolic2.jpg" alt="phenolic2" border="0" style={{height: '80%', width: '80%'}}></img>
                </Cell>
                <Cell col={2}>
                <img src="https://i.ibb.co/HYgbW3v/stone-Wool1.jpg" alt="stone-Wool1" border="0" style={{height: '80%', width: '80%'}}></img>
                </Cell>
                <Cell col={2}>
                <img src="https://i.ibb.co/mRB5Jzs/stone-Wool2.jpg" alt="stone-Wool2" border="0" style={{height: '80%', width: '80%'}}></img>
                </Cell>
                <Cell col={2}>
                <img src="https://i.ibb.co/HYRYhxv/stone-Wool3.jpg" alt="stone-Wool3" border="0" style={{height: '80%', width: '80%'}}></img>
                </Cell>
                <Cell col={12}>
                <h1 style={{textAlign: 'center', fontFamily: 'Open Sans Condensed', fontSize: 'bold'}}>                    
                    <img
                    src="https://i.ibb.co/pvSztRM/small-logo.png"
                    alt="logo"
                    style={{height: '5%', width: '5%'}}
                    />
                    PDF's from Wetherby Building Systems Ltd          
                    <img
                        src="https://i.ibb.co/pvSztRM/small-logo.png"
                        alt="logo"
                        style={{height: '5%', width: '5%'}}
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
                <Cell col={4}>
                    <Card shadow={4} style={{width: '250px', height: '400px', margin: 'auto'}}>
                        <CardTitle expand style={{color: '#fff', background: 'url(https://i.ibb.co/kDH3PYQ/high-rise.jpg) bottom right 15% no-repeat #46B6AC', backgroundSize: '100% 100%'}}></CardTitle>
                        <CardText>
                        Wetherby Building Systems are specialists in the design and supply of external wall insulation systems for the refurbishment of multi-storey domestic properties.
                        </CardText>
                        <CardActions border style={{position: 'centre'}}>
                            <Button colored><a href='https://www.wbs-ltd.co.uk/wp-content/uploads/2019/12/High-Rise-Brochure-LOW-RES.pdf' style={{textDecoration: 'none', color: '#38ef7d', position: 'center'}}>View PDF</a></Button>
                        </CardActions>
                    </Card>
                </Cell>
                <Cell col={4} style={{}}>
                    <Card shadow={4} style={{width: '250px', height: '400px', margin: 'auto'}}>
                        <CardTitle expand style={{color: '#fff', background: 'url(https://i.ibb.co/x6FKRcc/internal-wall.jpg) bottom right 15% no-repeat #46B6AC', backgroundSize: '100% 100%'}}></CardTitle>
                        <CardText>
                        When insulating on the outside is not an option! BBA Approved Wetherby Internal Wall Insulation System suitable for solid, cavity or masonry walls.                        
                        </CardText>
                        <CardActions border style={{position: 'centre'}}>
                            <Button colored><a href='https://www.wbs-ltd.co.uk/wp-content/uploads/2019/12/WBS-Internal-Walls.pdf' style={{textDecoration: 'none', color: '#38ef7d', position: 'center'}}>View PDF</a></Button>
                        </CardActions>
                    </Card>
                </Cell>
                <Cell col={4}>
                    <Card shadow={4} style={{width: '250px', height: '400px', margin: 'auto'}}>
                        <CardTitle expand style={{color: '#fff', background: 'url(https://i.ibb.co/hMJK5F2/thin-coat.jpg) bottom right 15% no-repeat #46B6AC', backgroundSize: '100% 100%'}}></CardTitle>
                        <CardText>
                        Thin coat render finishes have been used throughout Europe since their introduction in the 1950’s. The UK in particular has witnessed a significant
                        rise in popularity, as we see installers and end clients recognising the benefits of a contemporary, yet durable finish. 
                        </CardText>
                        <CardActions border style={{position: 'centre'}}>
                            <Button colored><a href='https://www.wbs-ltd.co.uk/wp-content/uploads/2019/12/WBS-Thin-Coat-Systems.pdf' style={{textDecoration: 'none', color: '#38ef7d', position: 'center'}}>View PDF</a></Button>
                        </CardActions>
                    </Card>
                </Cell>
                <Cell col={4}>
                    <Card shadow={4} style={{width: '250px', height: '400px', margin: 'auto'}}>
                        <CardTitle expand style={{color: '#fff', background: 'url(https://i.ibb.co/Qc1gfJS/modular.jpg) bottom right 15% no-repeat #46B6AC', backgroundSize: '100% 100%'}}></CardTitle>
                        <CardText>
                        As the UK continues to address the housing shortage, modular construction has become increasingly popular as a quick and cost effective way to build new homes.
                        </CardText>
                        <CardActions border style={{position: 'centre'}}>
                            <Button colored><a href='https://www.wbs-ltd.co.uk/wp-content/uploads/2019/10/WBS_Modular_REVISED_FEB19.pdf' style={{textDecoration: 'none', color: '#38ef7d', position: 'center'}}>View PDF</a></Button>
                        </CardActions>
                    </Card>
                </Cell>
                <Cell col={4}>
                    <Card shadow={4} style={{width: '250px', height: '400px', margin: 'auto'}}>
                        <CardTitle expand style={{color: '#fff', background: 'url(https://i.ibb.co/rcV7KHN/new-build.jpg) bottom right 15% no-repeat #46B6AC', backgroundSize: '100% 100%'}}></CardTitle>
                        <CardText>
                        The UK construction industry sees new developments, techniques and materials introduced on a daily basis, but there is one element that remains central to any
                        new building design; sustainability.
                        </CardText>
                        <CardActions border style={{position: 'centre'}}>
                            <Button colored><a href='https://www.wbs-ltd.co.uk/wp-content/uploads/2019/10/WBS_New-Build_12p_SEPT18_v3.pdf' style={{textDecoration: 'none', color: '#38ef7d', position: 'center'}}>View PDF</a></Button>
                        </CardActions>
                    </Card>
                </Cell>
                <Cell col={4}>
                    <Card shadow={4} style={{width: '250px', height: '400px', margin: 'auto'}}>
                        <CardTitle expand style={{color: '#fff', background: 'url(https://i.ibb.co/g7fx77t/clay-brick.jpg) bottom right 15% no-repeat #46B6AC', backgroundSize: '100% 100%'}}></CardTitle>
                        <CardText>
                        Traditional brick facades are still one of the most sought after finishes for residential projects throughout the UK. Delivering familiarity and comfort to home owners it’s no wonder it continues to be a well-known favourite.
                        </CardText>
                        <CardActions border style={{position: 'centre'}}>
                            <Button colored><a href='https://www.wbs-ltd.co.uk/wp-content/uploads/2019/12/WBS-Brick-Slip-Systems.pdf' style={{textDecoration: 'none', color: '#38ef7d', position: 'center'}}>View PDF</a></Button>
                        </CardActions>
                    </Card>
                </Cell>
                <Cell col={12}>
                    <Card shadow={4} style={{width: '250px', height: '400px', margin: 'auto'}}>
                        <CardTitle expand style={{color: '#fff', background: 'url(https://i.ibb.co/pK2CGQn/through-coloured-render.jpg) bottom right 15% no-repeat #46B6AC', backgroundSize: '100% 100%'}}></CardTitle>
                        <CardText>
                        Traditional cementitious renders and spar dash (also known as dry dash) finishes are still present on many aging properties today. It is still a popular choice in restoring the long established
                        appearance of these housing estates. 
                        </CardText>
                        <CardActions border style={{position: 'centre'}}>
                            <Button colored><a href='https://www.wbs-ltd.co.uk/wp-content/uploads/2019/12/WBS-Through-Coloured-Render.pdf' style={{textDecoration: 'none', color: '#38ef7d', position: 'center'}}>View PDF</a></Button>
                        </CardActions>
                    </Card>
                </Cell>
                </Grid>
        </div>
        )
    }
};

export default Systems;

