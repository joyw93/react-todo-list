import { Checkbox, Card, notification } from "antd";
import { useState, useEffect } from "react";
import Empty from "./Empty";
import { DeleteFilled, DeleteOutlined, SmileOutlined } from "@ant-design/icons";
import styled from "styled-components";

const { Meta } = Card;

const TodoBlock = styled.div`
  height: 30px;
`;

const BoxBlock = styled.span`
  font-size: 18px;
`;

const ContentBlock = styled.span`
  margin-left: 15px;
  font-size: 18px;
  font-weight: bold;
  color: #757575;
`;

const IconBlock = styled.span`
  float: right;
  margin-right: 10px;
  font-size: 18px;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
`;

const HeaderBlock = styled.h2`
  margin-top: 30px;
  margin-left: 10px;
  color: #2196f3;
`;

const TodoList = ({ tasks, setTasks, date }) => {
  const dones = tasks.filter((task) => task.done == true && task.date == date);
  const undones = tasks.filter(
    (task) => task.done == false && task.date == date
  );
  const [memory, setMemory] = useState(0);

  const openNotification = () => {
    notification.open({
      message: "축하합니다!",
      description: "계획을 모두 완료했어요! 오늘 하루도 고생 많았어요.",
      icon: <SmileOutlined style={{ color: "#108ee9" }} />,
    });
  };

  if (memory == 1 && undones.length == 0) {
    openNotification();
    setMemory(0);
  }

  const onChange = (task, e) => {
    setTasks(
      tasks.map((item) =>
        item.id === task.id ? { ...item, done: !item.done } : item
      )
    );
    if (undones.length == 1) {
      setMemory(1);
    }
  };
  const onDelete = (id, e) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const onClickCard = (task, e) => {
    console.log(task);
  };
  return (
    <>
      <Card style={{ marginTop: "50px", marginRight: "40px", height: "100%" }}>
        <HeaderBlock>
          <h2 style={{ color: "#26A69A" }}>Todo</h2>
        </HeaderBlock>
        {undones.length === 0 ? <Empty></Empty> : null}
        {tasks.map((task, index) => {
          return task.done === false && task.date == date ? (
            <Card
              style={{ marginBottom: "15px" }}
              hoverable
              className="todo"
              onClick={(e) => {
                onClickCard(task, e);
              }}
            >
              <BoxBlock>
                <Checkbox
                  checked={false}
                  onChange={(e) => {
                    onChange(task, e);
                  }}
                />
              </BoxBlock>
              <ContentBlock key={index}>{task.title}</ContentBlock>
              <IconBlock>
                <DeleteOutlined
                  onClick={(e) => {
                    onDelete(task.id, e);
                  }}
                />
              </IconBlock>
            </Card>
          ) : null;
        })}
        <HeaderBlock>
          <h2 style={{ color: "#26A69A", marginTop: "20px" }}>Done</h2>
        </HeaderBlock>
        {dones.length === 0 ? <Empty></Empty> : null}
        {tasks.map((task, index) =>
          task.done === true && task.date == date ? (
            <Card
              style={{ marginBottom: "15px" }}
              hoverable
              className="todo"
              onClick={(e) => {
                onClickCard(task, e);
              }}
            >
              <BoxBlock>
                <Checkbox
                  checked={true}
                  onChange={(e) => {
                    onChange(task, e);
                  }}
                />
              </BoxBlock>
              <ContentBlock key={index}>{task.title}</ContentBlock>
              <IconBlock>
                <DeleteOutlined
                  onClick={(e) => {
                    onDelete(task.id, e);
                  }}
                />
              </IconBlock>
            </Card>
          ) : null
        )}
      </Card>
    </>
  );
};

export default TodoList;
