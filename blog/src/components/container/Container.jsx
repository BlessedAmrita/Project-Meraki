// import React from 'react'

function Container({children}) {
  return (
    <>
        <div className="w-full max-w-[1440px] mx-auto px-5">{children}</div>
    </>
  )
}

export default Container