import React from 'react'
import {Link} from 'react-router-dom'
import {
  Typography,
  Card,
  Col,
  Row,
  Form,
  Input,
  Upload,
  Button
} from 'antd'
import {
  MailOutlined,
  EyeInvisibleOutlined,
  EyeOutlined,
  LockOutlined,
  UserOutlined,
  UploadOutlined
} from '@ant-design/icons'
import "./style.scss"
const {Title} = Typography



function SignUp({
  // props useState
  contextHolder,
  setImages,
  isLoading,
  // props function
  onRegistered,
}) {

  return (
    <div className='register'>
      {contextHolder}
      <div className='row'>
        <div className='col-6 left'>
          <Title level={1} className='fw-bold mt-4 ms-5 text-muted'>Ngobrol <span style={{color: "#00b96b"}}>YUK</span></Title>
        </div>
        <div className='col-6 right d-flex justify-content-center align-items-center'>
          <div style={{height: "550px", width: "100%"}}>
          <Card
            className='shadow-lg mx-3'
            style={{height: "100%", borderRadius: "25px"}}
            bordered
          >
            <Title className='text-center fw-bold text-secondary mb-5' level={2}>Daftar</Title>
            <Form onFinish={onRegistered}>
              <Row>
                <Col span={12} className='px-2'>
                  <Form.Item
                    required={false}
                    name="name"
                  >
                    <Input placeholder='Enter your name' size='large' className='py-2' prefix={<UserOutlined className='fs-5 text-secondary'/>} />
                  </Form.Item>
                </Col>
                <Col span={12} className='px-2'>
                  <Form.Item
                    required={false}
                    name="email"
                  >
                    <Input placeholder='Enter your email address' size='large' className='py-2' prefix={<MailOutlined className='fs-5 text-secondary'/>} />
                  </Form.Item>
                </Col>
                <Col span={12} className='px-2'>
                  <Form.Item
                    required={false}
                    name="password"
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
                    onChange={(info) => setImages(info.file)}
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
            <Title level={5} className="text-center mt-5">
                <Link className="text-dark" to="/">
                Already have an account? <b>Login</b>
                </Link>
            </Title>
          </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp