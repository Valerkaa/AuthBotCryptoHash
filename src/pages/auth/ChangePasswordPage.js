import React from 'react';
import { Form, Input, Button, Card } from 'antd';

const ChangePasswordPage = () => {
  const onFinish = (values) => {
    console.log('Password Change:', values);
  };

  return (
    <Card title="Change Password" style={{ width: 300 }}>
      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item label="Old Password" name="oldPassword" rules={[{ required: true }]}>
          <Input.Password />
        </Form.Item>
        <Form.Item label="New Password" name="newPassword" rules={[{ required: true }]}>
          <Input.Password />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">Change Password</Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default ChangePasswordPage;
