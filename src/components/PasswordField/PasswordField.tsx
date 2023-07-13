import {Dispatch, FC, SetStateAction} from 'react';
import s from './PasswordField.module.css';

interface PasswordFieldProps {
    password: string;
    setPassword: Dispatch<SetStateAction<string>>;
    placeholder: string;
}

const PasswordField: FC<PasswordFieldProps> = ({ password, setPassword, placeholder }) => {
    return (
        <input
            className={s.passwordInput}
            value={password}
            placeholder={placeholder}
            onChange={e => setPassword(e.target.value)}
            type="text"
        />
    );
};

export default PasswordField;
