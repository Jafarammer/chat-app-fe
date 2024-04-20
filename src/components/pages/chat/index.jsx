import React from 'react'
import {Row,Col,Button}  from "antd"
import './style.scss'

function Chat() {
  return (
    <div className='chat'>
      <Row>
        <Col span={8}>Left</Col>
        <Col span={16}>Right</Col>
      </Row>
    </div>
  )
}

export default Chat