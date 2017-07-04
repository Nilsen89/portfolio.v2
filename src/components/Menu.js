import React, { Component } from 'react';
import { Col, Row, Image, Grid } from 'react-bootstrap';

import {
    BrowserRouter as Router,
    Link
} from 'react-router-dom'

class Menu extends Component {

    render() {

        var logoStyle = {
            height:"100vh",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            backgroundColor:"rgba(123, 123, 123, 0.4)",
            marginBottom:"4vh",
            maxWidth:"100%"
        };

        var textStyle = {
            height:"100vh",
            fontSize:"18px",
            fontFamily: "'Bellefair', serif",
            display:"flex",
            color:"white",
            justifyContent:"center",
            alignItems:"center",
            textAlign:"center",
            maxWidth:"100%"
        };

        return (
            <Row>
                <Col md={1} mdOffset={2} style={logoStyle}>
                    <Link to="/">
                        <Image src={"http://i.imgur.com/W7a7gDd.png"} style={{width:"100px"}} responsive />
                    </Link>
                </Col>
                <Col md={6} style={textStyle}>
                        <span>
                        <p style={{color:"gold",fontSize:"24px"}}>After School Tech Blog by Christoffer A. Nilsen.</p>
                        <p>
                            Documenting and writing about my teachings after my graduation in 2017,
                            interesting founds and maybe it can be helpful for others in the future.
                        </p>
                        </span>
                </Col>
            </Row>
        );
    }
}

export default Menu;