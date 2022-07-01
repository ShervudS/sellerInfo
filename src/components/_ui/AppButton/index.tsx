import React from 'react';
import classNames from 'classnames';
import styles from './styles.module.scss';

interface IAppButton {
    children: React.ReactNode | React.ReactChildren;
    type?: string;
    onClick: React.MouseEventHandler;
    styleClass: string;
}

export const AppButton: React.FC<IAppButton> = ({ children, type, onClick, styleClass }) => {
    const buttonPrimaryClass = classNames(styles.btnPrimary, styleClass);
    return (
        <button className={buttonPrimaryClass} onClick={onClick}>{children}</button>
    );
};