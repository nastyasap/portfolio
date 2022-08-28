import s from "./MenuLink.module.scss"

export function MenuLink({href, name}) {
    return (
        <a href={href} className={s.link}>{name}</a>
    )
}