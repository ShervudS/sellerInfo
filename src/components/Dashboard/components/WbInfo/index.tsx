import React from 'react';

// [components]
import { Container } from '_components/Container';

// [redux]
import { useAppDispatch, useAppSelector } from '_redux/hooks';
import { wbSlice } from '_redux/reducers/wbSlice';

// [styles]
import styles from './styles.module.scss';
import { AppButton } from '_ui/AppButton';
import { Icon } from '_ui/Icon';

export const WbInfo: React.FC = () => {
    const { orders, firstDayFetchData, endDayFetchData } = useAppSelector((state) => state.wbReducer);
    const { setFirstDayFetchData, setEndDayFetchData } = wbSlice.actions;
    const dispatch = useAppDispatch();

    const switchFirstDayFetchData = (e: React.ChangeEvent<HTMLInputElement>): void => {
        dispatch(setFirstDayFetchData(e.target.value));
    };

    const switchEndDayFetchData = (e: React.ChangeEvent<HTMLInputElement>): void => {
        dispatch(setEndDayFetchData(e.target.value));
    };

    const onReloadData = (): void => {
        console.log('on reloaded click button');
    };

    const onSettingsOption = (): void => {
        console.log('Click settings options');
    };

    return (
        <Container stylesClass={styles.infoContainer}>
            <h2 className={styles.title}>Wildberies order info</h2>

            <div className={styles.control}>
                <span>Options:</span>

                <div className={styles.controlField}>
                    <span>C</span>
                    <input type='date' value={firstDayFetchData} onChange={switchFirstDayFetchData} />
                </div>

                <div className={styles.controlField}>
                    <span>По</span>
                    <input type='date' value={endDayFetchData} onChange={switchEndDayFetchData} />
                </div>

                <AppButton
                    onClick={onReloadData}
                    styleClass={styles.reloadedButton}
                >
                    <Icon name='reloaded' />
                </AppButton>

                <AppButton
                    onClick={onSettingsOption}
                    styleClass={styles.settingsButton}
                >
                    <Icon name='settings' />
                </AppButton>
            </div>

            {/*<div>{JSON.stringify(orders)}</div>*/}

            <ul className={styles.orderList}>
                {orders.map((order) => {
                    const amountReceipt =
                        order.totalPrice * (1 - order.discountPercent / 100);
                    return (
                        <li className={styles.cardOrderInfo}>
                            info about order product
                            <p>Номер заказа: {order.gNumber}</p>
                            <p>Товар: {order.subject}</p>
                            <p>К перечислению: {amountReceipt.toFixed(2)}</p>
                            <p>Дата заказа: {order.date}</p>
                            <p>
                                Последнее обновление даты на сервере:
                                {order.lastChangeDate}
                            </p>
                            <p>Артикул: {order.supplierArticle}</p>
                            <p>Область доставки: {order.oblast}</p>
                            <p>Категория товара: {order.category}</p>
                            <p>Бренд: {order.brand}</p>
                        </li>
                    );
                })}
            </ul>
        </Container>
    );
};