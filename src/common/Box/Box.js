import s from './Box.module.css'

export function Box({children, bgColor}) {
    return (
        <div style={{backgroundColor: `${bgColor}`}} className={s.block}>
            <div className={s.container}>
                {children}
            </div>
        </div>
    )
}