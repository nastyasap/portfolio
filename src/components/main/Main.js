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
                    {/*<Tilt className="Tilt" options={{max: 25}} style={{height: 250, width: 250}}>*/}
                        <img className={s.photo} src={photo} alt={"photo"}/>
                    {/*</Tilt>*/}
                </div>

                <div className={s.textBlock}>
                    <Title style={{fontSize: '44px'}}>I'm Sapozhnikova Anastasiya, <br/>Front-end developer<br/> from
                        Belarus</Title>
                    <p> I’m 24 years old. I graduated from BSU in 2020 with honors, my major was chemistry,
                        radiochemistry.
                        I was always interested in science and studying.
                        I worked for 3 months in my specialty as a radiochemist engineer.
                        Then I was working as a manager in a private company connected with Yandex taxi.
                        I finished IT-Incubator courses.
                    </p>
                    <Link name={'Download resume'} href={''}/>
                </div>
            </div>
        </Box>
    );
}
