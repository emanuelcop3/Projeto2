// Importação de componentes para criação  do dasboard central
import React, { Fragment, useState, useEffect } from "react";
import Image from "next/image";
import "antd/dist/antd.css";
import { AntDesignOutlined, UserOutlined } from "@ant-design/icons";
import { GiGreenhouse } from "react-icons/gi";

import {Row, Col, Card, Space, Divider, Button, Heading, Form, Input, Checkbox, Typography, Avatar, Radio} from "antd";






import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";
import OpacityOutlinedIcon from "@mui/icons-material/OpacityOutlined";



import { Navbar } from "../components/Navbar";

const { Title, Text } = Typography;

import LineChart from "./Graph";

export default function DashboardCentral() {
  const [value, setValue] = useState(1);
  const [button1, setButton1] = useState(false);
  const [button2, setButton2] = useState(false);
  const [button3, setButton3] = useState(false);
  var id = "14bpB3xWiXSKLvj0G98KrihitnDrFBWzCa9LvV2oOv_Y";
  var gid = "0";
  var url = "https://docs.google.com/spreadsheets/d/" + id + "/gviz/tq?tqx=out:json&tq&gid=" + gid;

  fetch(url)
    .then((response) => response.text())
    .then((data) => myItems(data.slice(47, -2)));

  function myItems(jsonString) {
    var json = JSON.parse(jsonString);
    const lastRegister = json.table.rows[json.table.rows.length - 1];
    console.log(lastRegister);
    //console.log(lastRegister.c[0].v); //Dado de Registro da Data
    //console.log(lastRegister.c[1].v); //Dado de Registro da Hora
    //console.log(lastRegister.c[2].v); //Dado de Registro do Dispositivo
    //console.log(lastRegister.c[3]); //Dado de Registo da Temperatura
    //console.log(lastRegister.c[4].v); //Dado de Registro da Umidade

    json.table.cols[0].label = "Data";
    json.table.cols[1].label = "Hora";
    json.table.cols[2].label = "Dispositivo";
    json.table.cols[3].label = "Temperatura";
    json.table.cols[4].label = "Umidade";

    document.getElementById("Data").innerHTML = lastRegister.c[0].v;
    document.getElementById("valorTemperatura").innerHTML = lastRegister.c[3].v;
    document.getElementById("valorUmidade").innerHTML = lastRegister.c[4].v;

  }


  const onChange = (e) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  const btn1 = () => {setButton1(true) && setButton2(false) && setButton3(false)}
  const btn2 = () => {setButton2(true) && setButton1(false) && setButton3(false)}
  const btn3 = () => {setButton3(true) && setButton2(false) && setButton1(false)}

  const buttonMessage = () => {
    console.log(value)
    if(button1){
      if(value == 1){
        window.location.href = 'https://api.whatsapp.com/send/?phone=5515997165061&text=Ol%C3%A1%20Analista%20de%20Dados,%20a%20temperatura%20esta%20acima%20do%20esperado,%20por%20favor%20abra%20as%20Janelas%20Laterais%20em%2050%&type=phone_number&app_absent=0'
      }
      else if(value == 2){
        window.location.href = 'https://api.whatsapp.com/send/?phone=5515997165061&text=Ol%C3%A1%20Analista%20de%20Dados,%20a%20temperatura%20esta%20acima%20do%20esperado,%20por%20favor%20abra%20as%20Janelas%20Laterais%20em%20100%&type=phone_number&app_absent=0'
      }
      else if(value == 3){
        window.location.href = 'https://api.whatsapp.com/send/?phone=5515997165061&text=Ol%C3%A1%20Analista%20de%20Dados,%20a%20temperatura%20esta%20acima%20do%20esperado,%20por%20favor%20abra%20Ambas%20as%20Janelas&type=phone_number&app_absent=0'
      }
    }
    else if(button2){
      if(value == 1){
        window.location.href = 'https://api.whatsapp.com/send/?phone=5515997165061&text=Ol%C3%A1%20Supervisor,%20a%20temperatura%20esta%20acima%20do%20esperado,%20por%20favor%20abra%20as%20Janelas%20Laterais%20em%2050%&type=phone_number&app_absent=0'
      }
      else if(value == 2){
        window.location.href = 'https://api.whatsapp.com/send/?phone=5515997165061&text=Ol%C3%A1%20Supervisor,%20a%20temperatura%20esta%20acima%20do%20esperado,%20por%20favor%20abra%20as%20Janelas%20Laterais%20em%20100%&type=phone_number&app_absent=0'
      }
      else if(value == 3){
        window.location.href = 'https://api.whatsapp.com/send/?phone=5515997165061&text=Ol%C3%A1%20Supervisor,%20a%20temperatura%20esta%20acima%20do%20esperado,%20por%20favor%20abra%20as%20Ambas%20Janelas&type=phone_number&app_absent=0'
      }
    }
    else if(button3){
      if(value == 1){
        window.location.href = 'https://api.whatsapp.com/send/?phone=5515997165061&text=Ol%C3%A1%20Coordenador,%20a%20temperatura%20esta%20acima%20do%20esperado,%20por%20favor%20abra%20as%20Janelas%20Laterais%20em%2050%&type=phone_number&app_absent=0'
      }
      else if(value == 2){
        window.location.href = 'https://api.whatsapp.com/send/?phone=5515997165061&text=Ol%C3%A1%20Coordenador,%20a%20temperatura%20esta%20acima%20do%20esperado,%20por%20favor%20abra%20as%20Janelas%20Laterais%20em%20100%&type=phone_number&app_absent=0'
      }
      else if(value == 3){
        window.location.href = 'https://api.whatsapp.com/send/?phone=5515997165061&text=Ol%C3%A1%20Coordenador,%20a%20temperatura%20esta%20acima%20do%20esperado,%20por%20favor%20abra%20as%20Ambas%20Janelas&type=phone_number&app_absent=0'
      }
    }
    
  }

  

  return (
    <Fragment>
      <Navbar />
      <Row style={{backgroundColor:'#eeeeee'}}>
        <Col span={18} style={{ padding: 30 }}>
        <div style={{ height: "70vh", overflowY: "scroll", justifyContent:'center' }}>
          <Row style={{ justifyContent:'center', marginTop: '5%' }}>
          <Card
              style={{
                backgroundColor: "#fff",
                border: "solid 1pt rgb(133, 133, 133)",
                borderRadius: "20pt",
                width: "60%",
                height:'45vh'
              }}
              bordered="true"
            >
              <Row align="bottom" justify="center">
                <Space direction="horizontal">
                  <GiGreenhouse style={{ fontSize: "28pt" }} />
                  <Title level={1}>Casa de Vegetação 1</Title>
                </Space>
              </Row>
              <Row align="middle" justify="center">
                <Col>
                  <Row alignment="middle">
                    <Col>
                      <DeviceThermostatIcon
                        style={{ fontSize: "32pt", marginTop: "20%" }}
                      />
                    </Col>
                    <Col>
                      <div style={{ fontSize: "32pt" }} id="valorTemperatura">
                        json here
                      </div>
                    </Col>
                  </Row>
                  <Row alignment="middle">
                    <OpacityOutlinedIcon
                      style={{ fontSize: "32pt", marginTop: "5%" }}
                    />
                    <div style={{ fontSize: "32pt" }} id="valorUmidade">
                      json here
                    </div>
                  </Row>
                </Col>
              </Row>
              <Row align="center" justify="center">
                <Text>
                  <div id="Data">json here</div>
                </Text>
              </Row>
          </Card>
          </Row>
          <Row style={{ justifyContent:'center', marginTop: '5%'}}>
            <LineChart/>
          </Row>
        </div>
        </Col>
        <Col span={6} style={{ padding: 10 }}>
        <Button type='primary'>
              <a href='https://docs.google.com/spreadsheets/d/e/2PACX-1vS1sP6LLgjoICM46MoHSrlDRXokvGccjPsprD7voHeJab5DZqV7iszh6ZFz28IUoeBDdS30rDvVYmhY/pub?output=csv' target='_blank'>Download CSV</a>
          </Button>
          <Space direction="vertical">
            <Row></Row>
            <Card bordered="true">
              <Title level={4}>Seleção da Abertura</Title>
              <Radio.Group onChange={onChange} value={value}>
                <Space direction='vertical' size={5}>
                <Radio size ='large' value={1} style={{textJustify:'left'}}>Abrir 50% das Janelas Laterais.</Radio>
                <Radio size ='large' value={2} style={{textJustify:'left'}}>Abrir 100% das Janelas Laterais.</Radio>
                <Radio size ='large' value={3} style={{textJustify:'left'}}>Abrir todas as Janelas.</Radio>
                </Space>
              </Radio.Group>
            </Card>
            <Card bordered="true">
              <Title level={4}>Seleção de Contato</Title>
              <Space direction="vertical" size={5}>
              <Row>
                <Button onClick={btn1} type='default' style={{width:'19vw', height:'30%'}}>
                <Space direction="horizontal" size={10}>
                  <Col style={{textAlign:'left'}}>
                    <Avatar
                      size={50}
                      icon={<UserOutlined />}
                    />
                  </Col>
                  <Col style={{textAlign:'left'}}>
                      <Title style={{ margin: 0 }} level={5}>Nome Sobrenome</Title>
                      <Text style={{ margin: 0, fontSize: '11pt'}}>Numero</Text>
                      <br></br>
                      <Text>Analista de Dados</Text>
                  </Col>                  
                </Space>
                </Button>
              </Row>
              <Row>
                <Button onClick={btn2} type='default' style={{width:'19vw', height:'30%'}}>
                <Space direction="horizontal" size={10}>
                  <Col style={{textAlign:'left'}}>
                    <Avatar
                      size={50}
                      icon={<UserOutlined />}
                    />
                  </Col>
                  <Col style={{textAlign:'left'}}>
                      <Title style={{ margin: 0 }} level={5}>Nome Sobrenome</Title>
                      <Text style={{ margin: 0, fontSize: '11pt'}}>Numero</Text>
                      <br></br>
                      <Text>Supervisor</Text>
                  </Col>                  
                </Space>
                </Button>
              </Row>
              <Row>
                <Button onClick={btn3} type='default' style={{width:'19vw', height:'30%'}}>
                <Space direction="horizontal" size={10}>
                  <Col style={{textAlign:'left'}}>
                    <Avatar
                      size={50}
                      icon={<UserOutlined />}
                    />
                  </Col>
                  <Col style={{textAlign:'left'}}>
                      <Title style={{ margin: 0, textJustify:'left' }} level={5}>Nome Sobrenome</Title>
                      <Text style={{ margin: 0, fontSize: '11pt', textJustify:'left'}}>Numero</Text>
                      <br></br>
                      <Text style={{textJustify:'left'}}>Coordenador</Text>
                  </Col>                  
                </Space>
                </Button>
              </Row>
              <Row style={{justifyContent:'end'}}>
                <Button type='primary' onClick={buttonMessage}>
                  Enviar Mensagem
                </Button>
              </Row>
              </Space>
            </Card>
          </Space>
        </Col>
      </Row>
    </Fragment>
  );
}



