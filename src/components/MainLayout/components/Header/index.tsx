import React from 'react';

// [components]
import { Container } from '_components/Container';
import { AppButton } from '_ui/AppButton';
// import { ThemeSwitcher } from '_ui/ThemeSwitcher';

// [utils]
import { getDateToDay } from '_utils/helper';

// [styles]

import styles from './styles.module.scss';


export const Header: React.FC = () => {
    return (
        <div className={styles.header}>
            <Container stylesClass={styles.headerContainer}>
                <AppButton
                    type={'primary'}
                    onClick={() => console.log(2423)}
                    styleClass={styles.logo}
                >
                    Seller Info
                </AppButton>

                <div className={styles.control}>
                    <div className={styles.currentDate}>
                        {getDateToDay().slice(0, 10)}
                    </div>
                    <button>Theme</button>
                    <button>Lang</button>
                    {/*<ThemeSwitcher/>*/}
                    <AppButton
                        type={'primary'}
                        onClick={() => console.log('open settings modal')}
                        styleClass={styles.settingsBtn}
                    >
                        Settings
                    </AppButton>
                </div>
            </Container>
        </div>
    );
};