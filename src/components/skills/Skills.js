import s from './Skills.module.css'
import {Skill} from "./skill/Skill";
import {Box} from "../../common/Box/Box";
import {Title} from "../../common/title/Title";

export function Skills() {
    return (
        <Box bgColor={'#f9f9f9'}>
                    <Title text={'Skills'}/>
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
