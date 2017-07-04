import React, { Component } from 'react';
import {Row, Image} from 'react-bootstrap';

import Thumb from './../components/Thumb.js';

class Home extends Component {
    render() {
        return (
            <Row>
                <Thumb 
                    date="MONDAY 22. JUN 2017"
                    title="Momentum and Learning Rate"
                    link="momentum"
                    content="In Feed-Forward Artificial Neural Networks (ANNs) we have the feed-forward function which takes in training data and returns an output within the range
                        our activation function. This article will focus on the feed forward function and will not look into the traning methods used in Neural Networks. 
                        The language used in examples will be Python used with Numpy package."
                />
                <Thumb 
                    date="FRIDAY 24. JUN 2017"
                    title="Feed Forward Neural Network"
                    link="feedforward"
                    content="In Artificial Neural Networks (ANNs) we have the feed-forward function which takes in input data and returns an output within the range
                        our activation function. This article will focus on the feed forward function and will not look into the traning methods used in Neural Networks. 
                        The language used in examples will be Python used with Numpy package."
                />
            </Row>
            
        );
    }
}

export default Home;
