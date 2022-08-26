import s from './Box.module.scss'

export function Box({children, style}) {
    return (
        <div style={style} className={s.block}>
            <div className={s.container}>
                {children}
            </div>
        </div>
    )
}