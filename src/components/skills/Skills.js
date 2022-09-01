import s from './Skills.module.scss'
import {Skill} from "./skill/Skill";
import {Box} from "../../common/Box/Box";
import {Title} from "../../common/Title/Title";

export function Skills() {
    return (
        <Box id={'skills'}>
            <Title>Skills</Title>
            <div className={s.skills}>
                <Skill title={'JS'} description={'exdrtcfygvubhijokl zsxdrctfvygbhunijmk xrctvygbhunj'}/>
                <Skill title={'CSS'} description={'exsdfgh jokl zsxdrctfvygb hunijmk xrctvygbhunj'}/>
                <Skill title={'React'}
                       description={'exdrtcfygvubhijokl zsxdrctfvdf cgvbh ygbhunijmk xrctvygbhunj'}/>
                <Skill title={'Redux'}
                       description={'exdrtcfygvubhijokl zsxdrctfvygb cvbn hunijmk xrctvygbhunj'}/>
            </div>
        </Box>
    );
}

