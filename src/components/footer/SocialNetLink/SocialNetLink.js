import s from "./SocialNatLink.module.scss"

export function SocialNetLink ({link, img}) {
    return(
        <div className={s.iconWrapper}>
            <a href={link} target="_blank">
                <img className={s.icon} src={img} alt={'picture'}/>
            </a>
        </div>
    )
}