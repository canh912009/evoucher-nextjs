import React, { Fragment, useEffect, useRef, useState } from 'react'
import styles from '@/styles/ModalSolution.module.scss'

type ModalProps = {
  children?: React.ReactNode;
  isVisible?: boolean;
  renderFooter?: () => JSX.Element;
  onOK?: () => void;
  onCancel?: () => void;
}

const CLASS_DEFAULT: string = styles.tcl_modal__wrapper

const ModalSolution: React.FC<ModalProps> = (props) => {
  const [classDefault, setClassDefault] = useState(CLASS_DEFAULT)

  //--> dùng useEffect bên dưới cho riêng isVisible vì chỉ chạy nó khi isVisible có thay đổi
  // useEffect đc gọi sau khi render xong --> document luôn có giá trị , type
  useEffect(() => {
    if (props.isVisible === true) {
      setClassDefault(`${styles.tcl_modal__wrapper} ${styles.show}`);
      document.querySelector("body")?.classList.add(styles.tcl_modal__open);
    } else {
      setClassDefault(CLASS_DEFAULT);
      document.querySelector("body")?.classList.remove(styles.tcl_modal__open);
    }
  }, [props.isVisible]);

  useEffect(() => {
    function handlerEscKey(ev: KeyboardEvent) {
      if (ev.key === "Escape") {
        console.log("event = ", { event });
        if (props.onCancel)
          props.onCancel();
      };
    }
    document.addEventListener("keyup", handlerEscKey);
    return () => {
      // same when componentWillUnmount <-> Component will remove from DOM
      document.removeEventListener("keyup", handlerEscKey);
    }
  }, []);

  const _renderFooter = (): JSX.Element => {
    if (props.renderFooter) {
      return props.renderFooter();
    }
    return (
      <>
        <button className={styles.tcl_modal__cancel} onClick={props.onCancel}>Cancel</button>
        <button className={styles.tcl_modal__ok} onClick={props.onOK}>OK</button>
      </>
    );
  }

  if (props.isVisible === false) return null;
  return (
    <div className={classDefault}>
      <div className={styles.tcl_mask} onClick={props.onCancel} ></div>

      <div className={styles.tcl_dialog}>

        <div className={styles.tcl_modal__content}>

          <div className={styles.tcl_modal__header}>
            Title demo
            <button className={styles.tcl_modal__close} onClick={props.onCancel}>X</button>
          </div>

          <div className={styles.tcl_modal__body}>
            {/* {props.children} */}
            {props.children}
          </div>

          <div className={styles.tcl_modal__footer}>
            {_renderFooter()}
          </div>
        </div>

      </div>

    </div>
  )
}

export default ModalSolution



