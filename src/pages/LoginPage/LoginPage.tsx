import style from './LoginPage.module.css'
import {LoginForm} from "./LoginForm/LoginForm";
import { useSignIn } from 'react-auth-kit'
import {usePostLoginMutation} from "../../api/login.api";
export const LoginPage = () => {
    return (
        <div className={style.backgroundForm}>
                <LoginForm/>
        </div>

    );
};
