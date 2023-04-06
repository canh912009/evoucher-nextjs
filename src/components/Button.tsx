import React, { useEffect } from 'react'

export default function Button() {
    console.log("after Render Button");
    useEffect(() => {
        return () => {
            console.log("Button ComponentWillUnmount");
        }
    });

    return (
        <h1>Button Component</h1>
    )
}
