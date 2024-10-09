import React from 'react'

const Button = ({children, className}) => {
    return (
        <button className={`bg-[#D90429] hover:bg-[#d90427c0] text-white px-8 py-3 w-[fit-content] ease duration-300 transition-all ${className}`}>
            {children}
        </button>
    )
}

export default Button
