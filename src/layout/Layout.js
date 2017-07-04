import React, { Component } from 'react';
import {Grid, Row, Col, Thumbnail} from 'react-bootstrap';

import Home from '../views/Home.js';
import Menu from '../components/Menu.js';
import FeedForward from '../articles/FeedForward.js';

import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'

class Layout extends Component {
    render() {
        
        var main = {
            backgroundImage: "url('https://static.pexels.com/photos/14676/pexels-photo-14676.png')",
            backgroundSize: "100vw 100vh",
            backgroundRepeat: "no-repeat",
            width:"100vw",
            height:"100vh",
            maxWidth: "100%"
        };

        return (
            <Router>
                <div>
                <Grid style={main}>
                    <Row>
                        <Col md={12}>
                            <Menu />
                        </Col>
                    </Row>
                </Grid>
                <Grid>
                    <Row>
                        <Col md={3}>
                            <Thumbnail 
                                src="https://static.wixstatic.com/media/a7e35b_8859a240118a4f038e04d890696e8edb.png/v1/fill/w_470,h_282/a7e35b_8859a240118a4f038e04d890696e8edb.png" 
                                alt="NN"
                                style={{borderRadius:"0"}}
                            >
                                <h3>Momentum and Learning Rate</h3>
                                <p style={{textAlign:"justify"}}>
                                    In Feed-Forward Artificial Neural Networks (ANNs) we have the feed-forward function which takes in training data and returns an output within the range
                                    our activation function. This article will focus on the feed forward function and will not look into the traning methods used in Neural Networks. 
                                    The language used in examples will be Python used with Numpy package.
                                </p>
                            </Thumbnail>
                        </Col>
                    </Row>
                </Grid>
                </div>
            </Router>
        );
    }
}

export default Layout;
