import s from "./Title.module.css";


export function Title (props) {
    return (
        <div className={s.title}>
            <div>{props.text}</div>
        </div>
    )
}
