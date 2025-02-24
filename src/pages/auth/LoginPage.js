import React from 'react';
import { Form, Input, Button, Card } from 'antd';
import { useNavigate } from 'react-router-dom';

const LoginPage = ({ setIsAuthenticated }) => {
    const navigate = useNavigate();

    const onFinish = (values) => {
        console.log('Login Success:', values);
        setIsAuthenticated(true);
        navigate('/change-password'); // Перенаправляем пользователя после входа
    };

    return (
        <Card
            title="Login"
            style={{
                width: 300,
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)'
            }}
        >
            <Form layout="vertical" onFinish={onFinish}>
                <Form.Item label="Username" name="username" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item label="Password" name="password" rules={[{ required: true }]}>
                    <Input.Password />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">Login</Button>
                </Form.Item>
            </Form>
        </Card>
    );
};

export default LoginPage;
