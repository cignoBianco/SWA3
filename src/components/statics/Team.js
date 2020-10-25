import { 
    TwitterOutlined,
    YoutubeOutlined,
    FacebookOutlined,
    LinkedinOutlined,
} from '@ant-design/icons';
import React, { useState } from 'react';
import './../layout.css'
import { Layout, Tag } from 'antd'
const { Header: H, Footer, Content } = Layout;

const Team = () => {

  return (
    <div >
        <div>

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

export default Team;


