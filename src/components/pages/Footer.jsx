import React from 'react'
import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaDribbble } from 'react-icons/fa';

import { Row, Col } from 'antd'

const Footer = () => {
    return (

        <div className="footer">

            <div className="container">

            <Row justify="end">

            <Col xs={24} sm={24} md={12} lg={8}>
                    <div className="location">
                        <h4 className="boldtext footertitle">LOCATION</h4>
                        <p>Duevej 85</p>
                        <p>8500 Grenå</p>
                    </div>
                </Col>

                <Col xs={24} sm={24} md={12} lg={8}>
                    <div>

                        <h4 className="boldtext footertitle">AROUND THE WEB</h4>
                        <p>
                            <span className="socialicon"><FaFacebook /></span>
                            <span className="socialicon"><FaTwitter /></span>
                            <span className="socialicon"><FaLinkedin /></span>
                            <span className="socialicon"><FaDribbble /></span>
                        </p>
                    </div>
                </Col>

                <Col xs={24} sm={24} md={12} lg={8}>
                    <div>
                        <h4 className="boldtext footertitle">ABOUT BOSTON GAMING</h4>
                        <p>
                            Boston Gaming is a small newly
                            founded company, driven by the
                            passion of custom pc builds.
                        </p>
                    </div>
                </Col>

            </Row>

            </div>

        </div>
    )
}

export default Footer
