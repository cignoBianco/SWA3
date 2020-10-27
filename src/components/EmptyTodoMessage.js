import React, { useState } from 'react'
import {  Empty, Button  } from 'antd'
import './../App.css'
import { useTranslation } from "react-i18next";
//const { t, i18n } = useTranslation();
// {t("")} 

const EmptyTodoMessage = ({message, link, button, clk=null}) => {

/*
<a href={button[1]}>
*/
const { t, i18n } = useTranslation(); 

return (
    <Empty className="grid-center"
        image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
        imageStyle={{
        height: 60,
        }}
        description={
        <span>
           {t("card.You currently have no ")} <a href={link[1]}> {link[0]}</a>
        </span>
        }
    >
        <Button type="primary" onClick={clk}>{button[0]}</Button>
        
    </Empty>
    )
}

export default EmptyTodoMessage