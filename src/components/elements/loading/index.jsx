import React from 'react'
import { Skeleton,Space } from 'antd';

function Loading() {
  return (
    <Space
        direction='vertical'
        size="middle"
    >
        <Skeleton className='ms-3 p-0' avatar paragraph={{rows: 1,width: "120px"}}/>
        <Skeleton className='ms-3 p-0' avatar paragraph={{rows: 1,width: "120px"}}/>
        <Skeleton className='ms-3 p-0' avatar paragraph={{rows: 1,width: "120px"}}/>
        <Skeleton className='ms-3 p-0' avatar paragraph={{rows: 1,width: "120px"}}/>
        <Skeleton className='ms-3 p-0' avatar paragraph={{rows: 1,width: "120px"}}/>
    </Space>
  )
}

export default Loading