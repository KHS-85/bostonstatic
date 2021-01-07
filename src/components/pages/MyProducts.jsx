import React from 'react';
import { Card, Col, Row } from 'antd';

import image1 from '../images/pc1.jpg';
import image2 from '../images/pc2.jpg';
import image3 from '../images/pc3.jpg';
import image4 from '../images/pc4.jpg';
import image5 from '../images/pc5.jpg';
import image6 from '../images/pc6.jpg';


const MyProducts = () => {

  // Array with content which is mapped out in cards further down //
  const products = [
    { key: '1', text: 'Modern Design', image: image1 },
    { key: '2', text: 'Clean and Elegant', image: image2 },
    { key: '3', text: 'Great Support', image: image3 },
    { key: '4', text: 'Easy to customize', image: image4 },
    { key: '5', text: 'Unlimited Features', image: image5 },
    { key: '6', text: 'Advanced Options', image: image6 }
  ]

  return (

    <div className="container">
      <div className="site-card-wrapper">
        <Row gutter={16}>

          <Col xs={24} sm={24} md={12} lg={8}>
            <Card title="Small form factor? Yes!" bordered={false}>
              <img className="card-img-top" src={image1} alt="pc1" />
            </Card>
          </Col>

          <Col xs={24} sm={24} md={12} lg={8}>
            <Card title="The Budget Friendly" bordered={false}>
              <img className="card-img-top" src={image2} alt="pc2" />
            </Card>
          </Col>

          <Col xs={24} sm={24} md={12} lg={8}>
            <Card title="Small but effective, YEAH!" bordered={false}>
              <img className="card-img-top" src={image3} alt="pc3" />
            </Card>
          </Col>

          <Col xs={24} sm={24} md={12} lg={8}>
            <Card title="Red is the new black" bordered={false}>
              <img className="card-img-top" src={image4} alt="pc4" />
            </Card>
          </Col>

          <Col xs={24} sm={24} md={12} lg={8}>
            <Card title="Elegant Design" bordered={false}>
              <img className="card-img-top" src={image5} alt="pc5" />
            </Card>
          </Col>

          <Col xs={24} sm={24} md={12} lg={8}>
            <Card title="Who likes Tempered Glass?" bordered={false}>
              <img className="card-img-top" src={image6} alt="pc6" />
            </Card>
          </Col>
          
        </Row>
      </div>
    </div>


  )
}

export default MyProducts
