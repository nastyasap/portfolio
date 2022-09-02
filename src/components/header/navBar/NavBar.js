import {useState} from "react";
import cn from "classnames"

import s from './NavBar.module.scss'
import {MenuLink} from "../../../common/Link/MenuLink/MenuLink";
import burgerMenu from "../../../assets/icons/burgerMenu.svg";
import cross from "../../../assets/icons/cross.svg";

export function NavBar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className={s.wrapper}>
            {isOpen ?
                <img className={s.btn} src={cross} onClick={() => setIsOpen(false)}/>
                :
                <img className={s.btn} src={burgerMenu} onClick={() => setIsOpen(true)}/>}
            <div className={cn(s.nav, {[s.isOpen]: isOpen}) }>
                <MenuLink name={'About'} href={'main'}/>
                <MenuLink name={'Skills'} href={'skills'}/>
                <MenuLink name={'Projects'} href={'projects'}/>
                <MenuLink name={'Contacts'} href={'footer'}/>
            </div>
        </div>
    )
        ;
}

