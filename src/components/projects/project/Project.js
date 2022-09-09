import s from './Project.module.scss'
import {Link} from "../../../common/Link/ButtonLink/Link";

export function Project(props) {
    return (
        <a className={s.project} href={props.link} target={'_blank'}>
            <div className={s.imgContainer}>
                <img className={s.img} src={props.img} alt={'project'}/>
                <div className={s.link}>
                    <Link name={'See more'} href={props.link}/>
                </div>
            </div>
            <div className={s.description}>
                <div className={s.title}>{props.title}</div>
                <p className={s.text}>{props.description}</p>
            </div>
        </a>
    );
}

