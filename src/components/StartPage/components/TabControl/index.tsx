import React from 'react';
import classNames from 'classnames';

import styles from '../../styles.module.scss';

interface ITabControl {
    onClick: React.Dispatch<string>;
    activeTabName: string;
    name: string;
    label: string;
}

export const TabControl: React.FC<ITabControl> = ({
    onClick,
    name,
    activeTabName,
    label,
}) => {
    const setTabView = () => {
        onClick(name);
    };

    const tabClassName = classNames(styles.tab, {
        [styles.tabActive]: name === activeTabName,
    });

    return (
        <li className={tabClassName} onClick={setTabView}>
            {label}
        </li>
    );
};