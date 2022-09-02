import s from './Skill.module.scss'

export function Skill(props) {
    return (
        <div className={s.skill}>
            <img className={s.icon} alt={'icon'} src={props.icon}/>
            <div className={s.title}>{props.title}</div>

            {/*<div className={s.description}>*/}
            {/*    /!*<p className={s.text}>{props.description}</p>*!/*/}
            {/*</div>*/}
        </div>
    );
}

