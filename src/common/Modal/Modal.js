import {useEffect, useRef, useState} from "react";
import ReactDOM from "react-dom";
import s from "./Modal.module.scss"

export function Portal({children}) {
    const container = useRef(document.createElement('div'))

    useEffect(() => {
        document.body.appendChild(container.current)

        return () => {
            document.body.removeChild(container.current)
        }
    }, [container])

    return ReactDOM.createPortal(children, container.current)
}

export function Modal({children, isActive, setIsActive}) {
    const onClose = () => {
        setIsActive(false)
    }

    if(!isActive){
        return null
    }

    return (
        <Portal>
            <div onClick={onClose} className={s.container}>
                <div className={s.closeSection} onClick={(e) => e.stopPropagation()}>
                    {children}
                </div>
            </div>
        </Portal>
    )
}