import s from './NavBar.module.scss'
import {MenuLink} from "../../../common/Link/MenuLink/MenuLink";

export function NavBar() {
    return (
        <div className={s.nav}>
            <MenuLink name={'About'} href={''}/>
            <MenuLink name={'Skills'} href={''}/>
            <MenuLink name={'Projects'} href={''}/>
            <MenuLink name={'Contacts'} href={''}/>
        </div>
    );
}

