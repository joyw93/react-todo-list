import { Checkbox, Card } from "antd";
import { useState } from "react";
import { DeleteFilled, DeleteOutlined } from "@ant-design/icons";
import styled from "styled-components";

const { Meta } = Card;

const TodoBlock = styled.div`
  height: 30px;
`;

const BoxBlock = styled.span`
  font-size: 18px;
`;

const ContentBlock = styled.span`
  margin-left: 10px;
  font-size: 18px;
`;

const IconBlock = styled.span`
  float: right;
  margin-right: 20px;
  font-size: 18px;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
`;

const HeaderBlock = styled.h2`
  margin-top: 30px;
  margin-left: 15px;
  color: #2196f3;
`;

const TodoList = ({ tasks, setTasks, date }) => {
  const onChange = (index, e) => {
    const _tasks = [...tasks];
    _tasks[index].done = !_tasks[index].done
    setTasks(_tasks)
  };
  const onDelete = (id, e) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  return (
    <>
      <HeaderBlock>
        <h2 style={{ color: "#2196F3" }}>할 일</h2>
      </HeaderBlock>
      {tasks.map((task, index) =>
        task.done === false && task.date == date ? (
          <Card hoverable className="todo">
            <BoxBlock>
              <Checkbox
                checked={false}
                onChange={(e) => {
                  onChange(index, e);
                }}
              />
            </BoxBlock>
            <ContentBlock key={index}>{task.content}</ContentBlock>
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
      <HeaderBlock>
        <h2 style={{ color: "#2196F3" }}>완료 한 항목</h2>
      </HeaderBlock>
      {tasks.map((task, index) =>
        task.done === true && task.date == date ? (
          <Card hoverable className="todo">
            <BoxBlock>
              <Checkbox
                checked={true}
                onChange={(e) => {
                  onChange(index, e);
                }}
              />
            </BoxBlock>
            <ContentBlock key={index}>{task.content}</ContentBlock>
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
    </>
  );
};

export default TodoList;
