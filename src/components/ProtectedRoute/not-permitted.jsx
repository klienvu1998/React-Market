import React from 'react';
import { Button, Result } from 'antd';
import { useNavigate } from 'react-router';

const NotPermitted = () => {
    const navigate = useNavigate()
    return <Result
        status="403"
        title="403"
        subTitle="Sorry, the page you visited does not exist."
        extra={<Button onClick={() => navigate('/')} type="primary">Back Home</Button>}
    />
};

export default NotPermitted;