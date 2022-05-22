import s from './Skill.module.css'

export function Skill(props) {
    return (
        <div className={s.skill}>
            <div className={s.icon}></div>
            <div className={s.description}>
                <div className={s.title}>{props.title}</div>
                <p className={s.text}>{props.description}</p>
            </div>
        </div>
    );
}

