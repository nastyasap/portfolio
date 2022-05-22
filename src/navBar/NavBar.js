import s from './NavBar.module.css'

export function NavBar() {
    return (
        <div className={s.nav}>
            <a href=''>Главная</a>
            <a href=''>Скиллы</a>
            <a href=''>Проекты</a>
            <a href=''>Контакты</a>

        </div>
    );
}

