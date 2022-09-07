import s from "./SocialNatLink.module.scss"

export function SocialNetLink ({link, img, onClick, text}) {
    return(
        <div className={s.iconWrapper}>
            <a href={link} onClick={onClick} target="_blank">
                <img className={s.icon} src={img} alt={'picture'}/>
                <span className={s.tooltip}>{text}</span>
            </a>
        </div>
    )
}