import React from 'react'

function Button({
    children,
    type="button",
    textColor="#e5dada",
    className="",
    ...props

}) {
  return (
    <button className={`text-xl border-[1px] border-blush font-medium rounded-full py-2 w-[200px] text-center buttonGlow ${textColor} ${className}`} {...props}>
        {children}
    </button>
  )
}

export default Button