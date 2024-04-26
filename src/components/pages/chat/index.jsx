import React from 'react'
import {
  Row,
  Col,
  Button,
  Card,
  Avatar,
  Input,
  Space,
  Popover,
  List,
  Drawer,
  Typography
}  from "antd"
import {
  PlusOutlined,
  UserOutlined,
  SearchOutlined,
  BellFilled
} from "@ant-design/icons"
// element
import {ModalLogout,ModalProfile,FormGroup} from '../../elements'
import './style.scss'
const {Text} = Typography



function Chat({
  // props context
  // props useState
  contextHolder,
  search,
  setSearch,
  showProfile,
  confirmLogout,
  formGroup,
  // props function
  openProfile,
  closeProfile,
  onConfirm,
  openGroup,
  onSearch,
  onLogout,
  closeGroup
}) {
  const content = (
    <List
      className='popover-list'
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
    <div className='chat'>
      {contextHolder}
      <Row>
        <Col span={6}>
          <Card className='card-left' bodyStyle={{padding: 0}}>
            <div className='d-flex align-items-center justify-content-between mb-3 card-header'>
              <Popover
                trigger={'hover'}
                placement='bottomRight'
                overlayStyle={{width: "250px"}}
                content={content}
              >
                <Avatar size={'large'} className='ms-3 avatar' icon={<UserOutlined />} />
              </Popover>
              <BellFilled className='me-3' />
            </div>
            <Button 
              className='float-end me-2 mb-3' 
              type='primary' 
              size='middle' 
              icon={<PlusOutlined/>}
              onClick={openGroup}
            >
              New Group
            </Button>
            <div className='d-flex justify-content-center mb-3 card-left-div-input'>
              <Input 
                placeholder='Search' 
                suffix={<SearchOutlined/>} 
                className='input'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={(e) => {
                  if(e.key == "Enter") {
                    onSearch()
                  }
                }}
              />
            </div>
          </Card>
        </Col>
        <Col span={18}>
          {/* <div className='bg-chat' style={{width: "100%", height: "85vh"}}>
                untuk bubble chat
          </div> */}
          <div className='bg-chat content-chat'>
                
          </div>
          <Card className='chat-typing'>
            <Space.Compact
              className='input-typing'
            >
              <Input placeholder="Typing a message" />
              <Button type="primary">
                Send
              </Button>
            </Space.Compact>
          </Card>
        </Col>
      </Row>
      {/* section modal */}
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
      {/* section drawer */}
      <section>
        <Drawer title='Create new group' open={formGroup} onClose={closeGroup}>
            <FormGroup/>
        </Drawer>
      </section>
    </div>
  )
}

export default Chat