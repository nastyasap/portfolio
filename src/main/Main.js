import s from './Main.module.css'

export function Main() {
    return (
        <div className={s.main}>
            <div className={s.container}>
                <div className={s.text}>
                    <span>Hi there!</span>
                    <h1>I am Anastasiya Sapozhnikova</h1>
                    <p>Frontend developer</p>
                </div>
                <div className={s.photo}></div>
            </div>

        </div>
    );
}

