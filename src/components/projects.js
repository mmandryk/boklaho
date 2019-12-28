import React, { Component } from 'react';
import {Tabs, Tab, Card, Grid, Cell, CardTitle, CardText, CardActions, Button } from 'react-mdl'
class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activetab: 0};
    }
    toggleCategories(){
        if(this.state.activeTab === 0) {
            return(
                <div  className="projects-grid">
                
                <Card shadow={5} style={{Width: '450px', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '450px', background: 'url(https://s3-eu-west-1.amazonaws.com/cats3.checkatrade.com/Photos/383327/O/408b7a78-2b93-49b5-8c4e-494239ec5661.jpg) center / cover'}}>Before</CardTitle>
                <CardText>
                Rhos on Sea
                </CardText>
                </Card>

                <Card shadow={5} style={{Width: '450px', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '450px', background: 'url(https://s3-eu-west-1.amazonaws.com/cats3.checkatrade.com/Photos/383327/O/58179e25-31ab-4dbe-add0-b5d651854798.jpg) center / cover'}}>During...</CardTitle>
                <CardText>
                Rhos on Sea
                </CardText>
                </Card>

                <Card shadow={5} style={{Width: '450px', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '450px', background: 'url(https://s3-eu-west-1.amazonaws.com/cats3.checkatrade.com/Photos/383327/O/9566884e-23be-4cb6-a80e-fb61e606c8ae.jpg) center / cover'}}>Almost...</CardTitle>
                <CardText>
                Rhos on Sea
                </CardText>
                </Card>

                <Card shadow={5} style={{Width: '450px', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '450px', background: 'url(https://s3-eu-west-1.amazonaws.com/cats3.checkatrade.com/Photos/383327/O/e48d7f47-b2df-4da3-a1e2-ac571c5afc79.jpg) center / cover'}}>Done!</CardTitle>
                <CardText>
                Rhos on Sea
                </CardText>
                </Card>
                </div>
                
            )
    } else if(this.state.activeTab === 1) {
        return(
            <div  className="projects-grid">
                
                <Card shadow={5} style={{Width: '450px', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '450px', background: 'url(https://s3-eu-west-1.amazonaws.com/cats3.checkatrade.com/Photos/383327/O/19cfc10f-7acb-4682-ab74-2d8e4936fccc.jpg) center / cover'}}>Before</CardTitle>
                <CardText>
                Pitville Avenue. Liverpool
                </CardText>
                </Card>

                <Card shadow={5} style={{Width: '450px', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '450px', background: 'url(https://s3-eu-west-1.amazonaws.com/cats3.checkatrade.com/Photos/383327/O/4abe2ddc-3bd6-4557-9d09-ae8ccd550430.jpg) center / cover'}}>During...</CardTitle>
                <CardText>
                Pitville Avenue. Liverpool
                </CardText>
                </Card>

                <Card shadow={5} style={{Width: '450px', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '450px', background: 'url(https://s3-eu-west-1.amazonaws.com/cats3.checkatrade.com/Photos/383327/O/98a0b761-ed71-4a4c-8629-1054bf23121f.jpg) center / cover'}}>Done!</CardTitle>
                <CardText>
                Pitville Avenue. Liverpool
                </CardText>
                </Card>
                </div>
        )
    } else if(this.state.activeTab === 2) {
        return(
            <div  className="projects-grid">
                
                <Card shadow={5} style={{Width: '450px', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '450px', background: 'url(https://s3-eu-west-1.amazonaws.com/cats3.checkatrade.com/Photos/383327/O/8e92c675-d8cb-4cf9-949f-b3c2b441cec9.jpg) center / cover'}}>Before</CardTitle>
                <CardText>
                Woodford Close, Cheshire
                </CardText>
                </Card>

                <Card shadow={5} style={{Width: '450px', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '450px', background: 'url(https://s3-eu-west-1.amazonaws.com/cats3.checkatrade.com/Photos/383327/O/35460079-8219-4b74-8b8c-f4fe544db3dc.jpg) center / cover'}}>Before</CardTitle>
                <CardText>
                Woodford Close, Cheshire
                </CardText>
                </Card>

                <Card shadow={5} style={{Width: '450px', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '450px', background: 'url(https://s3-eu-west-1.amazonaws.com/cats3.checkatrade.com/Photos/383327/O/e7701d0c-2a1f-4339-bd86-096f505b4aef.jpg) center / cover'}}>Almost...</CardTitle>
                <CardText>
                Woodford Close, Cheshire
                </CardText>
                </Card>

                <Card shadow={5} style={{Width: '450px', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '450px', background: 'url(https://s3-eu-west-1.amazonaws.com/cats3.checkatrade.com/Photos/383327/O/a5955126-e6d0-4f23-bf08-43d27debff1f.jpg) center / cover'}}>Done!</CardTitle>
                <CardText>
                Woodford Close, Cheshire
                </CardText>
                </Card>
                </div>
        )
    } else if(this.state.activeTab === 3) {
        return(
            <div  className="projects-grid">
                
                <Card shadow={5} style={{Width: '450px', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '450px', background: 'url(https://s3-eu-west-1.amazonaws.com/cats3.checkatrade.com/Photos/383327/O/bb278b10-817e-4455-bae3-1d1034f0e21a.jpg) center / cover'}}>During...</CardTitle>
                <CardText>
                Neston
                </CardText>
                </Card>

                <Card shadow={5} style={{Width: '450px', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '450px', background: 'url(https://s3-eu-west-1.amazonaws.com/cats3.checkatrade.com/Photos/383327/O/8818884f-36e0-4dc0-ae6e-80d22b503c19.jpg) center / cover'}}></CardTitle>
                <CardText>
                Neston
                </CardText>
                </Card>
                </div>
        )
    } else if(this.state.activeTab === 4) {
        return(
            <div  className="projects-grid">
                
                <Card shadow={5} style={{Width: '450px', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '450px', background: 'url(https://s3-eu-west-1.amazonaws.com/cats3.checkatrade.com/Photos/383327/O/f24713c7-a5bf-49f0-8b1a-87ff7e0664fc.jpg) center / cover'}}>Before</CardTitle>
                <CardText>
                Pennywell Farm Croughton Chester
                </CardText>
                </Card>

                <Card shadow={5} style={{Width: '450px', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '450px', background: 'url(https://s3-eu-west-1.amazonaws.com/cats3.checkatrade.com/Photos/383327/O/f3f1de60-e7da-43d7-8dba-da27ba6773a2.jpg) center / cover'}}>During...</CardTitle>
                <CardText>
                Pennywell Farm Croughton Chester
                </CardText>
                </Card>

                <Card shadow={5} style={{Width: '450px', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '450px', background: 'url(https://s3-eu-west-1.amazonaws.com/cats3.checkatrade.com/Photos/383327/O/6e993526-9d1b-46ed-bc22-6e62aa11551d.jpg) center / cover'}}>Almost...</CardTitle>
                <CardText>
                Pennywell Farm Croughton Chester
                </CardText>
                </Card>

                <Card shadow={5} style={{Width: '450px', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '450px', background: 'url(https://s3-eu-west-1.amazonaws.com/cats3.checkatrade.com/Photos/383327/O/ff572fa0-2f1f-477b-945d-291cbcc72a2e.jpg) center / cover'}}>Done!</CardTitle>
                <CardText>
                Pennywell Farm Croughton Chester
                </CardText>
                </Card>
                </div>
        )
    } else if(this.state.activeTab === 5) {
        return(
            <div  className="projects-grid">
                
                <Card shadow={5} style={{Width: '450px', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '450px', background: 'url(https://s3-eu-west-1.amazonaws.com/cats3.checkatrade.com/Photos/383327/O/ae69c982-91d6-4402-9a27-feedbf415488.jpg) center / cover'}}>Before</CardTitle>
                <CardText>
                Frodsham Dingle Cottage
                </CardText>
                </Card>

                <Card shadow={5} style={{Width: '450px', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '450px', background: 'url(https://s3-eu-west-1.amazonaws.com/cats3.checkatrade.com/Photos/383327/O/1d8cd075-949d-4bb7-9b45-e045364514cb.jpg) center / cover'}}>During...</CardTitle>
                <CardText>
                Frodsham Dingle Cottage
                </CardText>
                </Card>

                <Card shadow={5} style={{Width: '450px', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '450px', background: 'url(https://s3-eu-west-1.amazonaws.com/cats3.checkatrade.com/Photos/383327/O/77102f8d-50ae-482f-958d-edbf81f50664.jpg) center / cover'}}>Almost...</CardTitle>
                <CardText>
                Frodsham Dingle Cottage
                </CardText>
                </Card>

                <Card shadow={5} style={{Width: '450px', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '450px', background: 'url(https://s3-eu-west-1.amazonaws.com/cats3.checkatrade.com/Photos/383327/O/b6c3e582-77c6-45ec-a0bb-a3f7f7b1e1da.jpg) center / cover'}}>Done!</CardTitle>
                <CardText>
                Frodsham Dingle Cottage
                </CardText>
                </Card>
                </div>
        )
    } else if(this.state.activeTab === 6) {
        return(
            <div  className="projects-grid">
                
                <Card shadow={5} style={{Width: '450px', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '450px', background: 'url(https://s3-eu-west-1.amazonaws.com/cats3.checkatrade.com/Photos/383327/O/c8754baf-3b45-4f6a-8c15-3c1b64e24494.jpg) center / cover'}}>Before</CardTitle>
                <CardText>
                Church Road Prenton
                </CardText>
                </Card>

                <Card shadow={5} style={{Width: '450px', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '450px', background: 'url(https://s3-eu-west-1.amazonaws.com/cats3.checkatrade.com/Photos/383327/O/14002b61-1292-4398-8d18-61fdfafecccf.jpg) center / cover'}}>During...</CardTitle>
                <CardText>
                Church Road Prenton
                </CardText>
                </Card>

                <Card shadow={5} style={{Width: '450px', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '450px', background: 'url(https://s3-eu-west-1.amazonaws.com/cats3.checkatrade.com/Photos/383327/O/54137ce5-86d9-4a82-b6c1-c37f66b49da4.jpg) center / cover'}}>Done!</CardTitle>
                <CardText>
                Church Road Prenton
                </CardText>
                </Card>
                </div>
        )
    } else if(this.state.activeTab === 7) {
        return(
            <div  className="projects-grid">

                <Card shadow={5} style={{Width: '450px', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '450px', background: 'url(https://s3-eu-west-1.amazonaws.com/cats3.checkatrade.com/Photos/383327/O/d8659ab8-1b49-4753-9b6f-cef53789f635.jpg) center / cover'}}>During...</CardTitle>
                <CardText>
                Winsford
                </CardText>
                </Card>

                <Card shadow={5} style={{Width: '450px', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '450px', background: 'url(https://s3-eu-west-1.amazonaws.com/cats3.checkatrade.com/Photos/383327/O/ba9b2ca6-a77b-4a8e-9f4b-8a71adaf958e.jpg) center / cover'}}>Almost...</CardTitle>
                <CardText>
                Winsford
                </CardText>
                </Card>

                <Card shadow={5} style={{Width: '450px', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '450px', background: 'url(https://s3-eu-west-1.amazonaws.com/cats3.checkatrade.com/Photos/383327/O/495c6885-9440-411c-a3b7-0daa68fb2002.jpg) center / cover'}}>Done!</CardTitle>
                <CardText>
                Winsford
                </CardText>
                </Card>
                </div>
        )
    } else if(this.state.activeTab === 8) {
        return(
            <div  className="projects-grid">

                <Card shadow={5} style={{Width: '450px', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '450px', background: 'url(https://s3-eu-west-1.amazonaws.com/cats3.checkatrade.com/Photos/383327/O/417eaa79-0896-473c-8bfe-a48b5a2ec7d8.jpg) center / cover'}}>Almost...</CardTitle>
                <CardText>
                Grey Stone Road
                </CardText>
                </Card>

                <Card shadow={5} style={{Width: '450px', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '450px', background: 'url(https://s3-eu-west-1.amazonaws.com/cats3.checkatrade.com/Photos/383327/O/e3174133-5e8d-48ba-8c14-2f3b15f4b765.jpg) center / cover'}}>Done!</CardTitle>
                <CardText>
                Grey Stone Road
                </CardText>
                </Card>
                </div>
        )
    } else if(this.state.activeTab === 9) {
        return(
            <div  className="projects-grid">

            <Card shadow={0} style={{width: '700px', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '450px', background: 'url(https://craigphillips.co.uk/sites/default/files/checka.png) center / cover'}}></CardTitle>
            <CardActions border>
            <Button style={{center: 'auto', height: '100px'}}><a href="https://www.checkatrade.com/EcoConstructionSystems/">Check me on Checkatrade.com</a></Button>
            </CardActions>
            </Card>
</div>
        )
    } 
    }


    render() {
        return(
            <div className="category-tabs">
                 <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>1</Tab>
                    <Tab>2</Tab>
                    <Tab>3</Tab>
                    <Tab>4</Tab>
                    <Tab>5</Tab>
                    <Tab>6</Tab>
                    <Tab>7</Tab>
                    <Tab>8</Tab>
                    <Tab>9</Tab>
                    <Tab>More ?</Tab>
                </Tabs>


                <Grid>
                    <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div>
                    </Cell>  
                </Grid>
            </div>
        )
    }
};

export default Projects;