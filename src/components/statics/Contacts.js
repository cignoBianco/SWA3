import React, { useState } from 'react';
import './../layout.css'
import img1 from './../../assets/svg/customer_service.svg'
import { Layout, Tag, Row, Col, Statistic  } from 'antd'
import { 
    TwitterOutlined,
    YoutubeOutlined,
    FacebookOutlined,
    LinkedinOutlined,
    LikeOutlined
} from '@ant-design/icons';

const Contacts = () => {

  return (
    <Row className="contact-row">
      <Col span={12}>
          <h1>Contacts our Support<br/>and Development team</h1>
          <p>Need to get in touch with the team? We're all ears.</p>
        <div>
            <div>
                <Tag icon={<TwitterOutlined />} color="#55acee">
                    Twitter
                </Tag>
                <Tag icon={<YoutubeOutlined />} color="#cd201f">
                    Youtube
                </Tag>
                <Tag icon={<FacebookOutlined />} color="#3b5999">
                    Facebook
                </Tag>
                <Tag icon={<LinkedinOutlined />} color="#55acee">
                    LinkedIn
                </Tag>
            </div>
        </div>
      </Col>
      <Col span={12}>
        <img src={img1} />
      </Col>
    </Row>
  );
};

export default Contacts;


