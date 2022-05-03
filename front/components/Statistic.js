import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  Form,
  Input,
  Button,
  Radio,
  Progress,
  Divider,
  Tag,
  Card,
  Statistic,
  Row,
  Col,
} from "antd";

const HeaderBlock2 = styled.h2`
  margin-top: 10px;
  text-align: center;
`;

const HeaderBlock3 = styled.h3`
  margin-top: 15px;
  margin-left: 30px;
`;

const GraphBlock = styled.div`
  text-align: center;
  margin-top: 30px;
  margin-bottom: 30px;
`;

const ProgressBlock = styled.div``;

const mStatistic = ({ tasks, date }) => {
  const donesTotal = tasks.filter((task) => task.done == true);
  const dones = tasks.filter((task) => task.done == true && task.date == date);
  const undones = tasks.filter(
    (task) => task.done == false && task.date == date
  );

  return (
    <>
      <Card
        style={{
          marginTop: "40px",
          marginLeft: "40px",
          height: "100%",
          boxShadow: "0 5px 18px -7px rgba(0,0,0,1)",
          borderRadius: "20px",
          display: "flex",
        }}
      >
        {/* <HeaderBlock2>
        <h2 style={{ color: "#2196F3", fontWeight: "bold" }}>리포트</h2>
      </HeaderBlock2> */}

        <HeaderBlock3>
          <h3
            style={{ fontSize: "20px", fontWeight: "bold", color: "#26A69A" }}
          >
            일일계획 달성률
          </h3>
        </HeaderBlock3>
        <Divider />
        <GraphBlock>
          <Progress
            type="circle"
            strokeColor={{
              "0%": "#87d068",
              "100%": "#108ee9",
            }}
            percent={Math.ceil(
              (dones.length / (dones.length + undones.length)) * 100
            )}
          />
        </GraphBlock>
        <Divider style={{ marginTop: "15px" }} />
        <div style={{ marginTop: "40px", marginLeft: "30px" }}>
          <Tag color="#4CAF50">전체</Tag>
          <span
            style={{ fontSize: "20px", fontWeight: "bold", marginLeft: "5px" }}
          >
            {undones.length + dones.length}개
          </span>
        </div>
        <div style={{ marginTop: "10px", marginLeft: "30px" }}>
          <Tag color="#108ee9">진행</Tag>
          <span
            style={{ fontSize: "20px", fontWeight: "bold", marginLeft: "5px" }}
          >
            {undones.length}개
          </span>
        </div>
        <div
          style={{
            marginTop: "10px",
            marginLeft: "30px",
            marginBottom: "40px",
          }}
        >
          <Tag color="#9C27B0">완료</Tag>
          <span
            style={{ fontSize: "20px", fontWeight: "bold", marginLeft: "5px" }}
          >
            {dones.length}개
          </span>
        </div>
        <Divider />

        <div
          style={{
            marginBottom: "30px",
            marginTop: "30px",
            marginLeft: "30px",
            textAlign: "center",
          }}
        >
          <Progress
            strokeColor={{
              "0%": "#4CAF50",
              "100%": "#4CAF50",
            }}
            percent={100}
          />
          <Progress
            strokeColor={{
              "0%": "#108ee9",
              "100%": "#108ee9",
            }}
            percent={Math.ceil(
              (undones.length / (undones.length + dones.length)) * 100
            )}
            status="active"
          />
          <Progress
            strokeColor={{
              "0%": "#9C27B0",
              "100%": "#9C27B0",
            }}
            percent={Math.ceil(
              (dones.length / (undones.length + dones.length)) * 100
            )}
          />
        </div>
        <Divider />
        <Row>
          <Col md={12}>
            <Statistic title="누적 완료 계획" value={donesTotal.length} />
          </Col>
          
        </Row>
      </Card>
    </>
  );
};

export default mStatistic;
