import React from 'react'
import {Form,Button,Input} from 'antd'
import {MailOutlined,LockOutlined,EyeOutlined,EyeInvisibleOutlined} from '@ant-design/icons'

function FormSignin({isLoading,onFinish}) {
  return (
    <Form onFinish={onFinish}>
        <Form.Item
            required={false}
            name="email"
            rules={[
                {
                  required: true,
                  message: "Email is a required field",
                },
            ]}
        >
            <Input placeholder='Email' size='large' className='py-2' prefix={<MailOutlined className='fs-5 text-secondary'/>} />
        </Form.Item>
        <Form.Item
            required={false}
            name="password"
            rules={[
                {
                  required: true,
                  message: "Passwprd is a required field",
                },
            ]}
        >
            <Input.Password
                placeholder="Password"
                size='large'
                className='py-2'
                prefix={<LockOutlined className='fs-5 text-secondary'/>}
                iconRender={(visible) => (visible ? <EyeOutlined /> : <EyeInvisibleOutlined />)}
            />
        </Form.Item>
        <Button htmlType='submit' type='primary' size='large' className='fw-bold' block>
            {isLoading ? (
                <span className="spinner-border spinner-border-sm" />
            ) : (
                "Masuk"
            )}
        </Button>
    </Form>
  )
}

export default FormSignin