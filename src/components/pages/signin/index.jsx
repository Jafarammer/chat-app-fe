import React from 'react'
import {Link} from 'react-router-dom'
import {Button,Input,Card,Typography,Form} from 'antd'
import {MailOutlined,EyeTwoTone,EyeInvisibleOutlined,EyeOutlined,LockOutlined} from '@ant-design/icons'
import "./style.scss"
const {Title,Text} = Typography

function Signin({
  // props useState
  isLoading,
  contextHolder,
  // props function
  onLogin
}) {
  return (
    <div className='signin'>
      {contextHolder}
      <div className='row'>
          <div className='col-6 left'>
              <Title level={1} className='fw-bold mt-4 ms-5 text-muted'>Ngobrol <span style={{color: "#00b96b"}}>YUK</span></Title>
          </div>
          <div className='col-6 right d-flex justify-content-center align-items-center'>
            <div style={{height: "400px", width: "63%"}}>
              <Card 
                className='shadow-lg px-5' 
                style={{height: "100%", borderRadius: "25px"}}
                bordered
              >
                <Title className='text-center fw-bold text-secondary mb-5' level={2}>Mulai</Title>
                <Form onFinish={onLogin}>
                  <Form.Item
                    required={false}
                    name="email"
                  >
                    <Input placeholder='Email' size='large' className='py-2' prefix={<MailOutlined className='fs-5 text-secondary'/>} />
                  </Form.Item>
                  <Form.Item
                    required={false}
                    name="password"
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
                <Title level={5} className="text-center mt-5">
                  <Link className="text-dark" to="/signup">
                    Don't have an account? <b>Register</b>
                  </Link>
              </Title>
              </Card>

            </div>
          </div>
      </div>
      <div className='div-card-parent'>
      {/* <Card className='shadow'>jhoih</Card> */}

      </div>
    </div>
  )
}

export default Signin