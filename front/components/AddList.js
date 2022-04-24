import React, { useState } from 'react';
import { Form, Input, Button, Radio } from 'antd';

const AddList = () => {
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState('vertical');

  const onFormLayoutChange = ({ layout }) => {
    setFormLayout(layout);
  };

  const formItemLayout =
    formLayout === 'horizontal'
      ? {
          labelCol: {
            span: 4,
          },
          wrapperCol: {
            span: 14,
          },
        }
      : null;
  const buttonItemLayout =
    formLayout === 'horizontal'
      ? {
          wrapperCol: {
            span: 14,
            offset: 4,
          },
        }
      : null;
  return (
    <Form
      {...formItemLayout}
      layout={formLayout}
      form={form}
      initialValues={{
        layout: formLayout,
      }}
      onValuesChange={onFormLayoutChange}
    >
      <Form.Item label="제목">
        <Input placeholder="제목을 입력하세요" />
      </Form.Item>
      <Form.Item label="메모">
        <Input.TextArea  placeholder="상세 내용을 입력하세요" />
      </Form.Item>
    </Form>
  );
};

export default () => <AddList />;