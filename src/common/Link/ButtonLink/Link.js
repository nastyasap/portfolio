import s from "./Link.module.scss"

export function Link ({href, name}) {
    return (
        <div className={s.link}>
            <a href={href} target={'_blank'} className={s.button}>{name}</a>
        </div>
    )
}