import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

import Menu from '../components/Menu.js';

import Home from '../views/Home.js';
import Projects from '../views/Projects.js';

import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'

class Layout extends Component {
    render() {
        return (
            <Router>
                <Grid style={{width:"100vw"}}>
                    <Menu />                    
                    <Row>
                        <Col md={6} mdOffset={3}>
                            <Route exact path="/" component={Home}/>
                            <Route path="/projects" component={Projects}/>
                        </Col>
                    </Row>
                </Grid> 
            </Router>
        );
    }
}

export default Layout;
