import s from './NavBar.module.scss'
import {MenuLink} from "../../../common/Link/MenuLink/MenuLink";

export function NavBar() {
    return (
        <div className={s.nav}>
            <MenuLink name={'About'} href={'main'}/>
            <MenuLink name={'Skills'} href={'skills'}/>
            <MenuLink name={'Projects'} href={'projects'}/>
            <MenuLink name={'Contacts'} href={'footer'}/>
        </div>
    );
}

