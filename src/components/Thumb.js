import React, { Component } from 'react';
import { Col } from 'react-bootstrap';

import { Link } from 'react-router-dom';

class Thumb extends Component {

    render() {

        var thumbStyle = {
            borderBottom:"1px dotted gray",
            marginBottom:"2vh"
        };
        var titleStyle = {
            fontSize:"24px", 
            textAlign:"left"
        };
        var contentStyle={
            textAlign:"justify"
        };
        
        return (
            <Col md={6} mdOffset={3} style={thumbStyle}>
                <p>{this.props.date}</p>
                <Link style={{color:"black"}} to={this.props.link}>
                    <p style={titleStyle}>{this.props.title}</p>
                </Link>
                <p style={contentStyle}>
                    {this.props.content}
                </p>
            </Col>
        );
    }
}

export default Thumb;