import React, { useState } from 'react';
import './../layout.css'
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
    <div >
        <div>
            <Row gutter={16}>
                <Col span={12}>
                <Statistic title="Feedback" value={1128} prefix={<LikeOutlined />} />
                </Col>
                <Col span={12}>
                <Statistic title="Unmerged" value={93} suffix="/ 100" />
                </Col>
            </Row>
        </div>
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
    </div>
  );
};

export default Contacts;


