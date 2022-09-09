import s from './Main.module.scss'
import {Box} from "../../common/Box/Box";
import photo from "../../assets/images/photo.png"
import {Title} from "../../common/Title/Title";
import {Link} from "../../common/Link/ButtonLink/Link";
import Tilt from "react-tilt/dist/tilt";

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
                    <p> Enthusiastic 24 years old frontend developer.
                        Responsible, fast-learning and easy-going person.
                        When I’ve been studying at school I won republic Olympiad on chemistry and graduated from university with honors. So I can’t imagine my life without self-development.
                        Based in Tbilisi, Georgia and Minsk, Belarus

                    </p>
                    <Link name={'Open CV'} href={'https://docs.google.com/document/d/1tMoRR2k458Ho3wlaoXZoatAIlCuIciK_/edit?usp=sharing&ouid=101031333687300784417&rtpof=true&sd=true'}/>
                </div>
            </div>
        </Box>
    );
}
