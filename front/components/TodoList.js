import { Checkbox, Card } from "antd";
import { useState } from "react";
import { DeleteFilled, DeleteOutlined } from "@ant-design/icons";
import styled from "styled-components";

const todos = [
  {
    id: 0,
    content: "프로젝트 생성하기",
    done: true,
  },
  {
    id: 1,
    content: "컴포넌트 스타일링하기",
    done: true,
  },
  {
    id: 2,
    content: "Context 만들기",
    done: false,
  },
  {
    id: 3,
    content: "기능 구현하기",
    done: false,
  },
];

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

const TodoList = () => {
  const [tasks, setTasks] = useState(todos);
  const onChange = (index, e) => {
    setTasks([...tasks, (tasks[index].done = !tasks[index].done)]);
  };
  const onDelete = (id, e) => {
    setTasks(tasks.filter(task=>task.id !== id));
  };
  return (
    <>
      <HeaderBlock>
        <h2 style={{ color: "#2196F3" }}>할 일</h2>
      </HeaderBlock>
      {tasks.map((task, index) =>
        task.done === false ? (
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
        task.done === true ? (
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
