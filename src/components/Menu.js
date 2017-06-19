import React, { Component } from 'react';
import {Grid, Col, Row, Image} from 'react-bootstrap';


import {
    BrowserRouter as Router,
    Link
} from 'react-router-dom'

class Menu extends Component {

    render() {

        var menuStyle = {
            height:"20vh",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            backgroundColor: "#FFFFFF"
        };

        return (
                <Row style={{backgroundColor: "#FFFFFF"}}>
                    <Col md={6} mdOffset={3} style={menuStyle}>
                        <Link to="/">
                            <Image src={"http://i.imgur.com/W7a7gDd.png"} style={{width:"75px"}} responsive />
                        </Link>
                    </Col>
                </Row>
        );
    }
}

export default Menu;