// import React from 'react'

function Container({children}) {
  return (
    <>
        <div className="w-full max-w-[1500px] mx-auto px-5 h-full">{children}</div>
    </>
  )
}

export default Container