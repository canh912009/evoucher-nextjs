import ModalTest from '@/components/ModalSolution'
import { log } from 'console'
import React, { useState } from 'react'

export default function Solution() {
    const [openModal, setOpenModal] = useState(false)

    return (
        <div className='container2'>
            <ModalTest
                isVisible={openModal}
                // renderFooter={() => {
                //     return <p>Custom footer</p>
                // }}
                onCancel={() => {
                    setOpenModal(false)
                }}
                onOK={() => {
                    console.log("submit form");
                }}
            >
                <h2>Demo modal</h2>
                <form action="">
                    <input type="text" />
                </form>
            </ModalTest>

            <button onClick={() => { setOpenModal(true) }}>
                OpenModal
            </button>
        </div>
    )
}


