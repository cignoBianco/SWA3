import React from 'react'
import {Carousel, Typography} from 'antd'
import todos from './../../assets/svg/information_carousel.svg'
import meet from './../../assets/svg/remote-team.svg'
import lists from './../../assets/svg/scrum_board.svg'
import report from './../../assets/svg/report_analysis_.svg'
import pr from './../../assets/svg/profiling.svg'
import time from './../../assets/svg/waiting.svg'
import pass from './../../assets/svg/password.svg'
import ui from './../../assets/svg/authentication.svg'
import statistic from './../../assets/svg/statistics.svg'
import server from './../../assets/svg/data_hosting.svg'

const {Title} = Typography

const contentStyle = {
    height: '460px',
    color: '#001529',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#00214088',
    transitionTimingFunction: 'cubic-bezier(0.25, 0.1, 0.25, 1)'
  };

const image = {
    //width: '100%'
    height: 300,
    margin: '0 auto'
}

const Concept = () => {
    return (
        <div style={{padding: '2em 1em'}}>
            <Title>OUR COCEPTS</Title>
            <Carousel autoplay easing="ease-in">
                <div style={contentStyle}>
                <h3 >Create, assign, organize, prioritize, schedule and share tasks.</h3>
                <img src={todos} style={image} />
                </div>
                <div style={contentStyle}>
                <h3 >Schedule recurring meetings.</h3>
                <img src={meet} style={image} />
                </div>
                <div style={contentStyle}>
                <h3 >Create and customize todo lists.</h3>
                <img src={lists} style={image} />
                </div>
                <div style={contentStyle}>
                <h3 >Create and assign projects.</h3>
                <img src={report} style={image} />
                </div>
                <div style={contentStyle}>
                <h3 >Alerts, notifications, and reminders to keep teams on track.</h3>
                <img src={pr} style={image} />
                </div>
                <div style={contentStyle}>
                <h3 >Control your time</h3>
                <img src={time} style={image} />
                </div>
                <div style={contentStyle}>
                <h3 >Two-Factor Authentication for extensive security.</h3>
                <img src={pass} style={image} />
                </div>
                <div style={contentStyle}>
                <h3 >A simple user interface with access to a wide range of modules.</h3>
                <img src={ui} style={image} />
                </div>
                <div style={contentStyle}>
                <h3 > A dedicated time tracking module with the option of creating and managing team-specific sections for employee task efforts and payroll.</h3>
                <img src={statistic} style={image} />
                </div>
                <div style={contentStyle}>
                <h3 > Storing your data on our super-cool server !</h3>
                <img src={server} style={image} />
                </div>
            </Carousel>
        </div>
    )
}

export default Concept
