import React from 'react'
import { Result, Button } from 'antd'
import Signup from './../user/Signup'
import { useTranslation } from "react-i18next";


const E403 = () => {
    const { t, i18n } = useTranslation();
// {t("")} 
    return (
        <Result
            status="403"
            title="403"
            subTitle="Sorry, you are not authorized to access this page."
            extra={<>
               
                <Signup />
                </>
            }
        />
    )
}

export default E403