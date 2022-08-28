import s from './Main.module.scss'
import {Box} from "../../common/Box/Box";
import mainPhoto from "../../images/mainPhoto.JPG"
import {Title} from "../../common/Title/Title";
import {Link} from "../../common/Link/ButtonLink/Link";

export function Main() {
    return (
        <Box>
            <div className={s.mainWrapper}>
                <div className={s.photoWrapper}>
                    <img className={s.photo} src={mainPhoto} alt={"photo"}/>
                </div>
                <div className={s.textBlock}>
                    <Title style={{fontSize: '44px'}}>I'm Sapozhnikova Anastasiya, <br/>Front-end developer<br/> from Belarus</Title>
                    <p>Frontend developer</p>
                    <Link name={'Download resume'} href={''}/>
                </div>
            </div>
        </Box>
    );
}
