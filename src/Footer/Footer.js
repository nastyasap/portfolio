import s from './Footer.module.css'
import {Title} from "../common/title/Title";

export function Footer() {
    return (
        <div className={s.footer}>
            <div className={s.footerContainer}>
                <Title text={'Anastasiya Sapozhnikova'}/>
                <div className={s.icons}>
                    <div className={s.icon}></div>
                    <div className={s.icon}></div>
                    <div className={s.icon}></div>
                    <div className={s.icon}></div>
                </div>
            </div>

        </div>
    )
}