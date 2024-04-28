import React from 'react'
import {Form,Input,Button} from 'antd'

function FormGroup({onSearchGroup}) {
  return (
    <Form layout='vertical'>
        <Form.Item
            label={<b>Group Name</b>}
        >
            <Input/>
        </Form.Item>
        <Form.Item
            label={<b>Add People</b>}
        >
            <Input />
        </Form.Item>
        <Button type='primary' className='px-5 float-end'>Create Chat</Button>
    </Form>
  )
}

export default FormGroup