import {useState} from "react";
import cn from "classnames"

import s from './NavBar.module.scss'
import {MenuLink} from "../../../common/Link/MenuLink/MenuLink";
import burgerMenu from "../../../assets/icons/burgerMenu.svg";
import cross from "../../../assets/icons/cross.svg";
import {Title} from "../../../common/Title/Title";

export function NavBar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className={cn(s.wrapper, {[s.isOpen]: isOpen})}>
            {isOpen ?
                <img className={s.btn} alt='menu' src={cross} onClick={() => setIsOpen(false)}/>
                :
                <img className={s.btn} alt='close' src={burgerMenu} onClick={() => setIsOpen(true)}/>}
            <div className={s.logo}>
                <Title style={{padding: 0, fontWeight: 700
                }} children={'My portfolio'}/>
            </div>
            <div className={cn(s.nav, {[s.isOpen]: isOpen})}>
                <MenuLink onCloseMenu={() => setIsOpen(false)} name={'About'} href={'main'}/>
                <MenuLink onCloseMenu={() => setIsOpen(false)} name={'Skills'} href={'skills'}/>
                <MenuLink onCloseMenu={() => setIsOpen(false)} name={'Projects'} href={'projects'}/>
                <MenuLink onCloseMenu={() => setIsOpen(false)} name={'Contacts'} href={'footer'}/>
            </div>
        </div>
    )
        ;
}

