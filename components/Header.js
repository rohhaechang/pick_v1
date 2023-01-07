import React, { useEffect } from 'react'
import { BellIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/router'

export default function Header() {
  const router = useRouter()
  const menuRouting = (event, menu) => {
    event.preventDefault()
    router.push(`/${menu}`)
  }
  return (
    <div className="sticky top-0">
      <div className="bg-white flex justify-between">
        <div className="p-6 mx-3" onClick={() => menuRouting(event, '')}>
          jeonpick
        </div>
        <div className="p-6 mx-1">
          <BellIcon className="h-5" />
        </div>
      </div>
      <div className="bg-white flex justify-around border-b-gray-300 border-b-[0.5px] shadow-sm ">
        <div
          className={`${
            router.pathname === '/'
              ? 'text-purple-600 underline underline-offset-8'
              : null
          } menuButton`}
          onClick={() => menuRouting(event, '')}
        >
          홈
        </div>
        <div
          className={`${
            router.pathname === '/matching'
              ? 'text-purple-600 underline underline-offset-8'
              : null
          } menuButton`}
          onClick={() => menuRouting(event, 'matching')}
        >
          매칭
        </div>
        <div
          className={`${
            router.pathname === '/result'
              ? 'text-purple-600 underline underline-offset-8'
              : null
          } menuButton`}
          onClick={() => menuRouting(event, 'result')}
        >
          결과
        </div>
        <div
          className={`${
            router.pathname === '/myProfile'
              ? 'text-purple-600 underline underline-offset-8'
              : null
          } menuButton`}
          onClick={() => menuRouting(event, 'myProfile')}
        >
          나의정보
        </div>
      </div>
    </div>
  )
}
