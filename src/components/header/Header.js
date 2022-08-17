import s from './Header.module.css'
import {NavBar} from "../navBar/NavBar";

export function Header() {
    return (
        <div className={s.header}>
            <NavBar/>
        </div>
    );
}

