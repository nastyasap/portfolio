import s from './Main.module.scss'
import {Box} from "../../common/Box/Box";
import photo from "../../assets/images/photo.png"
import {Title} from "../../common/Title/Title";
import {Link} from "../../common/Link/ButtonLink/Link";
import Tilt from "react-tilt/dist/tilt";
import cv from "../../assets/SapozhnikovaCV.pdf"

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
                    <p className={s.text}> Enthusiastic frontend developer with experience in creating SPA using React, Redux, TypeScript.
                        Knowledge in user interface, testing, and debugging processes.
                        I improving my skills in this direction and plan to expand them with new technologies.
                        <br/>Open to your suggestions.
                        <br/>Based in Minsk, Belarus
                    </p>
                    <Link name={'Open CV'} href={cv}/>
                </div>
            </div>
        </Box>
    );
}
