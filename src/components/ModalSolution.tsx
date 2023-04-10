import React from 'react'
import styles from '@/styles/modal.module.scss'

export default function ModalSolution() {
  return (
    <div className={styles.tcl_modal__wrapper}>
      <div className={styles.tcl_mask}></div>

      <div className={styles.tcl_dialog}>

        <div className={styles.tcl_modal__content}>

          <div className={styles.tcl_modal__header}>
            Title demo
            <button className={styles.tcl_modal__close}>X</button>
          </div>

          <div className={styles.tcl_modal__body}>
          </div>

          <div className={styles.tcl_modal__footer}>
          </div>
        </div>

      </div>

    </div>
  )
}


