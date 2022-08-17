import s from './Box.module.css'

export function Box({children, bgColor, height}) {
    return (
        <div style={{backgroundColor: `${bgColor}`, height: `${height}`}} className={s.block}>
            <div className={s.container}>
                {children}
            </div>
        </div>
    )
}