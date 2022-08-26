import s from './Footer.module.scss'
import {Title} from "../../common/Title/Title";
import {Box} from "../../common/Box/Box";

export function Footer() {
    return (
        <Box style={{height:'50vh'}}>
            <Title>Anastasiya Sapozhnikova</Title>
            <div className={s.icons}>
                <div className={s.icon}></div>
                <div className={s.icon}></div>
                <div className={s.icon}></div>
                <div className={s.icon}></div>
            </div>
        </Box>
    )
}