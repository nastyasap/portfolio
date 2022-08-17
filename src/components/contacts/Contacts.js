import s from './Contacts.module.css'
import {Title} from "../../common/title/Title";
import {Box} from "../../common/Box/Box";

export function Contacts() {
    return (
        <Box bgColor={'#f9f9f9'} height={'50vh'}>
                <Title text={'Contacts'}/>
                <form className={s.formContainer}>
                    <input/>
                    <input/>
                    <textarea/>
                    <button type={'submit'}>Send</button>
                </form>
        </Box>
    );
}

