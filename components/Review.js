import React from 'react'
import { ChevronRightIcon } from '@heroicons/react/24/solid'

export default function Review() {
  return (
    <div className="m-16">
      <div className=" py-5">
        <div className="text-gray-400 text-xs">전픽 후기 모아보기</div>
        <div className="text-2xl flex items-center font-medium">
          <span className="text-purple-600">~~~~~</span>명이 신청했어요
          <ChevronRightIcon className="h-4 ml-3" />
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
