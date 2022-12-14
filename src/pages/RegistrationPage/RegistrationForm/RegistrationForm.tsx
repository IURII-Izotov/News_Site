import React, { useState } from 'react';
import {
    Button,
    Cascader,
    DatePicker,
    Form,
    Input,
    InputNumber,
    Radio,
    Select,
    Switch,
    TreeSelect,
} from 'antd';
type SizeType = Parameters<typeof Form>[0]['size'];

export const RegistrationForm = () => {
    const [componentSize, setComponentSize] = useState<SizeType | 'default'>('default');

    const onFormLayoutChange = ({ size }: { size: SizeType }) => {
        setComponentSize(size);
    };

    return (
        <Form
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 14 }}
            layout="horizontal"
            initialValues={{ size: componentSize }}
            onValuesChange={onFormLayoutChange}
            size={componentSize as SizeType}
        >
            <Form.Item label="Фамилия">
                <Input />
            </Form.Item>
            <Form.Item >
                <Button>Button</Button>
            </Form.Item>
        </Form>
    );
};


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

