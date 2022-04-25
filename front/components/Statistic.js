import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Form, Input, Button, Radio, Progress, Divider, Tag } from "antd";

const HeaderBlock2 = styled.h2`
  margin-top: 30px;
  text-align: center;
`;

const HeaderBlock3 = styled.h3`
  margin-top: 30px;
  margin-left: 30px;
`;

const GraphBlock = styled.div`
  text-align: center;
  margin-top: 50px;
`;

const ProgressBlock = styled.div``;

const Statistic = ({ tasks, date }) => {
  const dones = tasks.filter((task) => task.done == true && task.date == date);
  const undones = tasks.filter(
    (task) => task.done == false && task.date == date
  );

  return (
    <>
      {/* <HeaderBlock2>
        <h2 style={{ color: "#2196F3", fontWeight: "bold" }}>리포트</h2>
      </HeaderBlock2> */}
      <Divider />
      <HeaderBlock3>
        <h3 style={{ fontSize: "17px", fontWeight: "bold" }}>
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
      <div style={{ marginTop: "50px", marginLeft: "30px" }}>
        <Tag color="#F9A825">전체</Tag>
        <span
          style={{ fontSize: "20px", fontWeight: "bold", marginLeft: "5px" }}
        >
          {undones.length+dones.length}개
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
      <div style={{ marginTop: "10px", marginLeft: "30px" }}>
        <Tag color="#9C27B0">완료</Tag>
        <span
          style={{ fontSize: "20px", fontWeight: "bold", marginLeft: "5px" }}
        >
          {dones.length}개
        </span>
      </div>
      <Divider />

      <div
        style={{ marginTop: "70px", marginLeft: "30px", textAlign: "center" }}
      >
        <Progress
          strokeColor={{
            "0%": "#F9A825",
            "100%": "#F9A825",
          }}
          percent={100}
        />
        <Progress
          strokeColor={{
            "0%": "#108ee9",
            "100%": "#108ee9",
          }}
          percent={Math.ceil((undones.length / (undones.length + dones.length)) * 100)}
          status="active"
        />
        <Progress
          strokeColor={{
            "0%": "#9C27B0",
            "100%": "#9C27B0",
          }}
          percent={Math.ceil((dones.length / (undones.length + dones.length)) * 100)}
        />
      </div>
    </>
  );
};

export default Statistic;
