import React, { useState } from 'react';
import styles from './styles.module.scss';
import { TabsBody } from '_components/StartPage/components/TabsBody';
import { TabControl } from '_components/StartPage/components/TabControl';

interface IStartPage {
}

const tabs = [
    { label: 'Тест', name: 'test' },
    { label: 'Login in', name: 'autf' },
    { label: 'Registration', name: 'register' },
];

export const StartPage: React.FC<IStartPage> = () => {
    const [tabNameActive, setTabNameActive] = useState('test');

    return (
        <div className={styles.startPage}>
            <div className={styles.startPageWrapper}>
                <h1 className={styles.title}>Seller info</h1>

                <ul className={styles.tabs}>
                    {tabs.map((elem, idx) => (
                        <TabControl
                            onClick={setTabNameActive}
                            activeTabName={tabNameActive}
                            name={elem.name}
                            label={elem.label}
                            key={elem.name + idx}
                        />
                    ))}
                </ul>

                <TabsBody tabNameActive={tabNameActive} />
            </div>
        </div>
    );
};