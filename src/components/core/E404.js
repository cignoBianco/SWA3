import React from 'react'
import { Result, Button, Typography } from 'antd'
import Signup from './../user/Signup'
const { Link } = Typography;

const E404 = () => {
    return (
        <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={<Link href="/"><Button type="primary">Back Home</Button></Link>}
        />
    )
}
//
export default E404