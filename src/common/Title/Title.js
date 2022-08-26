import s from "./Title.module.css";


export function Title ({children, style}) {
    return (
        <div style={style} className={s.title}>
            {children}
        </div>
    )
}
