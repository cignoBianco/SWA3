import React from 'react'
import { Result, Button, Typography } from 'antd'
const { Link } = Typography;

const E500 = () => {
    return (
        <Result
        status="500"
        title="500"
        subTitle="Sorry, but somthing went wrong."
        extra={<Link href="/"><Button type="primary">Back Home</Button></Link>}
        />
    )
}
//
export default E500