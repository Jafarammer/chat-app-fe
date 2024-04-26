import React from 'react'
import {Modal,Avatar,Typography,Input,Button} from 'antd'
import {UserOutlined} from '@ant-design/icons'
import './style.scss'
const {Title} = Typography

function ModalProfile({open,onClose}) {
  return (
    <Modal
    open={open}
    footer={null}
    className='modal-profile'
    closeIcon={null}
    >
        <div className='modal-content-top'>
            <Avatar size={94} icon={<UserOutlined />} className='mb-3' />
        </div>
        <div className='modal-content-bottom'>
            <Title level={4} className='mt-2'>Jafar</Title>
            <Input className='mt-2' value="wan.jafar@sprintasia.co.id" readOnly style={{width: 200}} />
            <Button type='primary' className='px-5 mt-5' onClick={onClose}>CLOSE</Button>
        </div>
    </Modal>
  )
}

export default ModalProfile