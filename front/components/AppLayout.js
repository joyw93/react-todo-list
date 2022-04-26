import PropTypes from "prop-types";
import { useState } from "react";
import Link from "next/link";
import Statistic from "./Statistic";
import CustomCalendar from "./CustomCalendar";
import TodoList from "./TodoList";
import moment from "moment";
import { Input, Menu, Row, Col, Anchor } from "antd";
import { ConfigProvider } from "antd";
import kor from "antd/lib/locale/ko_KR";

const { link } = Anchor;
const todos = [
  {
    id: 0,
    date: "2022-04-24",
    title: "컴포넌트 스타일링하기",
    content: "프로젝트 생성하기",
    done: true,
  },
  {
    id: 1,
    date: "2022-04-24",
    title: "프로젝트 생성하기",
    content: "컴포넌트 스타일링하기",
    done: true,
  },
  {
    id: 2,
    date: "2022-04-24",
    title: "Context 만들기",
    content: "Context 만들기",
    done: false,
  },
  {
    id: 3,
    date: "2022-04-24",
    title: "기능 구현하기",
    content: "기능 구현하기",
    done: false,
  },
  {
    id: 4,
    date: "2022-04-25",
    title: "뷰 공부하기",
    content: "기능 구현하기",
    done: true,
  },
  {
    id: 5,
    date: "2022-04-25",
    title: "밥먹기",
    content: "밥먹기",
    done: false,
  },
  {
    id: 6,
    date: "2022-04-06",
    title: "뷰 공부하기",
    content: "밥먹기",
    done: true,
  },
  {
    id: 7,
    date: "2022-04-13",
    title: "리액트 공부하기",
    content: "밥먹기",
    done: true,
  },
  {
    id: 8,
    date: "2022-04-11",
    title: "리덕스 공부하기",
    content: "밥먹기",
    done: false,
  },
  {
    id: 9,
    date: "2022-04-24",
    title: "프로젝트 하기",
    content: "컴포넌트 스타일링하기",
    done: true,
  },
];

const AppLayout = ({ children }) => {
  const [tasks, setTasks] = useState(todos);
  const [date, setDate] = useState(moment().format("YYYY-MM-DD"));
  const [month, setMonth] = useState(moment().format("MM"));
  const [day, setDay] = useState(moment().format("DD"));

  return (
    <ConfigProvider locale={kor}>
      <nav style={{ backgroundColor: "#009688", height: "100px" }}>
        <div
          style={{
            color: "white",
            fontSize: "20px",
            textAlign: "center",
            marginRight: "60px",
          }}
        >
          {month}
        </div>
        <div
          style={{
            color: "white",
            marginRight: "60px",
            fontSize: "40px",
            textAlign: "center",
            fontWeight: "bold",
            marginBottom: "15px",
          }}
        >
          {day}
        </div>
      </nav>
      <div style={{ backgroundColor: "#EEEEEE", height: "100vh" }}>
        <Row gutter={30}>
          <Col xs={24} md={6}>
            <Statistic date={date} tasks={tasks} />
          </Col>
          <Col xs={24} md={10}>
            <CustomCalendar
              setMonth={setMonth}
              setDay={setDay}
              setTasks={setTasks}
              tasks={tasks}
              setDate={setDate}
            />
          </Col>
          <Col xs={24} md={8}>
            <TodoList date={date} tasks={tasks} setTasks={setTasks} />
          </Col>
        </Row>
      </div>
    </ConfigProvider>
  );
};

AppLayout.PropTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
