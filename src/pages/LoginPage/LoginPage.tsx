import style from './LoginPage.module.css'
import {LoginForm} from "./LoginForm/LoginForm";

export const LoginPage = () => {
    return (
        <div className={style.backgroundForm}>
                <LoginForm/>
        </div>

    );
};
