import React from 'react'
import {Modal,Button,Typography} from 'antd'
import {CloseCircleFilled} from '@ant-design/icons'
import './style.scss'
const {Text} = Typography

function ModalLogout({onCancel,title,open,onClick,children}) {
  return (
    <Modal
        title={title}
        open={open}
        onCancel={onCancel}
        footer={null}
        closeIcon={<CloseCircleFilled />}
    >
        <div className='modal-content-logout'>
            <Text>
                Are you sure you want to logout ?
            </Text>
            <Button
                type="primary"
                className='px-5 mt-3'
                onClick={onClick}
            >
                {children}
            </Button>
        </div>
    </Modal>
  )
}

export default ModalLogout