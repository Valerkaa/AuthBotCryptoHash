import React from 'react';
import { Form, Input, Button, Card } from 'antd';

const AddTokenPage = () => {
  const onFinish = (values) => {
    console.log('Add Token:', values);
  };

  return (
    <Card title="Add Token" style={{ width: 300 }}>
      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item label="Token Address" name="tokenAddress" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">Add Token</Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default AddTokenPage;
