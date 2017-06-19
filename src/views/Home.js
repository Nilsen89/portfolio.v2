import React, { Component } from 'react';
import {Col, Row, Image, Grid} from 'react-bootstrap';

class Home extends Component {
    render() {
        return (
                <div>
                <Row>
                    <Col>
                        <hr style={{borderTop:"1px solid black"}} />
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <p>16. JUN 2017</p>
                        <p style={{fontWeight:"bold", fontSize:"24px", textAlign:"left"}}>Feed-forward</p>
                        <p style={{textAlign:"justify"}}>
                             In Feed-Forward Artificial Neural Networks (ANNs) we have the feed-forward function which takes in training data and returns an output within the range
                            our activation function. This article will focus on the feed forward function and will not look into the traning methods used in Neural Networks. 
                            The language used in examples will be Python used with Numpy package.
                        </p>
                    </Col>
                     <Col md={6}>
                     <p>22. JUN 2017</p>
                        <p style={{fontWeight:"bold", fontSize:"24px", textAlign:"left"}}>Activiation Function</p>
                        <p style={{textAlign:"justify"}}>
                             A Neural Network is build up of multiple layers containing neurons. The first layer is called input layer, and the last layer is the output layer.
                        In-between the input and output layer we have hidden layers. In this article we will do feed-forward for the XOR binary operation. Therefore
                        our input layer will have two neurons and our output will have one neuron. Will also include one hidden layer with tree neurons. Connecting each neuron
                        in neighbouring layers we have synapses with weights. These weights will start with random values.

                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <hr style={{borderBottom:"1px dotted black"}} />
                    </Col>
                </Row>
                </div>
        );
    }
}

export default Home;
