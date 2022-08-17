import s from './Main.module.css'
import {Box} from "../common/Box/Box";

export function Main() {
    return (
        <Box bgColor={'#ffffff'}>
            <div className={s.text}>
                <span>Hi there!</span>
                <h1>I am Anastasiya Sapozhnikova</h1>
                <p>Frontend developer</p>
            </div>
            <div className={s.photo}></div>
        </Box>
    );
}

