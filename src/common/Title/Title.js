import s from "./Title.module.scss";


export function Title ({children, style}) {
    return (
        <div style={style} className={s.title}>
            {children}
        </div>
    )
}
