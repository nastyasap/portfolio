import s from "./Link.module.css"

export function Link ({href, name}) {
    return (
        <div className={s.link}>
            <a href={href} className={s.button}>{name}</a>
        </div>
    )
}