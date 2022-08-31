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
        <Box style={{height: '50vh', alignItems: 'center'}}>
            <Title>Anastasiya Sapozhnikova</Title>
            <div className={s.icons}>
                <SocialNetLink img={linkedin}/>
                <SocialNetLink img={github} link={"https://github.com/nastyasap"}/>
                <SocialNetLink img={telegram}/>
                <SocialNetLink img={gmail}/>
                <SocialNetLink img={phone}/>
                <SocialNetLink img={instagram}/>
            </div>
        </Box>
    )
}