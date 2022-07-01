import React from 'react';

// [redux]
import { useAppDispatch } from '_redux/hooks';
import { appSlice } from '_redux/reducers/appSlice';

// [styles]
import styles from '../../styles.module.scss';

interface ITabsBody {
    tabNameActive: string;
}

export const TabsBody: React.FC<ITabsBody> = ({ tabNameActive }) => {
    const { setIsTesting } = appSlice.actions;
    const dispatch = useAppDispatch();
    const setStartView = () => dispatch(setIsTesting(true));

    const tabTest = (
        <>
            <p>
                В этом варианте вы можете посмотреть фунционал, не вводя свои данные
            </p>
            <button onClick={setStartView}>Посмотреть</button>
        </>
    );
    const tabAutf = <p>Login in</p>;
    const tabRegister = <p>Registration</p>;

    const tabFields = {
        test: tabTest,
        autf: tabAutf,
        register: tabRegister,
    };

    return (
        <div className={styles.tabsBody}>
            {tabFields[tabNameActive]}
        </div>
    );
};