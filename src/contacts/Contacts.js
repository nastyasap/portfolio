import s from './Contacts.module.css'
import {Title} from "../common/title/Title";

export function Contacts() {
    return (
        <div className={s.contacts}>
            <div className={s.container}>
                <Title text={'Contacts'}/>
                <form className={s.formContainer}>
                    <input/>
                    <input/>
                    <textarea/>
                    <button type={'submit'}>Send</button>
                </form>
            </div>
        </div>
    );
}

