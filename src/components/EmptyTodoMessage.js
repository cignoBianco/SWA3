import React, { useState } from 'react'
import {  Empty, Button  } from 'antd'
import './../App.css'

const EmptyTodoMessage = ({message, link, button}) => {

return (
    <Empty className="grid-center"
        image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
        imageStyle={{
        height: 60,
        }}
        description={
        <span>
           You currently have no <a href={link[1]}> {link[0]}}</a>
        </span>
        }
    >
        <a href={button[1]}><Button type="primary" action={button[1]}>{button[0]}</Button></a>
    </Empty>
    )
}

export default EmptyTodoMessage