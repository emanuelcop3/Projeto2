// Componentes importados
import React from "react";
import Image from "next/image";
import 'antd/dist/antd.css'; 
import Link from 'next/link';

import {
  Row,
  Col,
  Card,
  Space,
  Divider,
  Button,
  Heading,
  Form,
  Input,
  Checkbox,
  Typography,
  Avatar,
} from "antd";

import { UserOutlined, LockOutlined } from '@ant-design/icons'

const { Title } = Typography;

//Importação de background css e size
import background from "../../public/img/backgroundLogin.png";
import SizeContext from "antd/lib/config-provider/SizeContext";

export default function LoginPage() {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Row style={{ display: "flex" }}>
      <Col
        style={{
          backgroundImage: "url(/img/backgroundLogin.png)",
          backgroundRepeat: "no-repeat",
          height: "100vh",
          backgroundSize: "contain",
          width: "50vw",
        }}
      >
       
      </Col>
      <Col>
        <Row
          style={{
            width: "45vw",
            backgroundImage: "url(/img/imageG.png)",
            backgroundRepeat: "no-repeat",
            height: "30vh",
            backgroundSize: "contain",
            backgroundPosition: "right top",
          }}
        ></Row>
        <Row justify='center' style={{display:'flex'}}>
          <Title level={1}>Login</Title>
        </Row>
        <Row justify='center'>
          <Col span={15}>
            <Form
              form={form}
              size="large"
              name="basic"
              layout="vertical"
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              
              <Title level={5}>Nome de Usuário</Title>
              <Form.Item
                name="username"
                rules={[
                  {
                    required: true,
                    message: "Por favor, digite seu nome de usuário",
                  },
                ]}
              > <Row>
                
                <Input prefix={<UserOutlined />}/>
              </Row>
              </Form.Item>
           
              
              <Title level={5}>Senha</Title>
              <Form.Item
                name="password"
                rules={[
                  { required: true, message: "Por favor, digite sua senha" },
                ]}
              >
                <Input.Password prefix={<LockOutlined/>}/>
              </Form.Item>
              <Form.Item name="remember" valuePropName="checked">
                <Checkbox>Lembrar de mim</Checkbox>
              </Form.Item>
              <Row style= {{justifyContent:'end'}}>
              <Form.Item>
                <Button type="primary" htmlType="submit" style={{borderRadius:'20px', backgroundColor:'green', border:'none', width:'100px'}} size='large'>
                 <Link href="/dashboard">Entrar</Link>
                </Button>
              </Form.Item>
              </Row>
              
            </Form>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
