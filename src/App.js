import s from './App.module.scss';
import {Main} from "./components/main/Main";
import {Contacts} from "./components/contacts/Contacts";
import {Footer} from "./components/footer/Footer";
import {Skills} from "./components/skills/Skills";
import {Projects} from "./components/projects/Projects";
import {NavBar} from "./components/header/navBar/NavBar";

function App() {
    return (
        <div className={s.App}>
            <NavBar/>
            <Main/>
            <Skills/>
            <Projects/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
