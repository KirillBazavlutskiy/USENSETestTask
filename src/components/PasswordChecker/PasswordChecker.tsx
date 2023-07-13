import {FC, useEffect, useState} from 'react';
import s from './PasswordChecker.module.css';

interface PasswordCheckerProps {
    password: string
}

const getColor = (passwordStrong: number) => {
    let color = '#ccc';
    switch (passwordStrong) {
        case 0:
            color =  '#ccc';
            break;
        case 1:
            color = '#ff4050';
            break;
        case 2:
            color = '#fff563';
            break;
        case 3:
            color = '#56fc6c';
            break;
        default:
            color = '#ccc';
    }
    return color;
}

const PasswordChecker: FC<PasswordCheckerProps> = ({ password }) => {

    const [passwordStrong, setPasswordStrong] =
        useState<number>(0);

    useEffect(() => {
        setPasswordStrong(0);
        if (password.length > 0 && password.length < 8) {
            setPasswordStrong(1);
        } else if (password.length >= 8) {
            let passwordStrong = 0;

            if (/[A-Za-zА-Яа-я]/.test(password)) passwordStrong++;
            if (/[0-9]/.test(password)) passwordStrong++;
            if (/[$&+,:;=?@#|'<>.^*()%!-]/.test(password)) passwordStrong++;

            setPasswordStrong(passwordStrong)
        }
    }, [password])

    return (
        <div className={s.container}>
            <div
                className={s.strongLine}
                style={{
                    backgroundColor: getColor(passwordStrong)
                }}
            />
            <div
                className={s.strongLine}
                style={{
                    backgroundColor:
                        password.length > 0 && password.length < 8 ? "#ff4050" :
                            passwordStrong >= 2 ? getColor(passwordStrong) : '#ccc'
                }}
            />
            <div
                className={s.strongLine}
                style={{
                    backgroundColor:
                        password.length > 0 && password.length < 8 ? "#ff4050" :
                            passwordStrong >= 3 ? getColor(passwordStrong) : '#ccc'
                }}
            />
        </div>
    );
};

export default PasswordChecker;
