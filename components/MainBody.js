import React from 'react'
import { FaceSmileIcon } from '@heroicons/react/24/outline'

export default function mainBody() {
  return (
    <div className="">
      <div className="flex m-10 justify-between">
        <div className="p-8 text-xl font-semibold">
          <span className="text-purple-600">요즘 대학생들의</span> <br /> 미팅,
          소개팅 전픽
        </div>
        <div className="p-8">
          <FaceSmileIcon className="h-14" />
        </div>
      </div>
      <div>
        <div className="mainBodyButton">1:1로 만날래요</div>
        <div className="mainBodyButton">여럿이서 놀래요</div>
      </div>
    </div>
  )
}
