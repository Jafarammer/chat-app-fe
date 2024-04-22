import React from 'react'
import {Row,Col,Button,Card,Avatar,Input,Space,Popover,List,Typography,Skeleton}  from "antd"
import {PlusOutlined,UserOutlined,SearchOutlined,BellFilled} from "@ant-design/icons"
// child
// import { ChatState } from '../../../context/ChatProvider'
import ModalProfile from './ModalProfile'
import ModalLogout from './ModalLogout'
// elements
import {Loading} from '../../elements'
import './style.scss'
const {Text} = Typography


function Home({
  // props useState
  showProfile,
  confirmLogout,
  contextHolder,
  search,
  setSearch,
  loading,
  searchResult,
  // props function
  openProfile,
  closeProfile,
  onLogout,
  onConfirm,
  onSearch
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
            {
              loading 
                ? 
                <Loading/> 
                :
                searchResult?.map((item,index) => (
                  <Card key={index} className='card-list' bodyStyle={{padding: 0}}>
                    <List
                      itemLayout='horizontal'
                    >
                      <List.Item className='py-1 ps-2'>
                          <List.Item.Meta
                            avatar={<Avatar icon={<UserOutlined />} />}
                            title={item.name}
                            description={item.email}
                          />
                      </List.Item>
                    </List>
                  </Card>
                ))
                 
            }
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
            <Input placeholder="Typing a message" />
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