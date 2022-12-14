import style from './RegistrationForm.module.css'
import Grid from '@mui/material/Grid';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export const RegistrationForm = () => {

    return <Grid container justifyContent={'center'}>
        <Grid item justifyContent={'center'}>
            <FormControl>
                <FormGroup>
                    <div className={style.formFieldWrap}>
                        <span>Фамилия</span>

                    </div>
                    <TextField className={style.inputStyle} />
                    {/*<TextField type="password"/>*/}
                    <Button type={'submit'} variant={'contained'} color={'primary'}>
                        Login
                    </Button>
                </FormGroup>
            </FormControl>
        </Grid>
    </Grid>


        // <form className={style.formWrap} name="registration" method="POST" action="">
        //     <div className={style.formFieldWrap}>
        //         <span>Фамилия</span>
        //         <input className={style.inputStyle} type='text' name="last_name" required={true}/>
        //     </div>
        //     <div className={style.formFieldWrap}>
        //         <span>Имя</span>
        //         <input className={style.inputStyle} type='text' name="name" required={true}/>
        //     </div>
        //     <div className={style.formFieldWrap}>
        //         <span>Никнейм</span>
        //         <input className={style.inputStyle} type='text' name="nickName" required={true}/>
        //     </div>
        //     <div className={style.formFieldWrap}>
        //         <span>Пароль</span>
        //         <input className={style.inputStyle} type="password" name="Password" required={true}/>
        //
        //     </div>
        //     <span>Лимит на символы</span>
        //     <div className={style.formFieldWrap}>
        //         <span>Подстверждение пароля</span>
        //         <input className={style.inputStyle} type="password" name="Password2" required={true}/>
        //     </div>
        //     <button type={'submit'}>Регистрация</button>
        // </form>

};
