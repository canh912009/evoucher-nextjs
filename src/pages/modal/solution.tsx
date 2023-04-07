
import ModalSolution from '@/components/ModalSolution'
import React from 'react'
// import styles from '@/styles/modal.module.scss'

export default function Solution() {
    return (
        <div className='container'>
            <ModalSolution>
                <h2>Demo modal</h2>
                <form action="">
                    <input type="text" />
                </form>
            </ModalSolution>

            <button className='upload22'>Upload Image</button>
            {/* <button className={styles.upload22}>Upload Image</button> */}
        </div>
    )
}


