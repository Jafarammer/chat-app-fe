import React from 'react'
import {Link} from 'react-router-dom'
import {
  Typography,
  Card,
} from 'antd'
// element
import {FormSignup} from '../../elements'
import "./style.scss"
const {Title} = Typography



function SignUp({
  // props useState
  contextHolder,
  setImages,
  isLoading,
  // props function
  onRegistered,
}) {

  return (
    <div className='register'>
      {contextHolder}
      <div className='row'>
        <div className='col-6 left'>
          <Title level={1} className='fw-bold mt-4 ms-5 text-muted'>Ngobrol <span className='title-logo'>YUK</span></Title>
        </div>
        <div className='col-6 right d-flex justify-content-center align-items-center'>
          <div className='div-card'>
          <Card
            className='shadow-lg mx-3 card'
            bordered
          >
            <Title className='text-center fw-bold text-secondary mb-5' level={2}>Daftar</Title>
            <FormSignup
              onFinish={onRegistered}
              isLoading={isLoading}
              onChange={(info) => setImages(info.file)}
            />
            <Title level={5} className="text-center mt-5">
                <Link className="text-dark" to="/">
                Already have an account? <b>Login</b>
                </Link>
            </Title>
          </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp