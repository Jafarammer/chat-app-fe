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
  Typography,
  Spin
}  from "antd"
import {
  PlusOutlined,
  UserOutlined,
  SearchOutlined,
  BellFilled
} from "@ant-design/icons"
// element
import {ModalLogout,ModalProfile,FormGroup,CardChat} from '../../elements'
import './style.scss'
import { getSender } from '../../../config/ChatLogics'
const {Text} = Typography



function Chat({
  // props context
  selectedChat,
  setSelectedChat,
  chats,
  // props useState
  contextHolder,
  search,
  setSearch,
  showProfile,
  confirmLogout,
  formGroup,
  searchResult,
  loading,
  searchUser,
  loadingChat,
  loggedUser,
  // props function
  openProfile,
  closeProfile,
  onConfirm,
  openGroup,
  onSearch,
  onLogout,
  closeGroup,
  openSearch,
  closeSearch,
  onAccessChat
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
                readOnly
                onClick={openSearch}
              />
            </div>
            {
              chats?.map((item) => (
                <Card key={item._id} onClick={() => setSelectedChat(item)} className={selectedChat === item ? 'card-list-focus' : 'card-list'} bodyStyle={{padding: 0}}>
                    <List itemLayout='horizontal'>
                    <List.Item className='py-1 ps-2'>
                          <List.Item.Meta
                            avatar={<Avatar icon={<UserOutlined />} />}
                            title={
                              !item.isGroupChat ? getSender(loggedUser, item.users) : item.chatName
                            }
                            // description="email"
                          />
                      </List.Item>
                    </List>
                </Card>
              ))
            }
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
        {/* drawer create group */}
        <Drawer title='Create new group' open={formGroup} onClose={closeGroup}>
            <FormGroup/>
        </Drawer>
        {/* drawer search */}
        <Drawer style={{width: '480px'}} placement='left' open={searchUser} onClose={closeSearch}>
          <div className='d-flex justify-content-center mb-3 card-left-div-input'>
            <Input 
              placeholder='Search' 
              suffix={<SearchOutlined/>} 
              className='input mx-5'
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={(e) => {
                if(e.key == "Enter") {
                  onSearch()
                }
              }}
            />
          </div>
          <CardChat
            loading={loading}
            searchResult={searchResult}
            onAccessChat={onAccessChat}
          />
          {
            loadingChat && <Spin/>
          }
        </Drawer>
      </section>
    </div>
  )
}

export default Chat