import React from 'react'
import {Card,List,Avatar} from 'antd'
import {UserOutlined} from '@ant-design/icons'
import './style.scss'
// element
import {SkeletonLoading} from '../../elements'

function CardChat({loading,searchResult,onAccessChat}) {
  return (
    <>
        {
            loading ? <SkeletonLoading/> : searchResult?.map((item,index) => (
                <Card onClick={() => onAccessChat(item._id)} key={index} className='card-chat' bodyStyle={{padding: 0}}>
                    <List itemLayout='horizontal'>
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
    </>
  )
}

export default CardChat