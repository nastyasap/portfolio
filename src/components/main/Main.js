import s from './Main.module.css'
import {Box} from "../../common/Box/Box";
import mainPhoto from "../../images/mainPhoto.JPG"
import {Title} from "../../common/title/Title";

export function Main() {
    return (
        <Box>
            <div className={s.mainWrapper}>
                <div className={s.photoWrapper}>
                    <img className={s.photo} src={mainPhoto} alt={"photo"}/>
                </div>
                <div className={s.text}>
                    <Title style={{margin: '28px 0', fontSize: '44px'}}>I'm Sapozhnikova Anastasiya, <br/>Front-end developer<br/> from Belarus</Title>
                    <p>Frontend developer</p>
                </div>
            </div>
        </Box>
    );
}
