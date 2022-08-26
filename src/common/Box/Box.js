import s from './Box.module.css'

export function Box({children, style}) {
    return (
        <div style={style} className={s.block}>
            <div className={s.container}>
                {children}
            </div>
        </div>
    )
}