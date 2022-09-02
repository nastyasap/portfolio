import s from './Box.module.scss'

export function Box({children, style, id, wrStyle}) {
    return (
        <div id={id} style={style} className={s.block}>
            <div className={s.container} style={wrStyle}>
                {children}
            </div>
        </div>
    )
}