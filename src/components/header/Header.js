import s from './Header.module.scss'
import {NavBar} from "./navBar/NavBar";

export function Header() {
    return (
        <div className={s.header}>
            <NavBar/>
        </div>
    );
}

