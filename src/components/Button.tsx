import React from 'react'

type ButtonProps = {
    type?: "button" | "submit" | "reset" | undefined
    className?: string
    isLoading?: boolean
}

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
    return (

        <button type={props.type} className={props.className}>{children}</button>
    )
}

export default Button