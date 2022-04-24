import PropTypes from "prop-types";
import { useState } from "react";
import Link from "next/link";
import CustomCalendar from "./CustomCalendar";
import TodoList from "./TodoList";
import { Input, Menu, Row, Col, Anchor } from "antd";
import { ConfigProvider } from "antd";
import kor from "antd/lib/locale/ko_KR";

const { link } = Anchor;
const todos = [
  {
    id: 0,
    date: "2022-04-24",
    content: "프로젝트 생성하기",
    done: true,
  },
  {
    id: 1,
    date: "2022-04-24",
    content: "컴포넌트 스타일링하기",
    done: true,
  },
  {
    id: 2,
    date: "2022-04-24",
    content: "Context 만들기",
    done: false,
  },
  {
    id: 3,
    date: "2022-04-24",
    content: "기능 구현하기",
    done: false,
  },
  ,
  {
    id: 4,
    date: "2022-04-25",
    content: "기능 구현하기",
    done: true,
  },
  ,
  {
    id: 5,
    date: "2022-04-25",
    content: "밥먹기",
    done: false,
  },
];

const AppLayout = ({ children }) => {
  const [tasks, setTasks] = useState(todos);
  const [date, setDate] = useState('');
  return (
    <ConfigProvider locale={kor}>
      <Menu mode="horizontal">
        <Menu.Item>
          <Link href="/">
            <a>노드버드</a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/profile">
            <a>프로필</a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/signup">
            <a>회원가입</a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Input.Search enterButton style={{ verticalAlign: "middle" }} />
        </Menu.Item>
      </Menu>
      <Row gutter={30}>
        <Col xs={24} md={16}>
          <CustomCalendar tasks={tasks} setDate={setDate} />
        </Col>
        <Col xs={24} md={8}>
          <Anchor>
            <TodoList date={date} tasks={tasks} setTasks={setTasks}/>
          </Anchor>
        </Col>
      </Row>
    </ConfigProvider>
  );
};

AppLayout.PropTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
