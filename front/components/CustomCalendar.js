import { Calendar, Badge, Modal } from "antd";
import moment from "moment";
import React, { useState } from "react";
import styled from "styled-components";
import AddList from "./AddList";
const HeaderBlock = styled.h2`
  margin-top: 30px;
  text-align: center;
`;

const CalendarBlock = styled.div``;

const mCalendar = ({ tasks, setDate }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [value, setValue] = useState(moment().format("MM월 DD일"));
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onSelect = (value) => {
    //showModal();
    setValue(value.format("MM월 DD일"));
    setDate(value.format("YYYY-MM-DD"));
  };
  const getListData = (value) => {};

  const dateCellRender = (value) => {
    const date = value.format("YYYY-MM-DD");
    const taskDate = tasks.filter((task) => task.date === date);
    if(taskDate.length>=1)
    return <Badge status="success" text={taskDate.length} ></Badge>;
  };

  const monthCellRender = (value) => {
    return;
  };
  return (
    <>
      <HeaderBlock>
        <h2 style={{ color: "#2196F3" }}>{value}</h2>
      </HeaderBlock>
      <CalendarBlock>
        <Calendar dateCellRender={dateCellRender} onSelect={onSelect} />
      </CalendarBlock>
      <Modal
        title="새로운 일정을 등록하세요"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        cancelText="닫기"
        okText="등록하기"
      >
        <AddList></AddList>
      </Modal>
    </>
  );
};

export default mCalendar;
