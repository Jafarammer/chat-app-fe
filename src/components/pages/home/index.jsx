import React from 'react'
import {Row,Col,Button,Card,Avatar,Input,Space,Popover,List,Typography}  from "antd"
import {PlusOutlined,UserOutlined,SearchOutlined,SendOutlined} from "@ant-design/icons"
// child
import ModalProfile from './ModalProfile'
import ModalLogout from './ModalLogout'
import './style.scss'
const {Text} = Typography

const listProfile = ["Profile","Logout"]

function Home({
  // props useState
  showProfile,
  confirmLogout,
  // props function
  openProfile,
  closeProfile,
  onLogout,
  onConfirm
}) {
  const content = (
    <List
      className='list-home-modal'
      header={false}
      footer={false}
      bordered={false}
    >
      <List.Item className='list p-0 mb-2'>
        <Text className='list-text pt-2 ps-2' onClick={openProfile}>Profile</Text>
      </List.Item>
      <List.Item className='list p-0 mb-2'>
        <Text className='list-text pt-2 ps-2' onClick={onConfirm}>Logout</Text>
      </List.Item>
    </List>
  )
  return (
    <div className='home'>
      <Row>
        <Col span={6}>
          <Card className='card-left' bodyStyle={{padding: 0}}>
            <div className='d-flex align-items-center mb-3 card-header'>
              <Popover
                trigger={'hover'}
                placement='bottomRight'
                overlayStyle={{width: "250px"}}
                content={content}
              >
                <Avatar size={'large'} className='ms-3 avatar' icon={<UserOutlined />} />
              </Popover>
            </div>
            <Button 
              className='float-end me-2 mb-3' 
              type='primary' 
              size='middle' 
              icon={<PlusOutlined/>}
            >
              New Group
            </Button>
            <div className='d-flex justify-content-center mb-3 card-left-div-input'>
              <Input placeholder='Search' suffix={<SearchOutlined/>} className='input' />
            </div>
            <Card className='card-list' bodyStyle={{padding: 0}}>
              <List
                itemLayout='horizontal'
              >
                <List.Item className='py-1 ps-2'>
                    <List.Item.Meta
                      avatar={<Avatar icon={<UserOutlined />} />}
                      title="Anya Geraldine"
                      description="Good morning far"
                    />
                </List.Item>
              </List>
            </Card>
            <Card className='card-list' bodyStyle={{padding: 0}}>
              <List
                itemLayout='horizontal'
              >
                <List.Item className='py-1 ps-2'>
                    <List.Item.Meta
                      avatar={<Avatar icon={<UserOutlined />} />}
                      title="Lyodra"
                      description="Good morning jafar"
                    />
                </List.Item>
              </List>
            </Card>
          </Card>
        </Col>
        <Col span={18}>
          <div className='bg-chat' style={{width: "100%", height: "85vh"}}>
              
          </div>
          <Card style={{height: "109px", border: "0px", borderRadius: "0px"}}>
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
      <section>
          <ModalProfile
            open={showProfile}
            onClose={closeProfile}
          />
         <ModalLogout
          open={confirmLogout}
          title="Logout"
          onCancel={onConfirm}
          onClick={onLogout}
         >
            YES
         </ModalLogout>
      </section>
    </div>
  )
}

export default Home