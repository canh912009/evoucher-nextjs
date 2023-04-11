import React from 'react'
import styles from '@/styles/ModalSolution.module.scss'

type ModalProps = {
  children?: React.ReactNode;
  isVisible?: boolean;
}

const ModalSolution: React.FC<ModalProps> = (/* props */ { children, isVisible }) => {
  let classDefault: string = styles.tcl_modal__wrapper;

  // if (isVisible === true) {
  //   classDefault = styles.
  // }

  return (
    <div className={classDefault}>
      <div className={styles.tcl_mask}></div>

      <div className={styles.tcl_dialog}>

        <div className={styles.tcl_modal__content}>

          <div className={styles.tcl_modal__header}>
            Title demo + {classDefault}
            <button className={styles.tcl_modal__close}>X</button>
          </div>

          <div className={styles.tcl_modal__body}>
            {/* {props.children} */}
            {children}
          </div>

          <div className={styles.tcl_modal__footer}>
          </div>
        </div>

      </div>

    </div>
  )
}

export default ModalSolution



