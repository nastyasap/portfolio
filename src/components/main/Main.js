import s from './Main.module.scss'
import {Box} from "../../common/Box/Box";
import photo from "../../assets/images/photo.png"
import {Title} from "../../common/Title/Title";
import {Link} from "../../common/Link/ButtonLink/Link";
import Tilt from "react-tilt/dist/tilt";
import cv from "../../assets/AnastasiyaSapozhnikova.pdf"

export function Main() {
    return (
        <Box id={'main'}>
            <div className={s.mainWrapper}>
                <div className={s.photoWrapper}>
                    <Tilt className="Tilt" options={{max: 10}} >
                        <img className={s.photo} src={photo} alt={"it's me"}/>
                    </Tilt>
                </div>

                <div className={s.textBlock}>
                    <Title style={{fontSize: '44px'}}>I'm Sapozhnikova Anastasiya, <br/>Front-end developer<br/> from
                        Belarus</Title>
                    <p className={s.text}> Enthusiastic 24 years old frontend developer.
                        Responsible, fast-learning and easy-going person.
                        When I’ve been studying at school I won republic Olympiad on chemistry and graduated from university with honors. So I can’t imagine my life without self-development.
                        Based in Minsk, Belarus

                    </p>
                    <Link name={'Open CV'} href={cv}/>
                </div>
            </div>
        </Box>
    );
}
