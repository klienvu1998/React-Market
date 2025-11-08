import React, { useState } from 'react';
import { Button, Checkbox, Divider, Form, Input, message, notification } from 'antd';
import { Link, useNavigate } from 'react-router';
import { registerUser } from '../../services/api';

const RegisterPage = () => {
    const navigate = useNavigate();
    const [isSubmit, setIsSubmit] = useState(false)

    const onFinish = async (values) => {
        const { email, password, fullName, phone } = values
        setIsSubmit(true)
        const res = await registerUser(fullName, email, password, phone)
        setIsSubmit(false)
        if (res?.data?._id) {
            message.success('Register success')
            navigate('/login')
        } else {
            notification.error({
                message: "Register error",
                description: res.message,
                duration: 5
            })
        }
    }

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    return (
        <>
            <div style={{ height: '100%', backgroundColor: 'gray', display: 'flex', justifyContent: 'center' }}>
                <div style={{ display: 'inline-block', margin: 'auto auto', backgroundColor: 'white', width: '500px', padding: '20px 20px', justifyContent: 'center', height: '500px' }}>
                    <h1 style={{ textAlign: 'center' }}>Register</h1>
                    <Form
                        name="basic"
                        labelCol={{ span: 4 }}
                        wrapperCol={{ span: 20 }}
                        style={{ maxWidth: 600, margin: 'auto auto' }}
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item
                            label="Full Name"
                            name="fullName"
                            rules={[{ required: true, message: 'Please input your full name!' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Phone"
                            name="phone"
                            rules={[{ required: true, message: 'Please input your phone!' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item label={null}>
                            <Button type="primary" htmlType="submit" loading={isSubmit}>
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>

                    <Divider>Or</Divider>

                    <div style={{}}>
                        <p style={{ textAlign: 'center' }}>Exist account ?
                            <span>
                                <Link to='/login'> Login</Link>
                            </span>
                        </p>
                    </div>

                </div>
            </div>
        </>
    )
}
export default RegisterPage;