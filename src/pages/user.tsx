import React, { Fragment } from 'react'
import AAA from "assets/vercel_copy.svg"

export default function User() {
    return (
        <Fragment>
            <div>Hello user</div>
            {/* <img src='/images/vercel_copy.svg'></img> */}
            <img src={AAA} />
        </Fragment>
    )
}
