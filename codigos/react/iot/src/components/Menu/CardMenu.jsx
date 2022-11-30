// Criação do menu principal 
import React, { Fragment } from "react";
import Styles from "./Menu.module.css";
import { Typography, Row, Col, Avatar } from "antd";
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import OpacityOutlinedIcon from '@mui/icons-material/OpacityOutlined';

const { Title, Text } = Typography;

export default function CardMenu({ icon, heading, tempText, humiText, alert, date }) {
  return (
    <Fragment>
      <Row>
        <Col span={20}>
          <div className={Styles.icon && Styles.container}>{icon}</div>
          <Row justify='center'><Title level={4}>{heading}</Title></Row>
          <Row style = {{justifyContent:'center'}}><DeviceThermostatIcon/><Text style={{fontSize:'16pt'}}>{tempText}</Text></Row>
          <Row style = {{justifyContent:'center'}}><OpacityOutlinedIcon/><Text style={{fontSize:'16pt'}}>{humiText}</Text></Row>
          <Row style = {{justifyContent:'center'}}><Text>{date}</Text></Row>
        </Col>
        <Col span={4}>
          {alert}
        </Col>
      </Row>
    </Fragment>
  );
}
