import style from './Menu.module.css'
import {FC, JSXElementConstructor, ReactNode} from "react";

type MenuPropsType = {
    children: ReactNode
    className?: string
    hidden?: boolean
    onClick: (e: any, ref: any) => any
    ref?: any
    handler?:(a:boolean)=>void
}

export const Menu: FC<MenuPropsType> = ({
                                            ref,
                                            onClick,
                                            hidden,
                                            children,
                                            className,
                                            handler
                                        }) => {
    return (
        <div ref={ref}
             className={`${style.menuWrapper} ${hidden ? style.hidden : ''} ${className ? className : ''} } `}>
            {children}
        </div>
    );
};
