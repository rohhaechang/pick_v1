import React from 'react'
import { CameraIcon } from '@heroicons/react/24/outline'

export default function Footer() {
  return (
    <div className="mb-16">
      <div className="flex justify-center space-x-5 py-5 mx-8 text-xs text-gray-500 border-b-[1px] border-gray-400">
        <div>공지사항</div>
        <div>이용약관</div>
        <div>개인정보처리방침</div>
      </div>
      <div className="mx-10 flex justify-between items-center">
        <div className="px-6 py-4">jeonpick</div>
        <div className="px-6 py-4">
          <CameraIcon className="h-6" />
        </div>
      </div>
      <div className="mx-16 text-xs text-gray-300">
        대표자 ~~ 사업자등록번호 ~~ 주소지 ~~
      </div>
    </div>
  )
}
