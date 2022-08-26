import s from './Project.module.scss'

export function Project(props) {
    return (
        <div className={s.project}>
            <div className={s.imgContainer}>
                <a onClick={props.onClick}>See more</a>
            </div>
            <div className={s.description}>
                <div className={s.title}>{props.title}</div>
                <p className={s.text}>{props.description}</p>
            </div>
        </div>
    );
}

