import React from 'react'
import { Result, Button, Typography } from 'antd'
import img from './../../assets/svg/coding_.svg'
const { Link } = Typography;


const Edit = () => {
 return(
   <div>
     <Result
    icon={<img src={img} style={{height: 300}} />}
    title="Sorry, this page is under construction! Coming soon..."
    extra={<Button type="primary"><Link to="/">Go to main</Link></Button>}
    />,
   </div>
 )
}

export default Edit