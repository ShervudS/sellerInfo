import React from 'react';
import classNames from 'classnames';
import styles from './styles.module.scss';

interface IContainer {
    children: React.ReactNode;
    stylesClass?: string;
}

export const Container: React.FC<IContainer> = ({ children, stylesClass }) => {
    const containerClasses = classNames(styles.container, stylesClass);

    return <div className={containerClasses}>{children}</div>;
};