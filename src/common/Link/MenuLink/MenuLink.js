import s from "./MenuLink.module.scss"
import {Link} from 'react-scroll';

export function MenuLink({href, name}) {
    return (
        <div className={s.link}>
            <Link activeClass={s.active}
                  to={href}
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  offset={0}
                  duration={300}
            >
                {name}
            </Link>
        </div>
    )
}