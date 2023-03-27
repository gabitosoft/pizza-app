import React, { Component } from 'react'
import { Button, Form, Input } from 'antd'

export default class SignIn extends Component {
  onFinish = () => {
    console.log('On Finish - Login!')
  }

  render () {
    return (
      <Form name="login" onFinish={this.onFinish}>
        <Form.Item style={{ textAlign: 'center' }}>
          <img alt="Login" src="./assets/user-auth.png" />
        </Form.Item>
        <Form.Item 
          name="username" 
          rules={[ 
            {required: true, message: 'Ingrese nombre usuario'} 
          ]}>
          <Input placeholder="Nombre de usuario"/>
        </Form.Item>
        <Form.Item
          name="password"
          rules={[ 
            {required: true, message: 'Ingrese su contrasena'} 
          ]}>
          <Input.Password placeholder="Contrasena"/>
        </Form.Item>
        <Form.Item><Button type="primary" block htmlType="submit">Login</Button></Form.Item>
      </Form>
    )
  }
}