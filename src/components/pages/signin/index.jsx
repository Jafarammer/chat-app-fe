import React from 'react'
import {Link} from 'react-router-dom'
import {Card,Typography} from 'antd'
// element
import {FormSignin} from '../../elements'
import "./style.scss"
const {Title,Text} = Typography

function Signin({
  // props useState
  isLoading,
  contextHolder,
  // props function
  onLogin
}) {
  return (
    <div className='signin'>
      {contextHolder}
      <div className='row'>
          <div className='col-6 left'>
              <Title level={1} className='fw-bold mt-4 ms-5 text-muted'>Ngobrol <span className='title-logo'>YUK</span></Title>
          </div>
          <div className='col-6 right d-flex justify-content-center align-items-center'>
            <div className='div-card'>
              <Card 
                className='shadow-lg px-5 card' 
                bordered
              >
                <Title className='text-center fw-bold text-secondary mb-5' level={2}>Mulai</Title>
                <FormSignin
                  isLoading={isLoading}
                  onFinish={onLogin}
                />
                <Title level={5} className="text-center mt-5">
                  <Link className="text-dark" to="/signup">
                    Don't have an account? <b>Register</b>
                  </Link>
              </Title>
              </Card>

            </div>
          </div>
      </div>
      <div className='div-card-parent'>
      </div>
    </div>
  )
}

export default Signin