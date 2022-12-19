import style from "./Button.module.css";

type buttonType= "button" | "submit" | "reset" | undefined
type buttonPropsType={
    type:buttonType
    disabled?:boolean
    text:string
    bigButton?:boolean
}
export const Button = (props:buttonPropsType) => {
    return (
        <button className={props.bigButton ? `${style.button} bigButton` : style.button} type={props.type} disabled={props.disabled} >
            {props.text}
        </button>
    );
};
