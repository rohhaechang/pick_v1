import React from 'react'

export default function SignIn() {
  return (
    <div className="p-10">
      <div className="p-10 text-xl font-semibold">
        안녕하세요
        <br />
        로그인을 위해
        <br />
        번호를 인증해주세요.
      </div>
      <div className="p-10">
        <form action="">
          <input type="text" name="" id="" placeholder="전화번호" />
          <input type="button" value="인증" />
        </form>
      </div>
    </div>
  )
}
