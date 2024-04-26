import React from 'react'
import { Skeleton,Space } from 'antd';

function SkeletonLoading() {
  return (
    <Space
        direction='vertical'
        size="middle"
    >
        <Skeleton className='mx-3 p-0' avatar paragraph={{rows: 1,width: "150px"}}/>
        <Skeleton className='mx-3 p-0' avatar paragraph={{rows: 1,width: "150px"}}/>
        <Skeleton className='mx-3 p-0' avatar paragraph={{rows: 1,width: "150px"}}/>
        <Skeleton className='mx-3 p-0' avatar paragraph={{rows: 1,width: "150px"}}/>
        <Skeleton className='mx-3 p-0' avatar paragraph={{rows: 1,width: "150px"}}/>
    </Space>
  )
}

export default SkeletonLoading