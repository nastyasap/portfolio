import s from './Main.module.css'
import {Box} from "../../common/Box/Box";
import mainPhoto from "../../images/mainPhoto.JPG"

export function Main() {
    return (
        <Box>
            <div className={s.mainWrapper}>
                <div className={s.photoWrapper}>
                    <img className={s.photo} src={mainPhoto} alt={"photo"}/>
                </div>
                <div className={s.text}>
                    <span>Hi there!</span>
                    <h1>I am Anastasiya Sapozhnikova</h1>
                    <p>Frontend developer</p>
                </div>
            </div>
        </Box>
    );
}

