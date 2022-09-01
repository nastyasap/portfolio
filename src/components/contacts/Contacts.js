import s from './Contacts.module.scss'
import {Title} from "../../common/Title/Title";
import {Box} from "../../common/Box/Box";

export function Contacts() {
    return (
        <Box id={'contacts'} style={{ height:'50vh'}} >
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

