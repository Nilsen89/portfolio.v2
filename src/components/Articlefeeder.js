import React, { Component } from 'react';
import { Col, Row, Thumbnail} from 'react-bootstrap';

import {
    BrowserRouter as Router,
    Link
} from 'react-router-dom'

class Articlefeeder extends Component {

    render() {
        return (
            <Row>
                <Col md={3} xs={6}>
                    <Thumbnail 
                        src="https://static.wixstatic.com/media/a7e35b_8859a240118a4f038e04d890696e8edb.png/v1/fill/w_470,h_282/a7e35b_8859a240118a4f038e04d890696e8edb.png" 
                        alt={art.title}
                        style={{borderRadius:"0"}}
                    >
                        <h3>{art.tite}</h3>
                        <p style={{textAlign:"justify"}}>
                            {art.content}
                        </p>
                    </Thumbnail>
                </Col>
            </Row>
        );
    }
}

export default Articlefeeder;