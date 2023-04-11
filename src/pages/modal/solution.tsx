import ModalTest from '@/components/ModalSolution'
import React, { useState } from 'react'
import styles from '@/styles/ModalSolution.module.scss'

export default function Solution() {
    const [openModal, setOpenModal] = useState(false)

    return (
        <div className='container'>
            <ModalTest isVisible={true}>
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


