import s from './Projects.module.scss'
import {Project} from "./project/Project";
import {Box} from "../../common/Box/Box";
import {Title} from "../../common/Title/Title";
import packs from "../../assets/images/projects/packs.png"
import socNet from "../../assets/images/projects/social.png"
import todo from "../../assets/images/projects/todo.png"
import salary from "../../assets/images/projects/salaries.png"

export function Projects() {
    return (
        <Box id={'projects'}>
            <Title>My Projects</Title>
            <div className={s.projects}>
                <Project img={todo} link={'https://nastyasap.github.io/myTodolist'}
                         title={'To do List'}
                         description={"You can make the list of tasks to not forget about something. It's a project written on typescript with redux. I use redux toolkit, axios and saga. Tests on reducers are written"}/>
                <Project img={packs} link={'https://Ivan0195.github.io/FridayProjectTest'}
                         title={'Card Packs'}
                         description={'You can create a card pack to memorize something. The process of learning includes your previous answers. Also you can see public packs of other users.'}/>
                <Project img={socNet} link={'https://nastyasap.github.io/Social-Network/#/profile'}
                         title={'Social Network'}
                         description={"It's a typical social network. It's written on typescript "}/>
                <Project img={salary} link={'https://yandex-salaries.herokuapp.com/drivers'}
                         title={'Count Salary'}
                         description={"The application for integrating Yandex Taxi with my previous company's internal product to simplify work with large amounts of data."}/>
            </div>
        </Box>
    );
}

