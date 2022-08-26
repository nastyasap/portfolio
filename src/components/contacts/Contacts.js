import s from './Contacts.module.scss'
import {Title} from "../../common/Title/Title";
import {Box} from "../../common/Box/Box";

export function Contacts() {
    return (
        <Box style={{backgroundColor: '#f9f9f9', height:'50vh'}} >
                <Title>Contacts</Title>
                <form className={s.formContainer}>
                    <input/>
                    <input/>
                    <textarea/>
                    <button type={'submit'}>Send</button>
                </form>
        </Box>
    );
}

