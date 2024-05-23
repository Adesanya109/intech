import Calculator from '@/components/Calculator'
import SideBar from '@/components/SideBar'
import TopBar from '@/components/TopBar'
import React from 'react'

const page = () => {
  return (
    <div className="h-screen flex flex-col">
        <TopBar title='Calculator' />
        <div className="flex flex-grow">
        <SideBar />
        <Calculator />
        </div>
    </div>
  )
}

export default page