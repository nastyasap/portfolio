import s from './Projects.module.css'
import {Project} from "./project/Project";
import {Title} from "../common/title/Title";

export function Projects() {
    return (
        <div className={s.projectsBlock}>
            <div className={s.container}>
                <Title text={'My Projects'}/>
                <div className={s.projects}>
                    <Project img={'https://i.pinimg.com/originals/b9/59/f1/b959f1670d2631589643575de5a782b7.jpg'}
                             title={'JS'} description={'exdrtcfygvubhijokl zsxdrctfvygbhunijmk xrctvygbhunj'}/>
                    <Project img={'https://i.pinimg.com/originals/b9/59/f1/b959f1670d2631589643575de5a782b7.jpg'}
                             title={'CSS'} description={'exsdfgh jokl zsxdrctfvygb hunijmk xrctvygbhunj'}/>
                    <Project img={'https://i.pinimg.com/originals/b9/59/f1/b959f1670d2631589643575de5a782b7.jpg'}
                             title={'CSS'} description={'exsdfgh jokl zsxdrctfvygb hunijmk xrctvygbhunj'}/>
                </div>
            </div>

        </div>
    );
}

