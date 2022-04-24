import PropTypes from "prop-types";
import Link from "next/link";
import CustomCalendar from "./CustomCalendar";
import TodoList from "./TodoList";
import { Input, Menu, Row, Col, Anchor } from "antd";

const { link } = Anchor;

const AppLayout = ({ children }) => {
  return (
    <>
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
          <CustomCalendar />
        </Col>
        <Col xs={24} md={8}>
          <Anchor>
            <TodoList />
          </Anchor>
        </Col>
      </Row>
    </>
  );
};

AppLayout.PropTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
