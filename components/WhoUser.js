import React from 'react'

export default function WhoUser() {
  return (
    <div className="m-16">
      <div className=" py-5">
        <div className="text-gray-400 text-xs">전픽 유저 알아보기</div>
        <div className="text-2xl flex items-center font-medium">
          전픽 유저들은 어떤 사람?
        </div>
      </div>
      <div className="flex scrollbar-none overflow-x-scroll ">
        <div className="reviewButton"></div>
        <div className="reviewButton"></div>
        <div className="reviewButton"></div>
      </div>
    </div>
  )
}
