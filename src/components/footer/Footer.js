import s from './Footer.module.scss'
import {Title} from "../../common/Title/Title";
import {Box} from "../../common/Box/Box";
import {SocialNetLink} from "./SocialNetLink/SocialNetLink";
import linkedin from "../../assets/icons/socialNetworks/linkedin.svg"
import github from "../../assets/icons/socialNetworks/github.svg"
import telegram from "../../assets/icons/socialNetworks/telegram.svg"
import gmail from "../../assets/icons/socialNetworks/gmail.svg"
import phone from "../../assets/icons/socialNetworks/phone.svg"
import instagram from "../../assets/icons/socialNetworks/instagram.svg"

export function Footer() {
    return (
        <Box id={'footer'} style={{height: '50vh'}} wrStyle={{alignItems: 'center'}}>
            <Title>Anastasiya Sapozhnikova</Title>
            <div className={s.icons}>
                <SocialNetLink img={linkedin} link={"https://www.linkedin.com/in/%D0%B0%D0%BD%D0%B0%D1%81%D1%82%D0%B0%D1%81%D0%B8%D1%8F-%D1%81%D0%B0%D0%BF%D0%BE%D0%B6%D0%BD%D0%B8%D0%BA%D0%BE%D0%B2%D0%B0-06081322b/"}/>
                <SocialNetLink img={github} link={"https://github.com/nastyasap"}/>
                <SocialNetLink img={telegram} link={'https://t.me/nastyasap'}/>
                <SocialNetLink img={gmail}/>
                <SocialNetLink img={phone}/>
                <SocialNetLink img={instagram} link={"https://instagram.com/sapozhnikova.nastya?igshid=ZDg1NjBiNjg="}/>
            </div>
        </Box>
    )
}