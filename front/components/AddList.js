import React, { useState, useEffect } from "react";
import { Form, Input, Button, Radio } from "antd";

const AddList = ({ title, setTitle, setContent }) => {
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState("vertical");
  const [tempTitle, setTempTitle] = useState("");

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  return (
    <Form
      layout={formLayout}
      form={form}
      initialValues={{
        layout: formLayout,
      }}
    >
      <Form.Item label="내용">
        <Input
          placeholder="내용을 입력하세요"
          onChange={onChangeTitle}
          value={title}
        />
      </Form.Item>
      <Form.Item label="메모">
        <Input.TextArea
          placeholder="상세 내용을 입력하세요"
          onChange={onChangeContent}
        />
      </Form.Item>
    </Form>
  );
};

export default AddList;
