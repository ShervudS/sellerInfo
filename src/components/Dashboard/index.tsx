import React from 'react';

// [components]
import { StartPage } from '_components/StartPage';
import { MainLayout } from '_components/MainLayout';
import { WbInfo } from './components/WbInfo';

// [redux]
import { useAppSelector } from '_redux/hooks';

// [styles]
// import styles from './styles.module.scss';

export const Dashboard: React.FC = () => {
    const { isLogin, isTesting } = useAppSelector((state) => state.appReducer);

    if (!isLogin && !isTesting) {
        return <StartPage />;
    }

    return (
        <MainLayout>
            <WbInfo />
        </MainLayout>
    );
};