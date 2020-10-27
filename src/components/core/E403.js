import React from 'react'
import { Result, Button } from 'antd'
import Signup from './../user/Signup'

const E403 = () => {
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