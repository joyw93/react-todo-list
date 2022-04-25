import { Calendar, Badge, Modal, Divider, message } from "antd";
import moment from "moment";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import AddList from "./AddList";


const HeaderBlock = styled.h2`
  margin-top: 30px;
  text-align: center;
`;

const CalendarBlock = styled.div``;

const mCalendar = ({ tasks, setTasks, setDate }) => {
  const [memory, setMemory] = useState({
    date: "",
    count: 0,
  });
  useEffect(() => {
    if (memory.count == 2) {
      showModal();
    }
  }, [memory]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [value, setValue] = useState(moment().format("MM월 DD일"));
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    const newTask = {
      id: tasks.length + 1,
      date: memory.date,
      title: title,
      content: content,
      done: false,
    };
    setTasks(tasks.concat(newTask));
    setTitle("");
    setContent("");
    message.success('등록이 완료됐어요.');
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onSelect = (value) => {
    const selectedDate = value.format("YYYY-MM-DD");
    if (selectedDate == memory.date) {
      setMemory({ ...memory, count: 2, date: selectedDate });
    } else {
      setMemory({ ...memory, count: 1, date: selectedDate });
    }
    setValue(value.format("MM월 DD일"));
    setDate(selectedDate);
  };
  const getListData = (value) => {};

  const dateCellRender = (value) => {
    const date = value.format("YYYY-MM-DD");
    const taskDate = tasks.filter((task) => task.date === date);
    if (taskDate.length >= 1)
      return (
        <div style={{alignItems: 'center', display:'flex', justifyContent:'center'}}>
          <img src="img/bg_dragon.png" width={30} height ={30} />
        </div>
      );
  };

  const monthCellRender = (value) => {
    return;
  };
  return (
    <>
      {/* <HeaderBlock>
        <h2 style={{ color: "#2196F3" }}>{value}</h2>
      </HeaderBlock> */}
      <Divider />
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
        <AddList
          setContent={setContent}
          setTitle={setTitle}
          title={title}
        ></AddList>
      </Modal>
    </>
  );
};

export default mCalendar;
