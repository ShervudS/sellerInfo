import { getDateToDay } from '_utils/helper';

import { BASE_URL } from '_configs/config';

export const getWbData = async (type: string, date = getDateToDay()) => {
    let response;
    const url = new URL(`${BASE_URL}${type}`);
    const params = {
        dateFrom: date,
        key: process.env.WB_KEY,
    };
    // @ts-ignore
    url.search = new URLSearchParams(params).toString();

    try {
        // @ts-ignore
        response = await fetch(url, { method: 'GET' });

        if (response) {
            return await response.json();
        }
    } catch (e) {
        console.log(e);
    }
};