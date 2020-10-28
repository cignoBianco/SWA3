import React, { useState } from 'react';
import './../layout.css'
import htmlImg from './../../assets/svg/html.svg'
import cssImg from './../../assets/svg/css.svg'
import jsImg from './../../assets/svg/javascript.svg'
import uiImg from './../../assets/svg/ui_designer.svg'
import coderImg from './../../assets/svg/coder.svg'
import supportImg from './../../assets/svg/it_support.svg'
//import  from './../../assets/svg/'
import { Tag, Row, Col, Statistic, Card } from 'antd'
import { 
    TwitterOutlined,
    YoutubeOutlined,
    FacebookOutlined,
    LinkedinOutlined,
    LikeOutlined
} from '@ant-design/icons';
const { Meta } = Card

const Contacts = () => {

  return (
    <div class="contact-wrapper">
        <div>
        <h1 style={{marginTop: 30}}>Our Team Leads</h1>
        <p>We are led by a team who constantly questions, tinkers, and<br/> <code>challendgers</code> to unlock great creativity eround every turn.</p>
        <Row gutter={16} style={{textAlign: '-webkit-center', marginTop: 30}}>
            <Col span={8}>
                <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src={htmlImg} className="imgTeam"  />}
                >
                    <Meta title="Smirnova Anastasia" description="LAYOUT HTML" />
                </Card>
            </Col>
            <Col span={8}>
                <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src={cssImg} className="imgTeam" />}
                >
                    <Meta title="Smirnova Anastasia" description="LAYOUT DESIGNER" />
                </Card>
            </Col>
            <Col span={8}>
                <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src={jsImg} className="imgTeam" />}
                >
                    <Meta title="Smirnova Anastasia" description="FRONTEND DEVELOPER" />
                </Card>
            </Col>
            <Col span={8}>
                <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src={coderImg} className="imgTeam"  />}
                >
                    <Meta title="Smirnova Anastasia" description="BACKEND DEVELOPER" />
                </Card>
            </Col>
            <Col span={8}>
                <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src={uiImg} className="imgTeam"  />}
                >
                    <Meta title="Smirnova Anastasia" description="UI DESIGNER" />
                </Card>
            </Col>
            <Col span={8}>
                <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src={supportImg} className="imgTeam"  />}
                >
                    <Meta title="Smirnova Anastasia" description="SUPPORT" />
                </Card>
            </Col>
        </Row>
        </div>
        <div>
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
        <div style={{marginTop: 20}}>
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
    </div>
  );
};

export default Contacts;


