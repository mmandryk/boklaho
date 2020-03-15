import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
   return (
    <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title="Eco Construction System Ltd" scroll>
            <Navigation>
                <Link to="/about" style={{fontSize:'20px', fontWeight: 'bold'}}>About It</Link>
                <Link to="/systems" style={{fontSize:'20px', fontWeight: 'bold'}}>Systems & Solutions</Link>
                <Link to="/projects" style={{fontSize:'20px', fontWeight: 'bold'}}>Projects</Link>
                <Link to="/contact" style={{fontSize:'20px', fontWeight: 'bold'}}>Contact</Link>
            </Navigation>
        </Header>
        <Drawer title="Eco Construction">
            <Navigation>
                <Link to="/about" style={{fontSize:'20px', fontWeight: 'bold'}}>About It</Link>
                <Link to="/systems" style={{fontSize:'20px', fontWeight: 'bold'}}>Systems & Solutions</Link>
                <Link to="/projects" style={{fontSize:'20px', fontWeight: 'bold'}}>Projects</Link>
                <Link to="/contact" style={{fontSize:'20px', fontWeight: 'bold'}}>Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>
  );
   }
}

export default App;
