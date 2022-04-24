import { Calendar, Badge, Modal } from "antd";
import moment from "moment";
import React, { useState } from "react";
import styled from "styled-components";
import AddList from "./AddList";
import locale from "antd/es/calendar/locale/ko_KR";
const HeaderBlock = styled.h2`
  margin-top: 30px;
  text-align: center;
`;

const CalendarBlock = styled.div``;

const mCalendar = () => {
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
    //alert(value.format("YYYY-MM-DD"));
  };
  return (
    <>
      <HeaderBlock>
        <h2 style={{ color: "#2196F3" }}>{value}</h2>
      </HeaderBlock>
      <CalendarBlock>
        <Calendar locale={locale} onSelect={onSelect} />
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
