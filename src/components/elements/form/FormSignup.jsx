import React from 'react'
import {Form,Row,Col,Input,Upload,Button} from 'antd'
import {UserOutlined,MailOutlined,LockOutlined,EyeOutlined,EyeInvisibleOutlined,UploadOutlined} from '@ant-design/icons'

function FormSignup({isLoading,onFinish,onChange}) {
  return (
    <Form onFinish={onFinish}>
        <Row>
            <Col span={12} className='px-2'>
                <Form.Item
                    required={false}
                    name="name"
                    rules={[
                        {
                          required: true,
                          message: "Name is a required field",
                        },
                    ]}
                >
                    <Input placeholder='Enter your name' size='large' className='py-2' prefix={<UserOutlined className='fs-5 text-secondary'/>} />
                </Form.Item>
            </Col>
            <Col span={12} className='px-2'>
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
                    <Input placeholder='Enter your email address' size='large' className='py-2' prefix={<MailOutlined className='fs-5 text-secondary'/>} />
                </Form.Item>
            </Col>
            <Col span={12} className='px-2'>
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
                        placeholder="Enter password"
                        size='large'
                        className='py-2'
                        prefix={<LockOutlined className='fs-5 text-secondary'/>}
                        iconRender={(visible) => (visible ? <EyeOutlined /> : <EyeInvisibleOutlined />)}
                    />
                </Form.Item>
            </Col>
            <Col span={12} className='px-2'>
                <Form.Item
                    required={false}
                    name="confirmPassword"
                    rules={[
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                              if (!value || getFieldValue("password") === value) {
                                return Promise.resolve();
                              }
                              return Promise.reject(
                                new Error(
                                  "The password that you entered do not match!"
                                )
                              );
                            },
                          }),
        
                    ]}
                >
                    <Input.Password
                        placeholder="Confirm password"
                        size='large'
                        className='py-2'
                        prefix={<LockOutlined className='fs-5 text-secondary'/>}
                        iconRender={(visible) => (visible ? <EyeOutlined /> : <EyeInvisibleOutlined />)}
                    />
                </Form.Item>
            </Col>
            <Upload
                listType="picture"
                maxCount={1}
                beforeUpload={() => false}
                className='mb-3'
                accept='.jpg,.jpeg,.png'
                // onChange={(info) => setImages(info.file)}
                onChange={onChange}
            >
                <Button className='ms-2' icon={<UploadOutlined />}>Upload</Button>
            </Upload>
        </Row>
        <Button htmlType='submit' type='primary' size='large' className='fw-bold' block>
            {isLoading ? (
                <span className="spinner-border spinner-border-sm" />
            ) : (
                "Daftar"
            )}
        </Button>
    </Form>
  )
}

export default FormSignup