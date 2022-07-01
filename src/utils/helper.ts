export const getDateToDay = () => {
    const date = new Date();
    return date.toISOString();
};

export const getFirstDayWeekend = () => {
    const d = new Date();

    // const optionsDate = {
    //   day: d.getDay() > d.getDate() ? 0 : d.getDate() - d.getDay(),
    //   month: d.getDay() > d.getDate() ? d.getMonth() : d.getMonth() + 1
    // };

    const da = new Date();
    const day = d.getDay(),
        diff = d.getDate() - day + (day === 0 ? -6 : 1); // adjust when day is sunday
    const fullFirstDayDate = new Date(da.setDate(diff));

    return fullFirstDayDate.toISOString();
};