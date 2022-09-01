import s from './Box.module.scss'

export function Box({children, style, id}) {
    return (
        <div id={id} style={style} className={s.block}>
            <div className={s.container}>
                {children}
            </div>
        </div>
    )
}