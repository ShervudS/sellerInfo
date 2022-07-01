import React, { useEffect } from 'react';

// [components]
import { Header } from '_components/MainLayout/components/Header';

// [reducers]
import { useAppDispatch } from '_redux/hooks';
import { wbSlice } from '_redux/reducers/wbSlice';

// [utils]
import { getFirstDayWeekend } from '_utils/helper';
import { getWbData } from '_api/getWbData';

// [styles]
import styles from './styles.module.scss';

interface IMainLayout {
    children: React.ReactNode;
}

export const MainLayout: React.FC<IMainLayout> = ({ children }) => {
    const { setOrders } = wbSlice.actions;
    const dispatch = useAppDispatch();

    const getWbOrders = async () => {
        const date = new Date(getFirstDayWeekend());
        const response = await getWbData('orders', date.toISOString());

        // @ts-ignore
        if (response) {
            dispatch(setOrders(response));
        }
    };

    useEffect(() => {
        getWbOrders();
    });

    return (
        <div className={styles.mainLayout}>
            <Header />
            <div className={styles.main}>
                <div className={styles.aside}></div>
                <div className={styles.content}>{children}</div>
            </div>
            <div className={styles.footer}>Это футер</div>
        </div>
    );
};