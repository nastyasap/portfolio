import s from './App.module.scss';
import {Header} from "./components/header/Header";
import {Main} from "./components/main/Main";
import {Contacts} from "./components/contacts/Contacts";
import {Footer} from "./components/footer/Footer";
import {Skills} from "./components/skills/Skills";
import {Projects} from "./components/projects/Projects";

function App() {
    return (
        <div className={s.App}>
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
