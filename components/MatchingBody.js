import React from 'react'

export default function MatchingBody() {
  return (
    <div className="m-14">
      <div className="flex justify-between itmes-center mb-12">
        <div className="font-bold py-4">아직 신청한 매칭이 없어요</div>
        <div className="text-xs text-purple-400">
          <div className="rounded-full text-center h-8 w-8 text-lg shadow-md mx-auto my-1 border-gray-300 border-[0.5px]">
            ?
          </div>
          전픽 가이드
        </div>
      </div>
      <div className="">
        <div className="border-gray-300 border-[0.5px] shadow-sm py-4 rounded-lg text-sm px-5 font-semibold flex items-center mb-6">
          소개팅
          <span className="text-xs  text-gray-500 ml-5 font-normal">
            신청하지 않으셨어요
          </span>
        </div>
        <div className="border-gray-300 border-[0.5px] shadow-sm py-4 rounded-lg text-sm px-5 font-semibold flex items-center">
          미팅
          <span className="text-xs  text-gray-500 ml-5 font-normal">
            신청하지 않으셨어요
          </span>
        </div>
      </div>
    </div>
  )
}
