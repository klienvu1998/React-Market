import { Button, Divider, Form, Input, notification } from "antd";
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { loginUser } from "../../services/api";

const LoginPage = () => {
    const navigate = useNavigate();
    const [isLogin, setIsLogin] = useState(false)

    const onFinish = async (values) => {
        setIsLogin(true)
        const { email, password } = values
        const res = await loginUser(email, password)
        setIsLogin(false)
        if (res?.data) {
            notification.success({
                message: "Login success",
                duration: 3
            })
        } else {
            notification.error({
                message: "Login fail",
                duration: 3
            })
        }
    }

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    return (
        <>
            <div style={{ height: '100%', backgroundColor: 'gray', display: 'flex', justifyContent: 'center' }}>
                <div style={{ display: 'inline-block', margin: 'auto auto', backgroundColor: 'white', width: '500px', padding: '20px 20px', justifyContent: 'center' }}>
                    <h1 style={{ textAlign: 'center' }}>Login</h1>
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

                        <Form.Item label={null}>
                            <Button type="primary" htmlType="submit" loading={isLogin}>
                                Login
                            </Button>
                        </Form.Item>
                    </Form>

                    <Divider>Or</Divider>

                    <div style={{}}>
                        <p style={{ textAlign: 'center' }}>Create account ?
                            <span>
                                <Link to='/login'> Signup</Link>
                            </span>
                        </p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default LoginPage