import React from 'react'
import {Row,Col,Button,Card,Avatar,Input,Space}  from "antd"
import {PlusOutlined,UserOutlined,SearchOutlined,SendOutlined} from "@ant-design/icons"
import './style.scss'

function Home() {
  return (
    <div className='home'>
      <Row>
        <Col span={6}>
          <Card className='shadow' bodyStyle={{padding: 0}} style={{width: "100%", height: "100vh", borderRadius: "0px"}}>
            <div className='d-flex align-items-center mb-3' style={{backgroundColor: "#F3F3F3", height: "70px"}}>
              <Avatar size={'large'} className='ms-3' icon={<UserOutlined />} />
            </div>
            <Button 
              className='float-end me-2 mb-3' 
              type='primary' 
              size='middle' 
              icon={<PlusOutlined/>}
            >
              New Group
            </Button>
            <div className='d-flex justify-content-center mb-3' style={{width: "100%"}}>
              <Input placeholder='Search' suffix={<SearchOutlined/>} style={{width: 320}} />
            </div>
            <Card 
              style={{
                height: "70px", 
                borderRadius: "0px", 
                borderRight: "0px", 
                borderLeft: "0px",
              }}
            >
              <p className='fw-bold'>Wan</p>
            </Card>
            <Card 
              style={{
                height: "70px", 
                borderRadius: "0px", 
                borderRight: "0px", 
                borderLeft: "0px",
              }}
            >
              <p className='fw-bold'>Jafar</p>
            </Card>
          </Card>
        </Col>
        <Col span={18}>
          <div className='bg-chat' style={{width: "100%", height: "85vh"}}>
              
          </div>
          <Card style={{height: "85px", border: "0px", borderRadius: "0px"}}>
          <Space.Compact
            style={{
              width: '100%',
            }}
          >
            <Input placeholder="Typing..." />
            <Button type="primary">
              Send
            </Button>
          </Space.Compact>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default Home