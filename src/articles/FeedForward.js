import React, { Component } from 'react';
import {Col, Row, Image} from 'react-bootstrap';
import {Tex} from 'react-tex';

class FeedForward extends Component {
    render() {
        return (
            <Row style={{textAlign: "justify"}}>
                <Col xs={12} md={6} mdOffset={3}>
                    <p style={{fontSize:"18px", fontWeight: "bold"}}> Feed-forward function in Artificial Neural Networks </p>
                    <p>
                        In Artificial Neural Networks (ANNs) we have the feed-forward function which takes in input data and returns an output within the range
                        our activation function. This article will focus on the feed forward function and will not look into the traning methods used in Neural Networks. 
                        The language used in examples will be Python used with Numpy package.
                    </p>
                    <Image src={"http://i.imgur.com/hRkCA7b.png"} width="300px" responsive />
                    <p>
                        A Neural Network is build up of multiple layers containing neurons. The first layer is called input layer, and the last layer is the output layer.
                        In-between the input and output layer we have hidden layers. In this article we will do feed-forward for the XOR binary operation. Therefore
                        our input layer will have two neurons and our output will have one neuron. Will also include one hidden layer with tree neurons. Connecting each neuron
                        in neighbouring layers we have synapses with weights. These weights will start with random values.
                    </p>
                    <p>
                        Each neuron in the hidden and output layer have an input value and an output value. The input value is calculated based on parents neuron weight and output.
                        With the input calculated we can get the output by passing the input trought an activation function.
                        <br/><Tex texContent="Output_{ij} = activationFunction(Input_{ij})" />.
                    </p>
                    <p>
                        The over all goal is to compute the output for the output neuron. We propegate forward calcuating the output for each neuron starting in the first
                        layer and continue to the output layer. We calucate each neuron input by multiplying parent weight and output together. 
                    </p>
                    <p>
                        To keep track of all the values we will store them in matrices. This will help with the calcuations. We will look at how we can store all values in different matrices.
                    </p>
                    <p>
                        In the this example the training data input will be 0,1,1. E.g <Tex texContent="0 \oplus 1 = 1" />, we denote the input as X.
                        <br/><Tex texContent="X = \begin{bmatrix}
                                                0 & 1
                                            \end{bmatrix}" />
                    </p>
                    <p>
                        The weights will be stored in different matrices based on their layers. In our example we need two matrices to store the weights between the input layer
                        and the hidden layers, as well as one matrix to store weights between hidden layer and output layer. We denote the the weights as <Tex texContent="{W_{layer}}" />,
                        and the size of <Tex texContent="{|W_{layer}|}" /> will be <Tex texContent="{|W_{ij}|}=|Layer_i|\times |Layer_{j}|" />. Since we have two input neurons and tree hidden
                        neurons the weight matrix size will be <Tex texContent="{|W_{1}|}=2\times3" />.
                    </p>
                    <p>
                        We need to generate random values for each weight, and with numpy we can use the numpy.random.randn() function. The input of the function will be the input layer size
                        and hidden layer size: np.random.randn(2,3) which will generate random values and will look like:
                        <br/><Tex texContent="W_1 = \begin{bmatrix}
                                                -0.55593451 & -0.65629097 & -0.68361652  \\[0.3em]
                                                0.63954686  & 0.54392237 & -1.22114065
                                            \end{bmatrix}" />
                    </p>
                    <p>
                        We will do this for both <Tex texContent="W_1" /> and <Tex texContent="W_2" />.
                    </p>
                    <p>
                        We are now ready to start propegating through the network, we have establish the input values X and generated random values for both weight matrices. Since the input
                        layer neurons have no weights their input will be their output. We therefore start by finding the input value for each neuron in the hidden layer; 
                        <Tex texContent=" H_1,H_2,H_3" />. The input value is for each neuron is <Tex texContent="H_{i} = \sum W_{i}O_{i-1}" />.
                    </p>
                    <p>
                        With our data structure we can calulate the input values for each hidden neuron with matrix operations. The input values for a layer will be denoted <Tex texContent="Z" />.
                        By dot multiplying the output data and the weights we can calculate the <Tex texContent="Z" /> matrix (<Tex texContent="Z_i = XW_{i-1}" />).
                    </p>
                    <p>
                        In our exampel we then get:
                        <br/><Tex texContent="Z = \begin{bmatrix}
                                                0 & 1
                                            \end{bmatrix} \times \begin{bmatrix}
                                                -0.55 & -0.65 & -0.68  \\[0.3em]
                                                0.63  & 0.54 & -1.22
                                            \end{bmatrix}" />
                        <br/><Tex texContent="Z =\begin{bmatrix}
                                                -0.55 & -0.65 & -0.68
                                            \end{bmatrix}" />
                    </p>
                    <p>
                        Now we have the input values for all neurons in the hidden layer.
                    </p>
                    <p>
                        We need each neuron output to confirm to an output range, for this task we will use an activation function. In this example we use the sigmoid function: 
                        <br/><Tex texContent="f(z) = \frac{1}{1+e^{-z}}" />
                        The sigmoid function will output a number from 0 and 1. If we needed a wider range or negative outputs there is other activation functions availible.
                    </p>
                    <p>
                        Each value in our <Tex texContent="Z" /> matrix needs to be run thought the activation function. After this operation we have calculated the outputs 
                        for each neuron in the layer.
                        <Tex texContent="O = \begin{bmatrix}
                                                 0.6820434   & 0.51225583  & 0.58539974 
                                            \end{bmatrix}" />
                    </p>
                    <p>
                        We have now found the output for each neuron in the hidden layer. To continue we would do the same process over again until we reach the output layer and get one
                        value as output result.
                    </p>
                </Col>
            </Row>
        );
    }
}

export default FeedForward;
