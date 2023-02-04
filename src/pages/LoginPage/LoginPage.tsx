import style from './LoginPage.module.css'
import {LoginForm} from "./LoginForm/LoginForm";
import {useCreateLogOutQuery} from "../../api/login.api";

export const LoginPage = () => {
    let {data, error, isLoading, isUninitialized} = useCreateLogOutQuery({});
    return (
        <div className={style.backgroundForm}>
            <LoginForm/>
        </div>

    );
};
