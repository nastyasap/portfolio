import s from './Skills.module.css'
import {Skill} from "./skill/Skill";
import {Title} from "../common/title/Title";

export function Skills() {
    return (
        <div className={s.skillsBlock}>
            <div className={s.container}>
                <Title text={'Skills'}/>
                <div className={s.skills}>
                    <Skill title={'JS'} description={'exdrtcfygvubhijokl zsxdrctfvygbhunijmk xrctvygbhunj'}/>
                    <Skill title={'CSS'} description={'exsdfgh jokl zsxdrctfvygb hunijmk xrctvygbhunj'}/>
                    <Skill title={'React'} description={'exdrtcfygvubhijokl zsxdrctfvdf cgvbh ygbhunijmk xrctvygbhunj'}/>
                    <Skill title={'Redux'} description={'exdrtcfygvubhijokl zsxdrctfvygb cvbn hunijmk xrctvygbhunj'}/>
                </div>
            </div>

        </div>
    );
}

