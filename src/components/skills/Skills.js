import s from './Skills.module.scss'
import {Skill} from "./skill/Skill";
import {Box} from "../../common/Box/Box";
import {Title} from "../../common/Title/Title";
import css from "../../assets/icons/skills/css.svg"
import js from "../../assets/icons/skills/js.svg"
import html from "../../assets/icons/skills/html.svg"
import react from "../../assets/icons/skills/react.svg"
import redux from "../../assets/icons/skills/redux.svg"
import ts from "../../assets/icons/skills/ts.svg"
import git from "../../assets/icons/skills/git.svg"
import storybook from "../../assets/icons/skills/storybook.svg"
import api from "../../assets/icons/skills/api.svg"
import axios from "../../assets/icons/skills/axios.svg"
import mui from "../../assets/icons/skills/mui.svg"
import jest from "../../assets/icons/skills/jest.svg"

export function Skills() {
    return (
        <Box id={'skills'}>
            <Title>Skills</Title>
            <div className={s.skills}>
                <Skill title={'React'} icon={react}/>
                <Skill title={'Redux'} icon={redux}/>
                <Skill title={'TypeScript'} icon={ts}/>
                <Skill title={'JavaScript'} icon={js}/>
                <Skill title={'HTML'} icon={html}/>
                <Skill title={'CSS'} icon={css}/>
                <Skill title={'Rest API'} icon={api}/>
                <Skill title={'Axios'} icon={axios}/>
                <Skill title={'Material UI'} icon={mui}/>
                <Skill title={'Jest'} icon={jest}/>
                <Skill title={'Storybook'} icon={storybook}/>
                <Skill title={'GIT'} icon={git}/>
            </div>
        </Box>
    );
}

