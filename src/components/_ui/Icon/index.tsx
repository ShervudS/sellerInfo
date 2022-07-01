import React from 'react';

// import Icon_logo from '_images/icons/icon-logo.svg';
import Icon_settings from '_images/icons/icon-settings.svg';
import Icon_reloaded from '_images/icons/icon-reloaded.svg';

interface IIcon {
    name: string;
}

export const Icon: React.FC<IIcon> = ({ name }) => {
    const icons = {
        // logo: <Icon_logo />,
        settings: <Icon_settings />,
        reloaded: <Icon_reloaded />,
    };

    return icons[name];
};
